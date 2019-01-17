import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import PropTypes from 'prop-types';
import logo_white from '../../../resources/logo/logo_white.svg';
import { Link } from 'react-router-dom';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Input,
    Button
} from 'reactstrap';
import Validator from 'validator';
import InlineErrors from '../errors/InlineErrors';
import { Motion, spring } from 'react-motion';
import { Div } from 'glamorous';
import './hero.scss';

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

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currScrollY: 0,
            isMenuClicked: false,
            menuOpen: false,
            loginModal: false,
            signupModal: false,
            loginData: {
                loginEmail: '',
                loginPassword: ''
            },
            signupData: {
                email: '',
                password: ''
            },
            loginErrors: {},
            search: {
                job: '',
                location: ''
            }
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleMenuClicked = this.handleMenuClicked.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleSignupModal = this.toggleSignupModal.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = e => {
        this.setState(
            {
                currScrollY: window.scrollY
            },
            () => {
                if (
                    this.state.currScrollY > 0 &&
                    this.state.isMenuClicked === true
                ) {
                    this.setState({
                        menuOpen: !this.state.menuOpen,
                        isMenuClicked: !this.state.isMenuClicked
                    });
                }
            }
        );
    };

    handleMenuClicked() {
        this.setState({
            menuOpen: !this.state.menuOpen,
            isMenuClicked: !this.state.isMenuClicked
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

    onLoginSubmit = e => {
        e.preventDefault();
        const loginErrors = this.loginValidate(this.state.loginData);
        this.setState({ loginErrors });
    };

    loginValidate = data => {
        const loginErrors = {};
        if (data.loginEmail === '') loginErrors.email = 'Please enter an email';
        else if (!Validator.isEmail(data.loginEmail))
            loginErrors.email = 'Invalid email';
        else loginErrors.email = '';
        if (!data.loginPassword)
            loginErrors.password = 'Please insert a password';
        else loginErrors.password = '';
        return loginErrors;
    };

    onLoginChange = e => {
        this.setState({
            loginData: {
                ...this.state.loginData,
                [e.target.name]: e.target.value
            }
        });
    };

    onSearchChange = e => {
        this.setState({
            search: {
                ...this.state.search,
                [e.target.name]: e.target.value
            }
        });
    };

    onSearchSubmit = e => {
        e.preventDefault();
        this.props.jobSearch(this.state.search);
    };

    render() {
        const { loginData, loginErrors, search, menuOpen } = this.state;

        return (
            <div className='hero'>
                <div className='container'>
                    <div className='header'>
                        <img src={logo_white} className='logo' alt='logo' />
                        <div className='nav'>
                            {/* <div
								className='login'
								onClick={this.toggleLoginModal}
							>
								Login
							</div> */}
                            <Modal
                                isOpen={this.state.loginModal}
                                toggle={this.toggleLoginModal}
                                className='loginModal'
                            >
                                <Form onSubmit={this.onLoginSubmit}>
                                    <ModalHeader toggle={this.toggleLoginModal}>
                                        Login to OTESC
                                    </ModalHeader>
                                    <ModalBody>
                                        <Input
                                            type='text'
                                            name='loginEmail'
                                            id='loginEmail'
                                            placeholder='Enter your email'
                                            value={loginData.email}
                                            onChange={this.onLoginChange}
                                        />
                                        {loginErrors.email && (
                                            <InlineErrors
                                                errorText={loginErrors.email}
                                            />
                                        )}
                                        <Input
                                            type='password'
                                            name='loginPassword'
                                            id='loginPassword'
                                            placeholder='Enter your password'
                                            value={loginData.password}
                                            onChange={this.onLoginChange}
                                        />
                                        {loginErrors.password && (
                                            <InlineErrors
                                                errorText={loginErrors.password}
                                            />
                                        )}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button type='submit' color='primary'>
                                            Login
                                        </Button>
                                    </ModalFooter>
                                </Form>
                            </Modal>
                            {/* <div
								className='signup'
								onClick={this.toggleSignupModal}
							>
								Signup
							</div> */}
                            <Modal
                                isOpen={this.state.signupModal}
                                toggle={this.toggleSignupModal}
                                className='signupModal'
                            >
                                <Form>
                                    <ModalHeader
                                        toggle={this.toggleSignupModal}
                                    >
                                        Signup for OTESC
                                    </ModalHeader>
                                    <ModalBody>
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
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button
                                            color='primary'
                                            onClick={this.toggleSignupModal}
                                        >
                                            Signup
                                        </Button>
                                    </ModalFooter>
                                </Form>
                            </Modal>
                            <div
                                className='menu'
                                onClick={this.handleMenuClicked}
                            >
                                <div>Menu</div>
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
                                    x: spring(menuOpen ? 0 : 0),
                                    opacity: spring(menuOpen ? 1 : 0)
                                }}
                            >
                                {currentStyles => (
                                    <Div
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
											<div className='menuItem'>
												Login
											</div>
										</Link>
										<Link
											to='/'
											style={{
												textDecoration: 'none',
												color: '#fff'
											}}
										>
											<div className='menuItem'>
												Signup
											</div>
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
                                            <div className='menuItem'>
                                                Employers
                                            </div>
                                        </Link>
                                        <Link
                                            to='/about'
                                            style={{
                                                textDecoration: 'none',
                                                color: '#fff'
                                            }}
                                        >
                                            <div className='menuItem'>
                                                Our Company
                                            </div>
                                        </Link>
                                    </Div>
                                )}
                            </Motion>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='header'>
                            Navigating You to A Path of Success
                        </div>
                        <div className='text'>
                            We undertake to treat our clients, our candidates
                            and our sources all equally in the same high
                            accordance with the same values of{' '}
                            <span>openness</span>, <span>integrity</span> and{' '}
                            <span>commitment</span> to add value.
                        </div>
                        <div className='search'>
                            <form onSubmit={this.onSearchSubmit}>
                                <div>
                                    <input
                                        type='text'
                                        className='job'
                                        name='job'
                                        id='job'
                                        value={search.job}
                                        placeholder='Job title'
                                        onChange={this.onSearchChange}
                                    />
                                    <input
                                        type='text'
                                        className='location'
                                        name='location'
                                        id='location'
                                        value={search.location}
                                        placeholder='Location'
                                        onChange={this.onSearchChange}
                                    />
                                </div>
                                <button type='submit'>APPLY NOW</button>
                            </form>
                        </div>
                        <div className='employerLink'>
                            Are you an employer looking to hire instead?
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Hero.propTypes = {
    jobSearch: PropTypes.func.isRequired
};

export default Hero;
