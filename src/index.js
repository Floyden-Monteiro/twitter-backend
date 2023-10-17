const express = require('express');

const connect = require('./config/database.js');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use('/api/v1', router);
app.listen(3000, async () => {
  console.log('Server Start at 3000');

  connect();

  console.log('Mongo Db is connected');
});

// mongodb+srv://fm:<password>@cluster0.pdhndlh.mongodb.net/
