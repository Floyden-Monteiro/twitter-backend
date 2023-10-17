const CrudRepository = require('./crud-repository.js');
const Hashtag = require('../models/hashtag.js');

class HashRepository extends CrudRepository {
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
      let singleHashtag = await Hashtag.findById(id);
      return singleHashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteHashtag(id) {
    try {
      let result = await Hashtag.deleteOne({ _id: id });
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports =  HashRepository;
