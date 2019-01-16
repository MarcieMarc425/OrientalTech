'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _mongoose2.default.Schema({
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

exports.default = _mongoose2.default.model('job', schema);