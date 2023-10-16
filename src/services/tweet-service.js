import { HashTagRepo, TweetRepo } from '../repository';

class TweetService {
  constructor() {
    this.TweetRepo = new TweetRepo();
    this.HashTagRepo = new HashTagRepo();
  }

  async create(data) {
    const content = data.content;
    const tags = content
      .match(/#+[a-zA-Z0-9(_)]+/g)
      .map((tag) => tag.substring(1).toLowerCase());

    const tweet = await this.TweetRepo.create(data);

    let altreadyPresentTags = await this.HashTagRepo.findByName(tags);
    let textOfPresentTags = altreadyPresentTags.map((tags) => tags.text);
    let newTags = tags.filter((tag) => !textOfPresentTags.includes(tag));
    newTags = newTags.map((tag) => {
      return {
        text: tag,
        tweets: [tweet.id],
      };
    });

    await this.HashTagRepo.bulkCreate(newTags);
    altreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });

    return tweet;
  }
}

export default TweetService;