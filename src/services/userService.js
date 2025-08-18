const userRepository = require('../repositories/userRepository');

class UserService{

     async createUser(userData) {
         if (userData.id || !userData.produto) {
              throw new Error('Id e produtos são obrigatórios');
       }
       const user = await userRepository.save(userData);
       return user;
    }
 
    async findAllUsers() {
        const users = await userRepository.findAll();
        return users;
    }

    async findUserById(id) {
        const user = await userRepository.findById(id);
        return user;
  }

  async updateUser(id, userData) {
    const user = await userRepository.update(id, userData);
    return user;

}

async deleteUser(id) {
    const user = await userRepository.delete(id);
    return user;
}

}

module.exports = new UserService();
