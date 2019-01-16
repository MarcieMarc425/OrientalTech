import React, { Component } from 'react';
import NavBar from '../../Jobpage/navBar/navbar';
import Hero from '../Hero/hero';
import Info from '../Info/info';
import Footer from '../../Homepage/footer/footer';

class about extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};

	render() {
		return (
			<div className='about'>
				<NavBar />
				<Hero title='About Us' />
				<Info type='about' />
				<Footer />
			</div>
		);
	}
}

export default about;
