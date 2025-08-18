const User = require('../models/userModel');

const users = [];

class UserRepository {

    save(userData) {
        const user = new User(userData.id, userData.produto);
        users.push(user);
        return user;
    }

findAll() {    
    return users;
    }

findById(id) {
    return users.find(user => user.id === id);
}

update(id, userData) {
    const user = this.findById(id);
    if (user) {
        user.id = userData.id || user.id;
        user.produto = userData.produto || user.produto;
        return user;
    }

    return null;

}

delete (id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
    return null;
}
}

module.exports = new UserRepository();