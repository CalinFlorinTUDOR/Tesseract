const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
	
	email: {
		type: String,
		min: 6,
		max: 26,
		unique:true, // to check if email already exists in the database
		required: true,
	},
	firstname: {
		type: String,
		min: 2,
		max: 15,
		required: true,
	},
	lastname: {
		type: String,
		min: 2,
		max: 15,
		required: true,
	},
	password: {
		type: String,
		min: 6,
		max: 18,
		required: true,
	},
	creation_date: {
		type: String,
		default: new Date()
		
	},
	updated: {
		type: String,
		default: "No changes"
		
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "comments",
			default: "No comments"
			
		},
	],
	permission: {
		type: String,
		ref: "permissions",
		require: true,
		default: "user",
		
		
	},
});

userSchema.pre('save', function (next) {
	if (!this.isModified('password')) {
		next();
	}
	const salt = bcryptjs.genSaltSync(12);
	const hashPassword = bcryptjs.hashSync(this.password, salt);
	this.password = hashPassword;
	next();
});

const UserSchema = mongoose.model("users", userSchema);

module.exports = UserSchema
