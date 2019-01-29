import React, { Component } from 'react';
import NavBar from '../../Jobpage/navBar/navbar';
import Hero from '../Hero/hero';
import Info from '../Info/info';
import Footer from '../../Homepage/footer/footer';
import { connect } from 'react-redux';
import { addSearch } from '../../../actions/index';
import PropTypes from 'prop-types';

class mission extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    };

    jobSearch = data =>
        this.props.addSearch(data).then(() => this.props.history.push('/jobs'));

    render() {
        return (
            <div className='mission'>
                <NavBar jobSearch={this.jobSearch} />
                <Hero title='Our Mission' />
                <Info type='mission' />
                <Footer />
            </div>
        );
    }
}

mission.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }),
    addSearch: PropTypes.func.isRequired
};

export default connect(
    null,
    { addSearch }
)(mission);
