import Hashtag from '../models/hashtag';
import CrudRepository from './crud-repository';

class HashRepository extends CrudRepositorytory {
  constructor() {
    super(Hashtag);
  }
 
  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getHashtagByName(text) {
    try {
      let hashtag = await Hashtag.find({
        text: text,
      });
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getHashtag(id) {
    try {
      let Hashtag = await Hashtag.findById(id);
      return Hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteHashtag(id) {
    try {
      let Hashtag = await Hashtag.deleteOne(id);
      return Hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default HashRepository;
