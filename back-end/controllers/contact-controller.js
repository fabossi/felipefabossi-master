const express = require('express');
const Contact = require('../models/contact-model');

const router = express.Router();

exports.postContact = (req, res) => {
  console.log(req.body.name);
  return new Promise((resolve, reject) => {
    const contact = new Contact({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      message: req.body.message,
    });
    console.log(contact);
    contact
      .save()
      .then(result => {
        if (result) {
          console.log(result);
          resolve(result)
          res.send(result);
          res.status(200).json({
            message: 'oi, funciona'
          });
        }
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  })
}
