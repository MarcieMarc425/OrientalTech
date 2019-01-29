import React, { Component } from 'react';
import './info.scss';
import { Link } from 'react-router-dom';
import { Div } from 'glamorous';
import { Form, Input, Button } from 'reactstrap';
import { compose, withProps } from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps';
import api from '../../../api/index';
import { Alert } from 'reactstrap';

const activeLink_style = {
    borderBottom: '2px solid #3b4057',
    color: '#3b4057'
};

const inactiveLink_style = {
    color: '#979797',
    ':hover': { color: '#3b4057', cursor: 'pointer' }
};

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDLJ3p3eMUKhgRTP780Lx0VyMjNyHroeZ0&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 22.2791107, lng: 114.17809629999999 }}
    >
        {props.isMarkerShown && (
            <Marker position={{ lat: 22.2791107, lng: 114.17809629999999 }} />
        )}
    </GoogleMap>
));

class info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: {
                name: '',
                email: '',
                phone: '',
                text: ''
            },
            msgSubmitted: false,
            error: ''
        };
        this.handleMsgSubmit = this.handleMsgSubmit.bind(this);
        this.onMsgChange = this.onMsgChange.bind(this);
    }

    handleMsgSubmit = e => {
        e.preventDefault();
        if (
            this.state.msg.email === '' ||
            this.state.msg.name === '' ||
            this.state.msg.phone === '' ||
            this.state.msg.text === ''
        ) {
            this.setState({
                msgSubmitted: true,
                error: 'Form entry(s) cannot be empty'
            });
        } else {
            api.message(this.state.msg).then(res => {
                if (res === 'Success') {
                    this.setState({
                        msgSubmitted: true,
                        error: ''
                    });
                } else {
                    this.setState({
                        msgSubmitted: true,
                        error: res
                    });
                }
            });
        }
    };

    onMsgChange = e => {
        this.setState({
            msg: {
                ...this.state.msg,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        let popUp;
        if (this.state.msgSubmitted === true) {
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

        let content;
        if (this.props.type === 'about') {
            content = (
                <div className='compSection'>
                    <div className='compHeader'>
                        <Link
                            to='/about'
                            style={{
                                textDecoration: 'none',
                                color: '#3b4057'
                            }}
                        >
                            <Div
                                css={{
                                    ...activeLink_style
                                }}
                            >
                                About Us
                            </Div>
                        </Link>
                        <Link
                            to='/mission'
                            style={{
                                textDecoration: 'none',
                                color: '#979797'
                            }}
                        >
                            <Div
                                css={{
                                    ...inactiveLink_style
                                }}
                            >
                                Our Mission
                            </Div>
                        </Link>
                        <Link
                            to='/contact'
                            style={{
                                textDecoration: 'none',
                                color: '#979797'
                            }}
                        >
                            <Div
                                css={{
                                    ...inactiveLink_style
                                }}
                            >
                                Contact Us
                            </Div>
                        </Link>
                    </div>
                    <div className='compText'>
                        <div>
                            Oriental Tech Executive Search Consultants is an
                            Asia Pacific focused Executive Search boutique with
                            strong coverage in the FMCG and Technology
                            industries. In particular we are experienced in
                            placing Senior Executive and Middle Management staff
                            and professionals in the Fashion, Retailing,
                            Apparel, Consumer, Technology, Telecommunications,
                            Cloud/Internet, Big Data and Electronics industry
                            space.{' '}
                        </div>
                        <div>
                            Oriental Tech has deep domain knowledge and proven
                            expertise in verticals including General Management,
                            Sales & Business Development, Digital & E-Commerce
                            Marketing, Financial Control, Presales & Postsales
                            Systems Engineering, Procurement, Supply Chain and
                            Human Resources. Rank of job placements are spanning
                            from Middle Management to CxO/Director/VP of the
                            employers’ Asia Pacific operation.
                        </div>
                        <div>
                            With a nearly 20 years track record of proven
                            results, Oriental Tech’s model of specialization in
                            the technology industry has yielded sustained
                            year-on-year growth in earnings, profitability and
                            market recognition. Oriental Tech’s recruitment
                            agents operate in all major cities across Asia
                            Pacific – Singapore, China, Japan, Australia, Korea,
                            India, Taiwan and Hong Kong.
                        </div>
                        <div>
                            For more information, contact our recruiters at any
                            time.
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.type === 'mission') {
            content = (
                <div className='compSection'>
                    <div className='compHeader'>
                        <Link
                            to='/about'
                            style={{
                                textDecoration: 'none',
                                color: '#979797'
                            }}
                        >
                            <Div
                                css={{
                                    ...inactiveLink_style
                                }}
                            >
                                About Us
                            </Div>
                        </Link>
                        <Link
                            to='/mission'
                            style={{
                                textDecoration: 'none',
                                color: '#3b4057'
                            }}
                        >
                            <Div
                                css={{
                                    ...activeLink_style
                                }}
                            >
                                Our Mission
                            </Div>
                        </Link>
                        <Link
                            to='/contact'
                            style={{
                                textDecoration: 'none',
                                color: '#979797'
                            }}
                        >
                            <Div
                                css={{
                                    ...inactiveLink_style
                                }}
                            >
                                Contact Us
                            </Div>
                        </Link>
                    </div>
                    <div className='compText'>
                        <div>Searching for the Best.</div>
                        <div>
                            We undertake to treat our clients, our candidates
                            and our sources all equally in the same high
                            standard of service and in accordance with the same
                            values of openness, integrity and commitment to add
                            value.{' '}
                        </div>
                        <div>
                            Our mission is to provide the highest quality
                            executive search services to ensure that the best
                            and the most cultural fit candidate can be appointed
                            by our clients and thus the clients can also benefit
                            from the experiences and knowledge of the new
                            recruits bring on board to their environment.{' '}
                        </div>
                        <div>
                            Our mission is to assist the candidates to decide on
                            their future career development by utilizing our two
                            decades of industrial knowledge in the executive
                            search practice.{' '}
                        </div>
                        <div>
                            We aspire to match the expectation and requirements
                            of the clients and the candidates, to handle all the
                            Senior and Mid-level management roles for leading
                            technology companies in every vertical segment and
                            to combine our specialist expertise with speed and
                            effectiveness to provide exceptionally responsive
                            executive search and recruitment service to all
                            clients and candidates.
                        </div>
                        <div>
                            For more information, contact our recruiters at any
                            time.
                        </div>
                    </div>
                </div>
            );
        } else {
            content = (
                <div className='compSection'>
                    <div className='compHeader'>
                        <Link
                            to='/about'
                            style={{
                                textDecoration: 'none',
                                color: '#979797'
                            }}
                        >
                            <Div
                                css={{
                                    ...inactiveLink_style
                                }}
                            >
                                About Us
                            </Div>
                        </Link>
                        <Link
                            to='/mission'
                            style={{
                                textDecoration: 'none',
                                color: '#979797'
                            }}
                        >
                            <Div
                                css={{
                                    ...inactiveLink_style
                                }}
                            >
                                Our Mission
                            </Div>
                        </Link>
                        <Link
                            to='/contact'
                            style={{
                                textDecoration: 'none',
                                color: '#3b4057'
                            }}
                        >
                            <Div
                                css={{
                                    ...activeLink_style
                                }}
                            >
                                Contact Us
                            </Div>
                        </Link>
                    </div>
                    <div className='compText'>
                        <div>
                            Our recruitment team is ready to help meet your
                            business challenges anytime, anywhere. We pride
                            ourselves on developing long-term relationships with
                            our clients. We place your needs and success at the
                            heart of our business.
                        </div>
                        <div>
                            For more information about Oriental Tech Executive
                            Search Consultants, call any of the following
                            numbers or send your resume directly to us at
                            otesc@oriental-tech.com
                        </div>
                    </div>
                    <div className='contactForm'>
                        <div className='formHeading'>Leave us a message</div>
                        <Form onSubmit={this.handleMsgSubmit}>
                            <div className='form-group'>
                                <div className='form-entry-name'>
                                    <Input
                                        type='text'
                                        name='name'
                                        placeholder='Name'
                                        value={this.state.msg.name}
                                        onChange={this.onMsgChange}
                                    />
                                </div>
                                <div className='form-entry-email'>
                                    <Input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        value={this.state.msg.email}
                                        onChange={this.onMsgChange}
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='form-entry'>
                                    <Input
                                        type='text'
                                        name='phone'
                                        placeholder='Phone Number'
                                        value={this.state.msg.phone}
                                        onChange={this.onMsgChange}
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='form-entry'>
                                    <Input
                                        className='contact-msg'
                                        type='textarea'
                                        name='text'
                                        placeholder='Message'
                                        value={this.state.msg.text}
                                        onChange={this.onMsgChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <Button className='contact-button'>
                                    SUBMIT
                                </Button>
                            </div>
                        </Form>
                        {popUp}
                    </div>
                    <div className='compBody'>
                        <div className='contactText'>
                            <div className='contactType'>
                                <div className='contactHead'>Address</div>
                                <div>Suite F, 12/F, Lucky Plaza</div>
                                <div>
                                    315-321 Lockhart Road, Wanchai, Hong Kong
                                </div>
                            </div>
                            <div className='contactType'>
                                <div className='contactHead'>Email</div>
                                <div>otesc@oriental-tech.com</div>
                            </div>
                            <div className='contactType'>
                                <div className='contactHead'>Phone</div>
                                <div>HK: +852-2893-0360</div>
                                <div>China: +86-155-4687-6244</div>
                                <div>US: +1-650-963-5005</div>
                                <div>Singapore: +65-3108-0441</div>
                            </div>
                        </div>
                        <div className='map'>
                            <MyMapComponent isMarkerShown />
                        </div>
                    </div>
                </div>
            );
        }
        return <div className='compInfo'>{content}</div>;
    }
}

export default info;
