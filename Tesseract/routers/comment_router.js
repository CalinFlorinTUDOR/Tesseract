// Import dependencies
const comment_controller = require('../controllers/comment_controller');

const express = require('express');
const commentRouter = express.Router();

commentRouter.get('/', comment_controller.getAllComments);
commentRouter.get('/:id', comment_controller.getCommentByID);
commentRouter.post('/', comment_controller.createComment);
commentRouter.patch('/:id', comment_controller.updateCommentById);
commentRouter.delete('/:id', comment_controller.deleteCommentById);
commentRouter.get('/:userId', comment_controller.getAllUserComments);

module.exports = commentRouter;