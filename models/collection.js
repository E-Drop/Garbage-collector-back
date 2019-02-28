const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  volunteer_name: String,
  _garbage:{ type: Schema.Types.ObjectId, ref: 'Garbage', required: true },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;