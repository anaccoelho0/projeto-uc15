const express = require('express');
const app = express();
const port = 3000; 

const oiController = require('./src/constrollers/oiController');
const UserController = require('./src/constrollers/userControlle');

app.use(express.json());

app.get('/oi', oiController.sayOi);

app.post('/users', (req, res) => {
    UserController.createUser(req, res);
}); 

app.get('/users', (req, res) => {
    UserController.findAllUsers(req, res);
});

app.use('/users', (req, res) => {
    UserController.getUsers(req, res);
});

app.listen(port, () => {
  console.log(`A API está rodando em http://localhost:${port}`);
});