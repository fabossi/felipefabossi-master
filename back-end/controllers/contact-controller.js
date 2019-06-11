const express = require('express');
const Contact = require('../models/contact-model');

const router = express.Router();

router.post((req, res, next) => {
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
      res.status(201).json({
        message: "back post succesfuly",
        contact: {
          ...result,
          id: result._id,
          // name: req.body.name,
          // lastName: req.body.lastName,
          // email: req.body.email,
          // message: req.body.message,
        }
      });
    })
    .catch(error => console.log(error));
}
);
