import React, { Component } from 'react';
import NavBar from '../../Jobpage/navBar/navbar';
import Hero from '../Hero/hero';
import Info from '../Info/info';
import Footer from '../../Homepage/footer/footer';
import './contact.scss';
class contact extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <div className='contact'>
                <NavBar className='contact-navbar' />
                <Hero title='Contact Us' />
                <Info type='contact' className='contact-info' />
                <Footer />
            </div>
        );
    }
}

export default contact;
