const UserService = require('../services/userService');

class UserController {
    async createUser(req, res) {
        try {
            const userData = req.body;
            const user = await UserService.createUser(userData);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllUsers(req, res) {
        try {
            const users = await UserService.findAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getUserById(req, res) {
        try {
            const id = req.params.id;
            const user = await UserService.findUserById(id);
            if (!user) {
                return res.status(200).json(user);
             } else {
                return res.status(404).json({ error: 'User not found' }); 
                } 
             } catch (error) {
            res.status(500).json({ error: error.message });
                }
            }
        }

module.exports = new UserController();