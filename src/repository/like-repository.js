import CrudRepository from './crud-repository';
import Like from '../models/like';

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }
}
