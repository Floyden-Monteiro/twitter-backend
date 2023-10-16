import Tweet from '../models/tweet';

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      console.log(data);
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log('Something went wrong: Service: create', error);
      throw error;
    }
  }

  async destroy(id) {
    try {
      const result = await this.model.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log('Something went wrong: Service: destroy', error);
      throw error;
    }
  }

  async get(id) {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      console.log('Something went wrong: Service: get', error);
      throw error;
    }
  }

  async getAll() {
    try {
      const result = await this.model.find();
      return result;
    } catch (error) {
      console.log('Something went wrong: Service: getAll', error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const result = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log('Something went wrong: Service: update', error);
      throw error;
    }
  }
}


export default CrudRepository;