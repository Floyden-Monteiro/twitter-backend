const Comment = require('../models/comment.js');
const CrudRepository = require('./crud-repository.js');

class CommentRepository extends CrudRepository {
  constructor() {
    super(Comment);
  }
}

module.exports = CommentRepository;
