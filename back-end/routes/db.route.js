const router = require("express").Router();
const db_controller = require('../controllers/db-controller');

router.post('/', db_controller);

module.exports = router;
