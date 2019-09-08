const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const db = require('../Database/db.mongo')

const userSchema = mongoose.Schema({
  // _id: { type: String, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { collection: 'User' });

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
