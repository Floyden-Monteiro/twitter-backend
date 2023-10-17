const Tweet = require('../models/tweet.js');
const CrudRepository = require('./crud-repository.js');

class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async create(data) {
    try {
      let tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllTweets() {
    try {
      let tweets = await Tweet.find();
      return tweets;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getTweet(id) {
    try {
      let tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteTweet(id) {
    try {
      let tweet = await Tweet.deleteOne(id);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = TweetRepository;
