const db = require('../Database/db.mongo');
const Contact = require('../models/contac-model');

exports.saveToMongo = (req, res) => {
  return new Promise((resolve, reject) => {
    const newContact = new Contact({
      name: req.body.nameTextInput,
      lastName: req.body.lastNameTextInput,
      message: req.body.messageTextInput,
      email: req.body.emailTextInput,
    });
    db.getDb()
      .db()
      .collection('contacts')
      .insertOne(newContact)
      .then(result => {
        res.status(200).json(result.ops[0]);
        resolve(result);
      }).catch(err => { console.error(err); res.sendStatus(500).json({ err: err }); reject(error); });
  }).catch(error => { console.error(error); res.sendStatus(500).json({ err: err }); reject(error); })
}

exports.getMongoContact = (req, res) => {
  return new Promise((resolve, reject) => {
    db.getDb()
      .db()
      .collection('contacts')
      .find({})
      .then(result => {
        console.log(result); resolve(result)
      }).catch(error => {
        console.error(error); res.sendStatus(500).json({ err: error }); reject(error)
      });
  }).catch(err => { console.error(err); })
}

exports.deleteContacts = (req, res) => {
  return new Promise((resolve, reject) => {
    db.getDb()
      .db()
      .collection('contacts')
      .deleteMany({})
      .then(result => {
        console.log(result); resolve(result)
      }).catch(error => {
        console.error(error); res.sendStatus(500).json({ err: error }); reject(error)
      });
  }).catch(err => { console.error(err); })
}
