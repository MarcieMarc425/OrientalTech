import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import homepage from './components/Homepage/homepage';
import jobpage from './components/Jobpage/jobpage';
import employer from './components/Employer/employer';
import about from './components/Company/About/about';
import mission from './components/Company/Mission/mission';
import contact from './components/Company/Contact/contact';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Route path='/' exact component={homepage} />
				<Route path='/jobs' exact component={jobpage} />
				<Route path='/employer' exact component={employer} />
				<Route path='/about' exact component={about} />
				<Route path='/mission' exact component={mission} />
				<Route path='/contact' exact component={contact} />
			</div>
		);
	}
}

export default App;
