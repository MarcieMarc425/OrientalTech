import React, { Component } from 'react';
import './hero.scss';
import logo_white from '../../../resources/logo/logo_white.svg';
import { Form, Input, Button, Alert } from 'reactstrap';
import api from '../../../api/index';

export default class hero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employ: {
				name: '',
				email: '',
				company: '',
				phone: '',
				location: '',
				industry: ''
			},
			employSubmitted: false,
			error: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.onFormChange = this.onFormChange.bind(this);
		this.setSelectDefault = this.setSelectDefault.bind(this);
	}

	handleFormSubmit = e => {
		e.preventDefault();
		if (
			this.state.employ.name === '' ||
			this.state.employ.email === '' ||
			this.state.employ.company === '' ||
			this.state.employ.phone === '' ||
			this.state.employ.location === '' ||
			this.state.employ.industry === ''
		) {
			this.setState({
				employSubmitted: true,
				error: 'Form entry(s) cannot be empty'
			});
		} else {
			api.employer(this.state.employ).then(res => {
				if (res === 'Success') {
					this.setState({
						employSubmitted: true,
						error: ''
					});
				} else {
					this.setState({
						employSubmitted: true,
						error: res
					});
				}
			});
		}
	};

	onFormChange = e => {
		this.setState({
			employ: {
				...this.state.employ,
				[e.target.name]: e.target.value
			}
		});
	};

	setSelectDefault = select => {
		if (select === '') {
			return 'Select Location';
		} else {
			return select;
		}
	};

	render() {
		let popUp;
		if (this.state.employSubmitted === true) {
			if (this.state.error === '') {
				popUp = (
					<div className='alert'>
						<Alert color='success'>
							Message successfully submitted.
						</Alert>
					</div>
				);
			} else {
				popUp = (
					<div className='alert'>
						<Alert color='danger'>Error: {this.state.error}</Alert>
					</div>
				);
			}
		}

		return (
			<div className='employer_hero'>
				<div className='container'>
					<div className='header'>
						<object
							data={logo_white}
							className='logo'
							aria-label='logo'
						/>
					</div>
					<div className='content'>
						<div className='employer_text'>
							<div className='text_head'>
								Searching for the Best
							</div>
							<div className='text_content'>
								We provide the highest quality executive search
								services to ensure that the best and the most
								cultural fit candidate can be appointed by our
								clients and thus the clients can also benefit
								from the experiences and knowledge of the new
								recruits bring on board to their environment.
							</div>
						</div>
						<div className='form'>
							<Form
								className='employ_form'
								onSubmit={this.handleFormSubmit}
							>
								<div className='employ-name-email'>
									<Input
										type='text'
										className='employ-name'
										name='name'
										value={this.state.employ.name}
										onChange={this.onFormChange}
										placeholder='Name'
									/>
									<Input
										type='email'
										className='employ-email'
										name='email'
										value={this.state.employ.email}
										onChange={this.onFormChange}
										placeholder='Email'
									/>
								</div>
								<div>
									<Input
										type='text'
										placeholder='Company'
										name='company'
										value={this.state.employ.company}
										onChange={this.onFormChange}
									/>
								</div>
								<div>
									<Input
										type='text'
										placeholder='Phone'
										name='phone'
										value={this.state.employ.phone}
										onChange={this.onFormChange}
									/>
								</div>
								<div>
									<Input
										type='text'
										placeholder='Industry'
										name='industry'
										value={this.state.employ.industry}
										onChange={this.onFormChange}
									/>
								</div>
								<div>
									<Input
										type='select'
										name='location'
										value={this.setSelectDefault(
											this.state.employ.location
										)}
										onChange={this.onFormChange}
									>
										<option value=''>
											Select Location
										</option>
										<option value='Hong Kong'>
											Hong Kong
										</option>
										<option value='Taiwan'>Taiwan</option>
										<option value='China'>China</option>
										<option value='Singapore'>
											Singapore
										</option>
										<option value='South Korea'>
											South Korea
										</option>
										<option value='Japan'>Japan</option>
										<option value='Others'>Others</option>
									</Input>
								</div>
								<Button>APPLY</Button>
								{popUp}
							</Form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
