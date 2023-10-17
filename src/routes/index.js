const express = require('express');

const { createTweet } = require('../controllers/tweet-controller.js');
const router = express.Router();

router.get('/tweets', createTweet);

module.exports= router;
