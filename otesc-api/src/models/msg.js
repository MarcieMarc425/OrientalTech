import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	email: String,
	name: String,
	phone: String,
	text: String
});

export default mongoose.model('message', schema);
