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
    const sanitizedName = req.sanitize(req.body.name);
    const sanitizedLastName = req.sanitize(req.body.lastName);
    const sanitizedEmail = req.sanitize(req.body.email);
    const sanitizedMessage = req.sanitize(req.body.message);
    const newContact = new Contact({
      name: sanitizedName,
      lastName: sanitizedLastName,
      email: sanitizedEmail,
      message: sanitizedMessage,
    });
    db.getDb()
      .db()
      .collection('contacts')
      .insertOne(newContact)
      .then(result => {
        console.log(result)
        mail_controller.sendEmail(req.body.email);
        admin_controller.sendAdminEmail(req.body.email, req.body.message);
        contacts.push(result);
        res.status(200).json({ contacts });
        resolve(contacts);
      }).catch(err => { console.error(err); reject(error); });
  }).catch(error => { console.error(error); reject(error); });
}
