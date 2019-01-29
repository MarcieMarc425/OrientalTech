import React, { Component } from 'react';
import NavBar from '../../Jobpage/navBar/navbar';
import Hero from '../Hero/hero';
import Info from '../Info/info';
import Footer from '../../Homepage/footer/footer';
import './contact.scss';
import { connect } from 'react-redux';
import { addSearch } from '../../../actions/index';
import PropTypes from 'prop-types';

class contact extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    };

    jobSearch = data =>
        this.props.addSearch(data).then(() => this.props.history.push('/jobs'));

    render() {
        return (
            <div className='contact'>
                <NavBar className='contact-navbar' jobSearch={this.jobSearch} />
                <Hero title='Contact Us' />
                <Info type='contact' className='contact-info' />
                <Footer />
            </div>
        );
    }
}

contact.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }),
    addSearch: PropTypes.func.isRequired
};

export default connect(
    null,
    { addSearch }
)(contact);
