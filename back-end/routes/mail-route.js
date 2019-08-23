const router = require("express").Router();
const email_controller = require('../controllers/mail-controller');

router.post('/sendEmail', email_controller.sendEmail);
module.exports = router;
