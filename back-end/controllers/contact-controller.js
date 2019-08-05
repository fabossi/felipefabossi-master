const express = require('express');
const app = express();
const Contact = require('../models/contac-model');
const mail_controller = require('../controllers/mail-controller');
const admin_controller = require('../controllers/admin-email-controller');
const db = require('../Database/db.mongo');
const contacts = [];

exports.insertContact = (req, res) => {
  console.log(req.body);
  return new Promise((resolve, reject) => {
    const newContact = {
      name: req.body.nameTextInput,
      lastName: req.body.lastNameTextInput,
      message: req.body.messageTextInput,
      email: req.body.emailTextInput,
    };
    db.getDb()
      .db('fabossiSite')
      .collection('contacts')
      .insertOne(newContact)
      .then(result => {
        console.log(result.ops);
        mail_controller.sendEmail(req.body.email);
        admin_controller.sendAdminEmail(req.body.email, req.body.message);
        contacts.push(result);
        res.status(200).json(result.ops[0]);
        resolve(result);
      }).catch(err => { console.error(err); res.sendStatus(422).json({ err: err }); reject(error); });
  }).catch(error => { console.error(error); reject(error); });
}

exports.getContact = (req, res) => {
  new Promise((resolve, reject) => {
    db.getDb()
      .db()
      .collection('contacts')
      .find()
      .then(result => { console.log(result); resolve(result) }).catch(error => { console.error(error); reject(error) });
  })
}
