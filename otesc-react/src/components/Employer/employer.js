import React, { Component } from 'react';
import Navbar from '../Jobpage/navBar/navbar';
import Footer from '../Homepage/footer/footer';

class employer extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <div className='employer'>
                <Navbar />
                <Footer />
            </div>
        );
    }
}

export default employer;
