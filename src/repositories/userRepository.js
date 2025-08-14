const User = require('../models/userModel');

const users = [];

class UserRepository {

    save(userData) {
        const user = new User(userData.name, userData.email);
        users.push(user);
        return user;
    }


findAll() {
    return users;
    }
}

module.exports = new UserRepository();