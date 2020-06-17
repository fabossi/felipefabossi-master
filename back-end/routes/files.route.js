const router = require("express").Router();
const fileController = require('../controllers/fileController');

router.post('/files', fileController.createFiles);
module.exports = router;
