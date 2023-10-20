const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  onModel: {
    type: String,
    required: true,
    enum: ['Tweet', 'Comment'],
  },
  likeable: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'onModel',
  },
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;
