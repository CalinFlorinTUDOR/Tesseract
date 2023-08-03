const express = require('express');
const authJWTRouter = express.Router();
const user_controller = require('../controllers/user_controller');

//  Create route for providing user's login JWT token

authJWTRouter.post('/login', user_controller.login);

module.exports = authJWTRouter;