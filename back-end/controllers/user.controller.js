const db_controller = require('../controllers/db.controller');

exports.signup = (req, res) => {
  db_controller.signupToMongo(req, res)
    .then()
    .catch(error => {
      console.error(error);
      res.sendStatus(500).json({ error: error, message: 'We had a problem to signup, try again, please.' });
    });
}
