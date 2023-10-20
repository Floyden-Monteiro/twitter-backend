const Like = require('../models/like.js');
const CrudRepository = require('./crud-repository.js');

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }

  async findByUserLikeable(data) {
    try {
      const like = await Like.findOne(data);
      return like;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = LikeRepository;
