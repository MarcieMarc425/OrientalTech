import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

class InlineErrors extends Component {
	render() {
		let { errorText } = this.props;
		let text;
		if ({ errorText } === '') {
			text = <div />;
		} else {
			text = <Alert color="danger">{errorText}</Alert>;
		}
		return <div>{text}</div>;
	}
}

InlineErrors.propTypes = {
	errorText: PropTypes.string.isRequired
};

export default InlineErrors;
