const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  author: String,
  summary: String
});

module.exports = mongoose.model('Book', bookSchema);
