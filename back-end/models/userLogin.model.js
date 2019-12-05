const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const db = require('../Database/db.mongo')

const loginSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('LoginModel', loginSchema);
