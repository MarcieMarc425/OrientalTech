import React, { Component } from 'react';
import './signup.scss';
import api from '../../../api/index';
import { Alert } from 'reactstrap';
class SignupBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            submitted: false,
            error: ''
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        api.subscribe(this.state.email).then(res => {
            if (res === 'Success') {
                this.setState({
                    submitted: true
                });
            } else {
                this.setState({
                    submitted: true,
                    error: res
                });
            }
        });
    };

    onEmailChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        let popUp;
        if (this.state.submitted === true) {
            if (this.state.error === '') {
                popUp = (
                    <div className='alert'>
                        <Alert color='success'>
                            Email successfully submitted.
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
            <div className='signupbar'>
                <div className='header'>Jumpstart Your Career Today</div>
                <div className='smallText'>
                    Subscribe to our newsletter - You are just one click away!
                </div>
                <div className='bar'>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type='email'
                            className='emailSignup'
                            name='email'
                            id='email'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        />
                        <button type='submit'>SUBSCRIBE</button>
                    </form>
                </div>
                {popUp}
            </div>
        );
    }
}

export default SignupBar;
