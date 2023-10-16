import mongoose from 'mongoose';

const hashtagSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
    unique: true,
  },
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Hashtag = mongoose.model('Hashtag', hashtagSchema);

export default Hashtag;
