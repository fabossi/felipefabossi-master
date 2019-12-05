const router = require("express").Router();
const emailController = require('../controllers/mail-controller');

router.post('/sendEmail', emailController.sendEmail);
module.exports = router;
