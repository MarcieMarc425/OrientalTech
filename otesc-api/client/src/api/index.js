import axios from 'axios';

export default {
	search: query =>
		axios.post('/api/jobsearch', { query }).then(res => {
			return res.data;
		}),
	subscribe: email =>
		axios.post('/api/subscribe', { email }).then(res => {
			return res.data;
		}),
	message: msg =>
		axios.post('/api/msg', { msg }).then(res => {
			return res.data;
		})
};