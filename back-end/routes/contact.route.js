const express = require('express');
const router = express.Router();
const db_controller = require('../controllers/db.controller');

router.post('/contact', db_controller.saveContactToMongo);

module.exports = router;
