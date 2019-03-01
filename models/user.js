const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  location: String,
  imageURL: { type:String , default: 'https://firebasestorage.googleapis.com/v0/b/finalboss-2993b.appspot.com/o/images%2Favatar.jpg?alt=media&token=666958a3-ecbe-43d9-8955-1456bf5994f1'}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;