const router = require("express").Router();
const fileController = require('../controllers/fileController');

router.post('/files', fileController.createFiles);
router.post('/sendFile', fileController.sendFiles);

module.exports = router;

