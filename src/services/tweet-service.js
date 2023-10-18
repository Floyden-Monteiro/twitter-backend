const { TweetRepo, HashtagRepo } = require('../repository');

class TweetService {
  constructor() {
    this.TweetRepo = new TweetRepo();
    this.HashtagRepo = new HashtagRepo();
  }

  async create(data) {
    const content = data.content;
    const tags = content
      .match(/#+[a-zA-Z0-9(_)]+/g)
      .map((tag) => tag.substring(1).toLowerCase());

    const tweet = await this.TweetRepo.create(data);

    let alreadyPresentTags = await this.HashtagRepo.getHashtagByName(tags);
    let textOfPresentTags = alreadyPresentTags.map((tag) => tag.text);
    let newTags = tags.filter((tag) => !textOfPresentTags.includes(tag));
    newTags = newTags.map((tag) => {
      return {
        text: tag,
        tweets: [tweet.id],
      };
    });

    await this.HashtagRepo.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });

    return tweet;
  }

  async getTweet(id) {
    const tweet = await this.TweetRepo.getTweet(id);
    return tweet;
  }
}

module.exports = TweetService;
