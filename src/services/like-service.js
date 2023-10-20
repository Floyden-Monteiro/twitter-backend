const { LikeRepo, TweetRepo, CommentRepo } = require('../repository');

class LikeService {
  constructor() {
    this.likeRepo = new LikeRepo();
    this.tweetRepo = new TweetRepo();
    this.commentRepo = new CommentRepo();
  }

  async toggleLike(modelId, modelType, userId) {
    let likeable;
  
    if (modelType === 'Tweet') {
      likeable = await this.tweetRepo.get(modelId);
    } else if (modelType === 'Comment') {
      likeable = await this.commentRepo.get(modelId);
    } else {
      throw new Error('Unknown model type');
    }
  
    if (!likeable) {
      throw new Error('Unable to fetch likeable object');
    }
  

  
    if (!likeable.likes) {
      throw new Error('Missing likes property on likeable object');
    }
  
    let exists = await this.likeRepo.findByUserLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });
  
    if (exists) {
      likeable.likes = likeable.likes.filter(id => id !== exists.id);
      await likeable.save();
      await exists.deleteOne();
      var isAdded = false;
    } else {
      const newLike = await this.likeRepo.create({
        onModel: modelType,
        likeable: modelId,
        user: userId,
      });
      likeable.likes.push(newLike.id);
      await likeable.save();
      var isAdded = true;
    }
  
    return isAdded;
  }
  
  
}

module.exports = LikeService;
