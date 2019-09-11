const db = require('../Database/db.mongo');
const Contact = require('../models/contact.model');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const mail_controller = require('./mail.controller');
const admin_controller = require('./adminEmail.controller');
const jwt = require('jsonwebtoken');
const key = require('../models/key.model');

exports.signUpToMongo = (req, res) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
      const user = new User({
        name: req.body.name.toLowerCase(),
        lastName: req.body.lastName.toLowerCase(),
        email: req.body.email.toLowerCase(),
        password: hashedPassword
      });
      if (user !== null || user !== '') {
        user.save().then((createdUser) => {
          res.status(201).json({
            message: `Welcome to my page, ${req.body.name} ${req.body.lastName}!`, res: createdUser
          });
          resolve(createdUser);
        }).catch(error => {
          console.log(error);
          if (error.errors.email.kind === 'unique') {
            res.status(401).json({ message: `Email: "${req.body.email}" already registered, try again!` });
          } else {
            res.status(401).json({ message: 'Invalid authentication credentials, try again!' });
          }
          reject(error);
        })
      } else {
        res.status(404).json({ message: 'Plese fill all fields!' });
      }
    }).catch(error => { console.log(error), res.status(500).json({ message: 'Singup user failed, try again later' }) });
  }).catch(error => { console.log(error), res.status(500).json({ message: 'Singup user failed, try again later' }) });
}

exports.loginUser = (req, res) => {
  let fetchedUser;
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: 'wrong email or password! Try again.' })
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password)
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({ message: 'wrong email or password! Try again.' })
      }
      const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id }, key.s_k, { expiresIn: '1h' });
      res.status(200).json({
        message: `Welcome ${fetchedUser.name.charAt(0).toUpperCase() + fetchedUser.name.substring(1)}
         ${fetchedUser.lastName.charAt(0).toUpperCase() + fetchedUser.lastName.substring(1)},
       it's great to have you here!`, token: token, expiresIn: 3600, userId: fetchedUser._id
      });

    }).catch(error => {
      res.status(500).json({ error: error, message: 'wrong email or password! Try again.' });
    })
}

exports.saveContactToMongo = (req, res) => {
  return new Promise((resolve, reject) => {
    const newContact = new Contact({
      name: req.body.nameTextInput.toLowerCase(),
      lastName: req.body.lastNameTextInput.toLowerCase(),
      message: req.body.messageTextInput.toLowerCase(),
      email: req.body.emailTextInput.toLowerCase(),
    });
    // db
    //   .getDb()
    //   .db('Fabossi-website')
    //   .collection('contacts')
    //   .insertOne(newContact)
    newContact
      .save()
      .then(result => {
        mail_controller.sendEmail(req.body.emailTextInput);
        admin_controller.sendAdminEmail(req.body.emailTextInput, req.body.messageTextInput);
        res.status(200)
          .json({
            res: result,
            message: 'Your message was sent succesfully.'
          });
        resolve(result);
      }).catch(error => {
        console.error(error),
          res.status(500)
            .json({ message: 'Sending contact failed, we will back you to the last step' });
        reject(error);
      });
  }).catch(error => {
    console.error(error),
      res.status(502)
        .json({ message: 'Sending contact failed, we will back you to the last step' });
  })
}

exports.getMongoContact = (req, res) => {
  return new Promise((resolve, reject) => {
    db
      .getDb()
      .db()
      .collection('contacts')
      .find({})
      .toArray()
      .then(resultado => {
        console.log(resultado); res.status(200).json({ users: resultado }); resolve(resultado);
      }).catch(error => { res.status(500).json({ err: error }); reject(error) });
  }).catch(error => { console.error(error); res.status(500).json({ err: error }); })
}

exports.deleteContacts = (req, res) => {
  return new Promise((resolve, reject) => {
    db
      .getDb()
      .db()
      .collection('contacts')
      .deleteMany({})
      .then(result => {
        console.log(result); resolve(result)
      }).catch(error => { res.status(500).json({ err: error }); reject(error) });
  }).catch(err => { console.error(err); res.status(500).json({ err: error }); })
}
