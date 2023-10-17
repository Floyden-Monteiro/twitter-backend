const TweetService = require('../services/tweet-service.js');

const tweetService = new TweetService();

const createTweet = async (req, res) => {
  try {
    const data = req.body;
    const response = await tweetService.create(data);

    return res.status(201).json({
      success: true,
      message: 'Tweet created successfully',
      data: response,
      errors: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Tweet creation failed',
      data: {},
      errors: error,
    });
  }
};

const getTweet = async (req, res) => {
  try {
    const response = await tweetService.getTweets(id);
    return res.status(200).json({
      success: true,
      message: 'Tweet fetched successfully',
      data: response,
      errors: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Tweet fetch failed',
      data: {},
      errors: error,
    });
  }
};

module.exports = { createTweet, getTweet };
