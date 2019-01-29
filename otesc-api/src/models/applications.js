import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    jobId: String,
    name: String,
    email: String,
    phone: String,
    resume: String,
    cover: String
});

export default mongoose.model('application', schema);
