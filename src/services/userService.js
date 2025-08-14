const userRepository = require('../repositories/userRepository');

class UserService{

     async createUser(userData) {
         if (!userData.name || !userData.email){
              throw new Error('Name and email are required');
       }
       const user = await userRepository.save(userData);
       return user;
    }
 
    async findAllUsers() {
        const users = await userRepository.findAll();
        return users;
    }

}

module.exports = new UserService();
   