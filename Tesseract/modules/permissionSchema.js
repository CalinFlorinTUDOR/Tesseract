const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
	
	description: { 
    type: String, 
    required: true, 
  },
});

const permission = mongoose.model('permissions', permissionSchema);

module.exports = permission