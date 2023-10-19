const mongoose = require('mongoose');
const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://fm:floydenishere@cluster0.pdhndlh.mongodb.net/"
  );
};

module.exports = connect;
 