const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const garbageSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  number: { type: String, required: true},
  location: { type: String, required: true },
  status: {
    type: String,
    enum: ['pending', 'reserved'],
    default: 'pending'
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Garbage = mongoose.model('Garbage', garbageSchema);

module.exports = Garbage;