const express = require('express');
const app = express();
const Contact = require('../models/contac-model');
const mail_controller = require('../controllers/mail-controller');
const admin_controller = require('../controllers/admin-email-controller');
const db = require('../Database/db.mongo');
const sanitize = require('express-sanitizer');
const contacts = [];

app.use(sanitize());

exports.insertContact = (req, res) => {
  return new Promise((resolve, reject) => {
    const newContact = new Contact({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      message: req.body.message,
    });
    db.getDb()
      .db()
      .collection('contacts')
      .insertOne(newContact)
      .then(result => {
        mail_controller.sendEmail(req.body.email);
        admin_controller.sendAdminEmail(req.body.email, req.body.message);
        contacts.push(result);
        res.status(200).json(result.ops[0]);
        resolve(result);
      }).catch(err => { console.error(err); reject(error); });
  }).catch(error => { console.error(error); reject(error); });
}
