const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Connect Db
mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db');

//Schemas
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

//Models
const Photo = mongoose.model('Photo', PhotoSchema);

//Create
// Photo.create({
//   title: 'Photo 1',
//   description: 'Photo Description 1',
// });

// Photo.create({
//   title: 'Photo 2',
//   description: 'Photo Description 2',
// });

//Read
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

//Update
const id = '637902d5f6c0c363861717aa';
// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo 11',
//   },
//   {
//     new: true,
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

//Delete
Photo.findByIdAndDelete(id, () => {
  console.log('Photo 11 was removed');
});
