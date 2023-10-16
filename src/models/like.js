import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  onModel: {
    type: String,
    required: true,
    enum: ['Tweet', 'Comment', 'story'],
  },
  likeable: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'onModel',
  },
});

const Like = mongoose.model('Like', likeSchema);
export default Like;
