const express = require('express');
const router = express.Router();
const contact_controller = require('../controllers/contact.controller');

router.post('/contact', contact_controller.insertContact);

module.exports = router;
