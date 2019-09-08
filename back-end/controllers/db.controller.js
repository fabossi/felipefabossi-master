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
      user.save().then((createdUser) => {
        res.status(201).json({
          message: `Welcome, ${req.body.name} ${req.body.lastName}! `, res: createdUser
        });
        resolve(createdUser);
      }).catch(error => {
        console.log(error);
        res.status(401).json({ error: error, message: 'Invalid authentication credentials!' });
        reject(error);
      })
    }).catch(error => { console.log(error), res.status(500).json({ message: 'Singup user failed, try again later' }) });
  }).catch(error => { console.log(error), res.status(500).json({ message: 'Singup user failed, try again later' }) })
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
        console.error(error), res.status(500)
          .json({ message: 'Sending contact failed, we will back you to the last' });
        reject(error);
      });
  }).catch(error => {
    console.error(error),
      res.status(502)
        .json({ message: 'Ops, something wrong happen, try again!' });
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
