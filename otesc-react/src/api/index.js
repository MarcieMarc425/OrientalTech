import axios from 'axios';

export default {
    search: query =>
        axios.post('/api/jobsearch', { query }).then(res => {
            return res.data;
        }),
    searchByID: query =>
        axios.post('/api/jobsearchID', { query }).then(res => {
            return res.data;
        }),
    subscribe: email =>
        axios.post('/api/subscribe', { email }).then(res => {
            return res.data;
        }),
    message: msg =>
        axios.post('/api/msg', { msg }).then(res => {
            return res.data;
        }),
    employer: employ =>
        axios.post('/api/employ', { employ }).then(res => {
            return res.data;
        }),
    apply: apply =>
        axios.post('/api/apply', { apply }).then(res => {
            return res.data;
        })
};
