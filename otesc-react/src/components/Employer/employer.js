import React, { Component } from 'react';
import Hero from '../Employer/hero/hero';
import Footer from '../Homepage/footer/footer';

class employer extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <div className='employer'>
                <Hero />
                <Footer />
            </div>
        );
    }
}

export default employer;
