import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import fs from 'fs';
import Jobs from './models/Jobs';
import Subscription from './models/subscription';
import Message from './models/msg';
import Employer from './models/employer';
import Application from './models/applications';
import * as admin from 'firebase-admin';

const app = express();
const uuidv4 = require('uuid/v4');
app.use(bodyParser.json());
// for build
app.use(express.static(path.join(__dirname, '/../client/build')));
app.use(fileUpload());

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

admin.initializeApp({
	credential: admin.credential.cert({
		projectId: process.env.PROJECT_ID,
		clientEmail: process.env.CLIENT_EMAIL,
		privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n')
	}),
	databaseURL: process.env.FIREDB_URL,
	storageBucket: process.env.STORAGE_URL
});

var bucket = admin.storage().bucket();

app.get('*', (req, res) => {
	// // for build
	// res.sendFile(path.join(__dirname, '/../client/build/index.html'));

	//for testing
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/jobsearch', (req, res) => {
	console.log('jobsearch');
	if (req.body.query.job === '' && req.body.query.location === '') {
		Jobs.find({}, (err, docs) => {
			res.json(docs);
		});
	} else if (req.body.query.job !== '' && req.body.query.location === '') {
		Jobs.find(
			{
				title: { $regex: req.body.query.job }
			},
			(err, docs) => {
				res.json(docs);
			}
		);
	} else if (req.body.query.job === '' && req.body.query.location !== '') {
		Jobs.find(
			{
				location: { $regex: req.body.query.location }
			},
			(err, docs) => {
				res.json(docs);
			}
		);
	} else {
		Jobs.find(
			{
				$and: [
					{ title: { $regex: req.body.query.job } },
					{ location: { $regex: req.body.query.location } }
				]
			},
			(err, docs) => {
				res.json(docs);
			}
		);
	}
});

app.post('/api/jobsearchID', (req, res) => {
	var ObjectId = require('mongoose').Types.ObjectId;
	Jobs.findOne({ _id: new ObjectId(req.body.query) }, (err, doc) => {
		res.json(doc);
	});
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

app.post('/api/employ', (req, res) => {
	var employ = new Employer({
		name: req.body.employ.name,
		email: req.body.employ.email,
		company: req.body.employ.company,
		location: req.body.employ.location,
		phone: req.body.employ.phone,
		industry: req.body.employ.industry
	});
	employ.save(err => {
		if (!err) res.json('Success');
		else res.json(err);
	});
});

app.post('/api/upload', (req, res) => {
	let file = req.files.file;
	var filename = uuidv4() + req.body.filename;
	file.mv(`${__dirname}/public/${filename}`, err => {
		if (err) {
			return res.status(500).send(err);
		}
		bucket
			.upload(`${__dirname}/public/${filename}`, {
				gzip: true,
				metadata: {
					cacheControl: 'public, max-age=31536000'
				}
			})
			.then(() => {
				fs.unlink(`${__dirname}/public/${filename}`, err => {
					if (err) {
						return res.status(500).send(err);
					}
					var obj = {
						msg: 'Success',
						url: { filename }
					};
					return res.json(obj);
				});
			});
	});
});

app.post('/api/apply', (req, res) => {
	var apply = new Application({
		jobId: req.body.apply.jobId,
		name: req.body.apply.name,
		email: req.body.apply.email,
		phone: req.body.apply.phone,
		resume: req.body.apply.resume,
		cover: req.body.apply.cover
	});
	apply.save(err => {
		if (!err) res.json('Success');
		else res.json(err);
	});
});

app.listen(process.env.PORT || 5000, () =>
	console.log('Running on localhost:5000')
);
