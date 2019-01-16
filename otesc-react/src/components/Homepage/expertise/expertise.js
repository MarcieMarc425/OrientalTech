import React, { Component } from 'react';
import './expertise.scss';

class Expertise extends Component {
	render() {
		return (
			<div className='expertise'>
				<div className='container'>
					<div className='industry' id='infoTech'>
						<div className='overlay'>
							<div className='title'>Information Technology</div>
							<div className='list'>
								<div>General Management</div>
								<div>Sales</div>
								<div>Marketing</div>
								<div>B2B/B2C</div>
								<div>Advertising</div>
								<div>Financial Control</div>
								<div>Human Resources</div>
								<div>Systems Engineering</div>
								<div>Procurement</div>
								<div>Supply Chain</div>
								<div>Logistics and MIS Management</div>
							</div>
						</div>
					</div>
					<div className='industry' id='telecom'>
						<div className='overlay'>
							<div className='title'>Telecommunication</div>
							<div className='list'>
								<div>General Management</div>
								<div>Sales</div>
								<div>Marketing</div>
								<div>Call Centre</div>
								<div>Retail/Consumer</div>
								<div>Financial Control</div>
								<div>Human Resources</div>
								<div>Systems Engineering</div>
							</div>
						</div>
					</div>
					<div className='industry' id='electronics'>
						<div className='overlay'>
							<div className='title'>
								Electronics/Semiconductor
							</div>
							<div className='list'>
								<div>Sales</div>
								<div>Marketing</div>
								<div>Field Engineering</div>
								<div>OEM/ODM</div>
								<div>Supply Chain</div>
								<div>Supplier Management</div>
								<div>Financial Control</div>
								<div>Human Resources</div>
							</div>
						</div>
					</div>
					<div className='industry' id='medical'>
						<div className='overlay'>
							<div className='title'>Medical Instrumentation</div>
							<div className='list'>
								<div>General Management</div>
								<div>Sales</div>
								<div>Field Engineering</div>
								<div>Technical Marketing</div>
								<div>Product Management</div>
							</div>
						</div>
					</div>
					<div className='industry' id='testingEquip'>
						<div className='overlay'>
							<div className='title'>
								Testing and Measurement Equipment
							</div>
							<div className='list'>
								<div>General Management</div>
								<div>Sales</div>
								<div>Field Engineering</div>
								<div>Technical Marketing</div>
								<div>Product Management</div>
								<div>Electronics/Telcom/Wireless T&M</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Expertise;
