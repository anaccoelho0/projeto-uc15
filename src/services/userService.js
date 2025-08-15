const userRepository = require('../repositories/userRepository');

class UserService{

     async createUser(userData) {
         if (!userData.name || !userData.email || !userData.id) {
              throw new Error('Name and email are required');
       }
       const user = await userRepository.save(userData);
       return user;
    }
 
    async findAllUsers() {
        const users = await userRepository.findAll();
        return users;
    }

    async findUserById(id) {
        const user = await userRepository.findUserById(id);
        return user;
  }
}

module.exports = new UserService();
