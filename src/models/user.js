const mongoose = require('mongoose');
const bcrpyt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

userSchema.pre('save', async function (next) {
  const user = this;
  const salt = await bcrpyt.genSaltSync(9);
  const encryptedPassword = await bcrpyt.hashSync(user.password, salt);
  user.password = encryptedPassword;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
