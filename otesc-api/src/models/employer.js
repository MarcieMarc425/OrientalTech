import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	name: String,
	email: String,
	company: String,
	location: String,
	phone: String,
	industry: String
});

export default mongoose.model('employer', schema);
