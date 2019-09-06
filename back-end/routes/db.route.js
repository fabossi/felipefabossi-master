const router = require("express").Router();
const db_controller = require('../controllers/db.controller');

router.post('/saveContact', db_controller.saveContactToMongo);
router.get('/getContacts', db_controller.getMongoContact);
router.delete('/deleteContacts', db_controller.deleteContacts);

module.exports = router;
