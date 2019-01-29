import React, { Component } from 'react';
import Hero from '../Homepage/hero/hero';
import Navbar from '../Homepage/navBar/navbar';
import Info from '../Homepage/info/info';
import Expertise from '../Homepage/expertise/expertise';
import SignupBar from '../Homepage/signup/signup';
import Footer from '../Homepage/footer/footer';
import { connect } from 'react-redux';
import { addSearch } from '../../actions/index';
import PropTypes from 'prop-types';
class homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currScrollY: 0,
            windowHeight: 0,
            showNav: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.updateWindowHeight = this.updateWindowHeight.bind(this);
        this.showNav = this.showNav.bind(this);
        this.scrollToggle = this.scrollToggle.bind(this);
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
        this.updateWindowHeight();
        window.addEventListener('resize', this.updateWindowHeight);
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateWindowHeight);
        window.removeEventListener('scroll', this.handleScroll);
    };

    updateWindowHeight() {
        this.setState({ windowHeight: window.innerHeight });
    }

    handleScroll = e => {
        this.setState(
            {
                currScrollY: window.scrollY
            },
            this.showNav(this.state.currScrollY)
        );
    };

    showNav = yPos => {
        if (yPos > this.state.windowHeight) {
            this.setState({
                showNav: true
            });
        } else {
            this.setState({
                showNav: false
            });
        }
    };

    scrollToggle() {
        if (this.state.menuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100%';
        } else {
            document.body.style.overflow = 'visible';
        }
    }

    jobSearch = data =>
        this.props.addSearch(data).then(() => this.props.history.push('/jobs'));

    render() {
        let nav;
        if (this.state.showNav === true) {
            nav = <Navbar jobSearch={this.jobSearch} />;
        } else {
            nav = null;
        }
        return (
            <div className='Homepage'>
                {nav}
                <Hero jobSearch={this.jobSearch} />
                <Info className='info' />
                <Expertise />
                <SignupBar />
                <Footer />
            </div>
        );
    }
}

homepage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }),
    addSearch: PropTypes.func.isRequired
};

export default connect(
    null,
    { addSearch }
)(homepage);
