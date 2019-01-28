import React, { Component } from 'react';
import './hero.scss';
import logo_white from '../../../resources/logo/logo_white.svg';
import { Form, Input, Button, Alert } from 'reactstrap';

export default class hero extends Component {
    render() {
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
                                Searching for the best
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
                            <Form className='employ_form'>
                                <div className='employ-name-email'>
                                    <Input
                                        type='text'
                                        className='employ-name'
                                        placeholder='Name'
                                    />
                                    <Input
                                        type='email'
                                        className='employ-email'
                                        placeholder='Email'
                                    />
                                </div>
                                <div>
                                    <Input type='text' placeholder='Company' />
                                </div>
                                <div>
                                    <Input type='text' placeholder='Phone' />
                                </div>
                                <div>
                                    <Input type='text' placeholder='Industry' />
                                </div>
                                <div>
                                    <Input type='select'>
                                        <option>Select Location</option>
                                        <option>Hong Kong</option>
                                        <option>Taiwan</option>
                                        <option>China</option>
                                        <option>Singapore</option>
                                        <option>South Korea</option>
                                        <option>Japan</option>
                                        <option>Others</option>
                                    </Input>
                                </div>
                                <Button>APPLY</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
