import React, { Component } from 'react';
import Navbar from '../Jobpage/navBar/navbar';
import JobQuery from '../Jobpage/jobQuery/jobQuery';
import Footer from '../Homepage/footer/footer';
import Hero from '../Jobpage/hero/hero';
import { connect } from 'react-redux';
import { clearSearch } from '../../actions/index';
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

	render() {
		return (
			<div>
				<Navbar />
				<Hero job={this.state.query.job} />
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
			location: state.search.query.job
		}
	};
}

export default connect(
	mapStateToProps,
	{ clearSearch }
)(jobpage);
