'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _Jobs = require('./models/Jobs');

var _Jobs2 = _interopRequireDefault(_Jobs);

var _subscription = require('./models/subscription');

var _subscription2 = _interopRequireDefault(_subscription);

var _msg = require('./models/msg');

var _msg2 = _interopRequireDefault(_msg);

var _employer = require('./models/employer');

var _employer2 = _interopRequireDefault(_employer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
// for build
app.use(_express2.default.static(_path2.default.join(__dirname, '/../client/build')));

_dotenv2.default.config();

_mongoose2.default.connect(
// // for testing
// process.env.MONGODB_URL

// for build
process.env.MONGODB_URI, { useNewUrlParser: true });
var db = _mongoose2.default.connection;
db.once('open', function () {
	console.log('Connected to MongoDB');
});

app.get('*', function (req, res) {
	// for build
	res.sendFile(_path2.default.join(__dirname, '/../client/build/index.html'));

	// //for testing
	// res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/jobsearch', function (req, res) {
	if (req.body.query.job === '' && req.body.query.location === '') {
		_Jobs2.default.find({}, function (err, docs) {
			res.json(docs);
		});
	}
});

app.post('/api/subscribe', function (req, res) {
	var subscribe = new _subscription2.default({ email: req.body.email });
	subscribe.save(function (err) {
		if (!err) res.json('Success');else res.json(err);
	});
});

app.post('/api/msg', function (req, res) {
	var msg = new _msg2.default({
		name: req.body.msg.name,
		email: req.body.msg.email,
		phone: req.body.msg.phone,
		text: req.body.msg.text
	});
	msg.save(function (err) {
		if (!err) res.json('Success');else res.json(err);
	});
});

app.listen(process.env.PORT || 5000, function () {
	return console.log('Running on localhost:5000');
});