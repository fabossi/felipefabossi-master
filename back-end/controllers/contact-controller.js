const db_controller = require('../controllers/db-controller');
const mail_controller = require('../controllers/mail-controller');
const admin_controller = require('../controllers/admin-email-controller');

exports.insertContact = (req, res) => {
  return new Promise((resolve, reject) => {
    db_controller.saveToMongo(req, res)
      .then(result => {
        mail_controller.sendEmail(req.body.emailTextInput);
        admin_controller.sendAdminEmail(req.body.emailTextInput, req.body.messageTextInput);
        resolve(result);
      })
      .catch(error => {
        console.error(error);
        res.sendStatus(500).json({ error: error });
        reject(error);
      });
  })
}
