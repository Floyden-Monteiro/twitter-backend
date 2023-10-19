const { UserRepo } = require('../repository');

class UserService {
  constructor() {
    this.userRepo = new UserRepo();
  }

  async signUp(data) {
    try {
      const user = await this.userRepo.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async signIn(data) {
    try {
      const email = data.email;
      const currentPassword = data.password;
      const user = await this.userRepo.findBy({email:email});
      console.log(user);
      
      if (!user) {
        throw {
          message: 'No user found',
        };
      }

      if (!user.comparePassword(currentPassword)) {
        throw {
          message: 'Incorrect password',
        };
      }
     

      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
