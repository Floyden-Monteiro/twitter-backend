import express from 'express';

import connect from './config/database.js';
import router from './routes/index.js';
import TweetRepository from './repository/tweet-respository.js';

const app = express();

app.use(express.json());

app.use('/api/v1', router);
app.listen(3000, async () => {
  console.log('Server Start at 3000');

  connect();

  console.log('Mongo Db is connected');
});

// mongodb+srv://fm:<password>@cluster0.pdhndlh.mongodb.net/
