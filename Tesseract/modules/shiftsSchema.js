const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
	
	userId: {
		type: mongoose.Schema.Types.ObjectId,
    ref:'users',
		required: true,
	},
	startTime: {
		type: Date,
		required: true,
	},
	endTime: {
		type: Date,
		required: true,
	},
	place: {
		type: String,
		required: true,
	},
	payedHour: {
		type: Number,
		required: true,
	},
	addedShift: {
		type: Date,
		default: new Date(),
	},
	updated: {
		type: Date,
		default: "No changes",
	},
});

const shift = mongoose.model('shifts', shiftSchema);

module.exports = shift;