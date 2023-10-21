const express = require('express');
const passport = require('passport');

const connect = require('./config/database.js');
const router = require('./routes');
const { passpaortAuth } = require('./middlewares/jwt-middleware.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
passpaortAuth(passport);

app.use('/api/v1', router);
app.listen(3000, async () => {
  console.log('Server Start at 3000');

  connect();

  console.log('Mongo Db is connected');
});

// mongodb+srv://fm:<password>@cluster0.pdhndlh.mongodb.net/
