import React, { Component } from 'react';
import './navbar.scss';
import HamburgerMenu from 'react-hamburger-menu';
import logo_white from '../../../resources/logo/logo_white.svg';
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	Input,
	Button
} from 'reactstrap';
import { Motion, spring } from 'react-motion';
import { Div } from 'glamorous';
import { Link } from 'react-router-dom';

const menuStyle = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	right: 0,
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: '50px',
	justifyContent: 'center',
	height: '100vh',
	width: 400,
	fontFamily: 'Source Sans Pro',
	fontWeight: 600,
	fontSize: '1.5em',
	background: '#b42b4b'
};
class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
			loginModal: false,
			signupModal: false
		};
		this.handleMenuClicked = this.handleMenuClicked.bind(this);
		this.toggleLoginModal = this.toggleLoginModal.bind(this);
		this.toggleSignupModal = this.toggleSignupModal.bind(this);
	}

	handleMenuClicked() {
		this.setState({
			menuOpen: !this.state.menuOpen
		});
	}

	toggleLoginModal() {
		this.setState({
			loginModal: !this.state.loginModal
		});
	}

	toggleSignupModal() {
		this.setState({
			signupModal: !this.state.signupModal
		});
	}

	render() {
		const { menuOpen } = this.state;

		return (
			<div className='navbar'>
				{/* <img src={logo_white} className='logo' alt='logo' /> */}
				<object
					data={logo_white}
					className='logo'
					aria-label='logo'
				/>
				<div className='search'>
					<form>
						<input
							type='text'
							className='job'
							id='job'
							placeholder='Job title'
						/>
						<input
							type='text'
							className='location'
							id='location'
							placeholder='Location'
						/>
						<button type='submit'>APPLY</button>
					</form>
				</div>
				<div className='nav'>
					{/* <div className='login' onClick={this.toggleLoginModal}>
						Login
					</div> */}
					<Modal
						isOpen={this.state.loginModal}
						toggle={this.toggleLoginModal}
						className='loginModal'
					>
						<ModalHeader toggle={this.toggleLoginModal}>
							Login to OTESC
						</ModalHeader>
						<ModalBody>
							<Form>
								<Input
									type='email'
									name='loginEmail'
									id='loginEmail'
									placeholder='Enter your email'
								/>
								<Input
									type='password'
									name='loginPassword'
									id='loginPassword'
									placeholder='Enter your password'
								/>
							</Form>
						</ModalBody>
						<ModalFooter>
							<Button
								color='primary'
								onClick={this.toggleLoginModal}
							>
								Login
							</Button>
						</ModalFooter>
					</Modal>

					{/* <div className='signup' onClick={this.toggleSignupModal}>
						Signup
					</div> */}
					<Modal
						isOpen={this.state.signupModal}
						toggle={this.toggleSignupModal}
						className='signupModal'
					>
						<ModalHeader toggle={this.toggleSignupModal}>
							Signup for OTESC
						</ModalHeader>
						<ModalBody>
							<Form>
								<Input
									type='email'
									name='signupEmail'
									id='signupEmail'
									placeholder='Enter your email'
								/>
								<Input
									type='password'
									name='signupPassword'
									id='signupPassword'
									placeholder='Enter your password'
								/>
							</Form>
						</ModalBody>
						<ModalFooter>
							<Button
								color='primary'
								onClick={this.toggleSignupModal}
							>
								Signup
							</Button>
						</ModalFooter>
					</Modal>

					<div className='menu'>
						<div onClick={this.handleMenuClicked}>Menu</div>
						<HamburgerMenu
							className='menuIcon'
							isOpen={this.state.menuOpen}
							menuClicked={this.handleMenuClicked}
							width={18}
							height={12}
							strokeWidth={1.7}
							rotate={0}
							color='white'
							borderRadius={3}
							animationDuration={0.5}
						/>
					</div>
					<Motion
						style={{
							x: spring(menuOpen ? 0 : 400),
							opacity: spring(menuOpen ? 1 : 0)
						}}
					>
						{currentStyles => (
							<Div
								className='sideMenu'
								css={{
									...menuStyle,
									transform: `translate3d(${
										currentStyles.x
									}%, 0, 0)`,
									opacity: currentStyles.opacity
								}}
							>
								{/* <Link
									to='/'
									style={{
										textDecoration: 'none',
										color: '#fff'
									}}
								>
									<div className='menuItem'>Login</div>
								</Link>
								<Link
									to='/'
									style={{
										textDecoration: 'none',
										color: '#fff'
									}}
								>
									<div className='menuItem'>Signup</div>
								</Link> */}
								<Link
									to='/jobs'
									style={{
										textDecoration: 'none',
										color: '#fff'
									}}
								>
									<div className='menuItem'>Jobs</div>
								</Link>
								<Link
									to='/employer'
									style={{
										textDecoration: 'none',
										color: '#fff'
									}}
								>
									<div className='menuItem'>Employers</div>
								</Link>
								<Link
									to='/about'
									style={{
										textDecoration: 'none',
										color: '#fff'
									}}
								>
									<div className='menuItem'>Our Company</div>
								</Link>
							</Div>
						)}
					</Motion>
				</div>
			</div>
		);
	}
}

export default Navbar;
