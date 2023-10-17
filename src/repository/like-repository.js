

const Like = require('../models/like.js');
const CrudRepository = require('./crud-repository.js');

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }
}
