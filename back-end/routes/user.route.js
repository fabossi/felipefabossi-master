const express = require('express');
const router = express.Router();
const dbController = require('../controllers/db.controller');

router.post('/signup', dbController.signUpToMongo);
router.post('/login', dbController.loginUser)

module.exports = router;
