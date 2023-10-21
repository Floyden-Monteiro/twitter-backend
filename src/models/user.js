const mongoose = require('mongoose');
const bcrpyt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

userSchema.methods.comparePassword = function compare(password) {
  const user = this;
  return bcrpyt.compareSync(password, user.password);
};

userSchema.methods.genJWT = function generate() {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
    },
    'twitter_secret',
    {
      expiresIn: '2h',
    }
  );
};

const User = mongoose.model('User', userSchema);

module.exports = User;
