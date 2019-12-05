const express = require('express');
const router = express.Router();
const dbController = require('../controllers/db.controller');

router.post('/contact', dbController.saveContactToMongo);
router.get('/contact/:id', dbController.getUserInformationById);

module.exports = router;
