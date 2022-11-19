const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schemas
const PhotoSchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

//Models
const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
