const Comment = require('../modules/commentSchema');

const getAllComments = async (req, res) => {
  try{
    const comments = await Comment.find();
    res.status(200).json(comments);
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while fetching comments'})
}
};

const getCommentByID = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params._id);
    if (!comment){
      return res.status(404).json({ error: 'No such comment found!'});
    }
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching comments'})
  };
};

const createComment = async (req,res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json({ success: 'Comment created'});
  } catch (err) {
    return res.status(404).json({ error: 'No comment found!'});
  }
}

const updateCommentById = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true } // To return the updated comment
    );

    if (!updatedComment) {
      return res.status(404).json({ error: 'No comment found!' });
    }

    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while updating the comment' });
  }
};

const deleteCommentById = async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params._id);

    if (!deletedComment) {
      return res.status(404).json({ error: 'No comment found!' });
    }

    res.status(200).json({ success: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while deleting the comment' });
  }
};

const getAllUserComments = async (req, res) => {
  try {
    // Using "userId" from commentSchema
    const userId = req.params.userId;
    // Using Mongoose's find method to get all comments for the specified user
    const comments = await Comment.find({ userId });

    if (comments.length === 0) {
      return res.status(404).json({ error: 'No comments found for this user!' });
    }

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching user comments' });
  }
};

module.exports = { 
  getAllComments, 
  createComment, 
  getCommentByID, 
  updateCommentById, 
  deleteCommentById, 
  getAllUserComments,
};
  