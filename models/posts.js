var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
  image: String
});

module.exports = mongoose.model('Post', PostSchema);
