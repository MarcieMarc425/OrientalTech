import React, { Component } from 'react';
import Navbar from '../Jobpage/navBar/navbar';
import JobQuery from '../Jobpage/jobQuery/jobQuery';
import Footer from '../Homepage/footer/footer';
import Hero from '../Jobpage/hero/hero';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearSearch, addSearch } from '../../actions/index';
import PropTypes from 'prop-types';
import api from '../../api/index';

class jobpage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: {
				job: props.search.job,
				location: props.search.location
			},
			queryResult: []
		};
	}

	componentDidMount = () => {
		window.scrollTo(0, 0);
		api.search(this.state.query).then(queryResult => {
			this.setState({
				queryResult: queryResult
			});
		});
	};

	componentWillUnmount = () => {
		this.setState({
			queryResult: []
		});
		this.props.clearSearch().then(console.log('Search cleared'));
	};

	jobSearch = data =>
		this.props.addSearch(data).then(() => this.props.history.push('/jobs'));

	render() {
		return (
			<div>
				<Navbar jobSearch={this.jobSearch} />
				<Hero
					job={this.state.query.job}
					location={this.state.query.location}
				/>
				<JobQuery jobArr={this.state.queryResult} />
				<Footer />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		search: {
			job: state.search.query.job,
			location: state.search.query.location
		}
	};
}

jobpage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}),
	addSearch: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addSearch, clearSearch }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(jobpage);
