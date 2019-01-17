import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Jobs from './models/Jobs';
import Subscription from './models/subscription';
import Message from './models/msg';
import Employer from './models/employer';

const app = express();
app.use(bodyParser.json());
// for build
app.use(express.static(path.join(__dirname, '/../client/build')));

dotenv.config();

mongoose.connect(
    // for testing
    process.env.MONGODB_URL,

    // // for build
    // process.env.MONGODB_URI,
    { useNewUrlParser: true }
);
var db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('*', (req, res) => {
    // // for build
    // res.sendFile(path.join(__dirname, '/../client/build/index.html'));

    //for testing
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/jobsearch', (req, res) => {
    if (req.body.query.job === '' && req.body.query.location === '') {
        Jobs.find({}, (err, docs) => {
            res.json(docs);
        });
    }
});

app.post('/api/subscribe', (req, res) => {
    var subscribe = new Subscription({ email: req.body.email });
    subscribe.save(err => {
        if (!err) res.json('Success');
        else res.json(err);
    });
});

app.post('/api/msg', (req, res) => {
    var msg = new Message({
        name: req.body.msg.name,
        email: req.body.msg.email,
        phone: req.body.msg.phone,
        text: req.body.msg.text
    });
    msg.save(err => {
        if (!err) res.json('Success');
        else res.json(err);
    });
});

app.listen(process.env.PORT || 5000, () =>
    console.log('Running on localhost:5000')
);
