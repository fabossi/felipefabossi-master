const db_controller = require('../controllers/db.controller');

exports.signup = (req, res) => {
  db_controller.signupToMongo(req, res);
}
