// Import dependencies
const user_controller = require('../controllers/user_controller');

const express = require('express');
const userRouter = express.Router();

// const authJWT = require('../middleware/verify_authJWT');


userRouter.get('/', user_controller.getAllUsers);
userRouter.get('/:id', user_controller.getUserByID);
userRouter.post('/', user_controller.createUser);
userRouter.patch('/:id', user_controller.updateUserById);
userRouter.delete('/:id', user_controller.deleteUserById);
userRouter.post('/login', user_controller.login);

module.exports = userRouter;
