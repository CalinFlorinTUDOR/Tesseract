// Import dependencies
const permission_controller = require('../controllers/permission_controller');

const express = require('express');
const permissionRouter = express.Router();

permissionRouter.get('/', permission_controller.getAllPermissions);
permissionRouter.post('/', permission_controller.addPermission);

module.exports = permissionRouter;