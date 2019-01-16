import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	email: String
});

export default mongoose.model('subscription', schema);
