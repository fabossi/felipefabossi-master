const express = require('express');
const router = express.Router();
const db_controller = require('../controllers/db.controller');

router.post('/signup', db_controller.signUpToMongo);

module.exports = router;
