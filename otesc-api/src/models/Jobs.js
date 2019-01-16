import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	tags: { type: Array, default: [] },
	date_posted: {
		date: Number,
		month: String,
		year: Number
	},
	date_apply: {
		date: Number,
		month: String,
		year: Number
	},
	title: String,
	category: String,
	location: String,
	career_lvl: String,
	education: String,
	type: String,
	salary: String,
	desc: { type: Array, default: [] },
	responsibility: { type: Array, default: [] },
	requirements: { type: Array, default: [] }
});

export default mongoose.model('job', schema);
