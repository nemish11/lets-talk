// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Profile = require('./profile');
var Chat = require('./chat');

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Message', new Schema({
	from: {type: Schema.Types.ObjectId, ref: 'Profile'},
	to: {type: Schema.Types.ObjectId, ref: 'Profile'},
	chat: {type: Schema.Types.ObjectId, ref: 'Chat'},
	body: String,
	sent_time: Number,
	received_time: Number,
	read_time: Number,
	deleted: Boolean,
}));
