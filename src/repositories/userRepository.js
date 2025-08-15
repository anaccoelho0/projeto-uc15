const User = require('../models/userModel');

const users = [];

class UserRepository {

    save(userData) {
        const user = new User(userData.name, userData.email, userData.id)
        users.push(user);
        return user;
    }


findAll() {
    return users;
    }

findUserById(id) {
    return users.find(user => user.id === id);
}
    getUsers(req, res) {
        res.status(200).json(users);
    }
}
module.exports = new UserRepository();