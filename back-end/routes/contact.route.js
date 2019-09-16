const express = require('express');
const router = express.Router();
const db_controller = require('../controllers/db.controller');

router.post('/contact', db_controller.saveContactToMongo);
router.get('/contact/:id', db_controller.getUserInformationById);

module.exports = router;
