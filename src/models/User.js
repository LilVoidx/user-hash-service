const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  about: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);