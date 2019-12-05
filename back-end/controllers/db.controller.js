const db = require('../Database/db.mongo');
const Contact = require('../models/contact.model');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const mailController = require('./mail.controller');
const adminController = require('./adminEmail.controller');
const jwt = require('jsonwebtoken');
const key = require('../models/key.model');

exports.signUpToMongo = (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
    const user = new User({
      name: req.body.name.toLowerCase(),
      lastName: req.body.lastName.toLowerCase(),
      email: req.body.email.toLowerCase(),
      password: hashedPassword
    });
    if (user !== null || user !== '') {
      user
        .save()
        .then((createdUser) => {
          return res.status(201).json({ res: createdUser });
        }).catch(error => {
          console.log(error);
          if (error.errors.email.kind === 'unique') {
            return res.status(401).json({ message: `Email: "${req.body.email}" already registered, try again!` });
          } else {
            return res.status(401).json({ message: 'Invalid authentication credentials, try again!' });
          }
        })
    } else {
      res.status(500).json({ message: 'Plese fill all fields!' });
    }
  }).catch(error => { res.status(500).json({ message: 'Singup user failed, try again later' }); });
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
      return res.status(200).json({
        message: `Welcome, ${fetchedUser.name.charAt(0).toUpperCase() + fetchedUser.name.substring(1)}
        ${fetchedUser.lastName.charAt(0).toUpperCase() + fetchedUser.lastName.substring(1)},
        it's great to have you here!`, token: token, expiresIn: 3600, userId: fetchedUser._id
      });
    }).catch(error => {
      res.status(500).json({ message: 'wrong email or password! Try again.' });
    })
}

exports.saveContactToMongo = (req, res) => {
  const newContact = new Contact({
    name: req.body.nameTextInput.toLowerCase(),
    lastName: req.body.lastNameTextInput.toLowerCase(),
    message: req.body.messageTextInput.toLowerCase(),
    email: req.body.emailTextInput.toLowerCase(),
  });
  newContact
    .save()
    .then(result => {
      mailController.sendEmail(req.body.emailTextInput);
      adminController.sendAdminEmail(req.body.emailTextInput, req.body.messageTextInput);
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
}

exports.getMongoContact = (req, res) => {
  db
    .getDb()
    .db()
    .collection('contacts')
    .find({})
    .toArray()
    .then(resultado => {
      console.log(resultado); res.status(200).json({ users: resultado });;
    }).catch(error => { res.status(500).json({ err: error }); });
}

exports.getUserInformationById = (req, res) => {
  User
    .findById(req.params.id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found!' });
      }
    }).catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Failed to find the user, try again.' });
    });
}

exports.deleteContacts = (req, res) => {
  db
    .getDb()
    .db()
    .collection('contacts')
    .deleteMany({})
    .then(result => {
      console.log(result);
    }).catch(error => { res.status(500).json({ err: error }); });
}
