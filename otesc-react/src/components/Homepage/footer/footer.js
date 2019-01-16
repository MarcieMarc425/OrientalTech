import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo_blue from '../../../resources/logo/logo_blue.svg';
import './footer.scss';

class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='container'>
					<div className='header'>
						<Link to='/'>
							<img src={logo_blue} className='logo' alt='logo' />
						</Link>
					</div>
					<div className='content'>
						<div className='nav-footer'>
							<Link
								to='/jobs'
								style={{
									textDecoration: 'none',
									color: '#3b4057'
								}}
							>
								<div>Jobs</div>
							</Link>
							<Link
								to='/jobs'
								style={{
									textDecoration: 'none',
									color: '#3b4057'
								}}
							>
								<div>Employers</div>
							</Link>
							<Link
								to='/about'
								style={{
									textDecoration: 'none',
									color: '#3b4057'
								}}
							>
								<div>About Us</div>
							</Link>
							<Link
								to='/mission'
								style={{
									textDecoration: 'none',
									color: '#3b4057'
								}}
							>
								<div>Our Mission</div>
							</Link>
							<Link
								to='/contact'
								style={{
									textDecoration: 'none',
									color: '#3b4057'
								}}
							>
								<div>Contact Us</div>
							</Link>
							<a
								href='https://www.linkedin.com/company/oriental-tech-executive-search-consultants/'
								to='/jobs'
								style={{
									textDecoration: 'none',
									color: '#3b4057'
								}}
							>
								<div>LinkedIn</div>
							</a>
						</div>
						<div className='copyright'>
							©Copyright 1991-2018 Oriental Tech Executive Search
							Consultants. All rights reserved.
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
