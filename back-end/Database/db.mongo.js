// const mongodb = require('mongodb');
require('dotenv').config();
const mongoose = require('mongoose');
// const MongoClient = mongodb.MongoClient;
const mongoDbUrl = process.env.url_mongo;

let _db;

const initDb = callback => {
  if (_db) {
    console.log('Database is already initialized!');
    return callback(null, _db);
  }
  mongoose.connect(mongoDbUrl, { useNewUrlParser: true })
    .then(client => {
      _db = client;
      callback(null, _db);
    })
    .catch(err => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Database not initialzed');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
  _db
};
