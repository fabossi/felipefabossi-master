const router = require("express").Router();
const contact_controller = require('../controllers/contact-controller');

router.post('/contact', function (req, res) {
  contact_controller
});

module.exports = router;
