const router = require("express").Router();
const fileController = require('../controllers/fileController');

router.post('/files', fileController.createFiles);
router.get('/downloadHTML', fileController.downloadHTML);
router.get('/downloadJS', fileController.downloadJS);
router.get('/downloadCSS', fileController.downloadCSS);

module.exports = router;

