const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

  userID: {
    type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true,
  },
  description: { 
    type: String, 
    required: true, 
  },
	created: { 
    type: Date, 
    default: new Date(),
  },
	updated: { 
    type: String, 
    default: "No changes",
  },
});

const comment = mongoose.model('comments', commentSchema);

module.exports = comment;