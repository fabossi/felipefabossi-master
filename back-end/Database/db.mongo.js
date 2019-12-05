require('dotenv').config();
const mongoose = require('mongoose');
const mongoDbUrl = process.env.url_mongo;

let _db;

const initDb = callback => {
  return new Promise((resolve, reject) => {
    if (_db) {
      console.log('Database is already initialized!');
      return callback(null, _db);
    }
    mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(client => {
        _db = client;
        callback(null, _db);
        resolve(_db);
      })
      .catch(err => {
        callback(err);
        reject(err);
      });
  }).catch(error => console.error(error));
};

const getDb = async () => {
  if (!_db) {
    throw Error('Database not initialzed');
  }
  return await _db;
};

module.exports = {
  initDb,
  getDb,
  _db
};
