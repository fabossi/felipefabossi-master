const db = require('../Database/db.mongo');
const Contact = require('../models/contact.model');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
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
      user
        .save()
        .then((createdUser) => {
          resolve(createdUser);
          res.status(201).json(
            {
              message: 'User added succesfully!',
              res: createdUser
            });
        }).catch(error => {
          console.log(error);
          reject(error);
          res.status(500).json({
            error: error,
            message: 'Invalid authentication credentials!'
          })
        })
    }).catch(err => console.error(err));
  }).catch(error => console.error(error))
}

exports.saveContactToMongo = (req, res) => {
  return new Promise((resolve, reject) => {
    const newContact = new Contact({
      name: req.body.nameTextInput.toLowerCase(),
      lastName: req.body.lastNameTextInput.toLowerCase(),
      message: req.body.messageTextInput.toLowerCase(),
      email: req.body.emailTextInput.toLowerCase(),
    });
    db
      .getDb()
      .db('contacts')
      .collection('contacts')
      .insertOne(newContact)
      .then(result => {
        res.status(200).json(result.ops[0]); resolve(result);
      }).catch(error => { res.status(500).json({ err: error }); reject(error); });
  }).catch(error => { res.status(500).json({ err: error }); })
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
