import React, { Component } from 'react';
import NavBar from '../../Jobpage/navBar/navbar';
import Hero from '../Hero/hero';
import Info from '../Info/info';
import Footer from '../../Homepage/footer/footer';

class mission extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};

	render() {
		return (
			<div className='mission'>
				<NavBar />
				<Hero title='Our Mission' />
				<Info type='mission' />
				<Footer />
			</div>
		);
	}
}

export default mission;
