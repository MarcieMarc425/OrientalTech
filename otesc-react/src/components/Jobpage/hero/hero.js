import React, { Component } from 'react';
import './hero.scss';

class hero extends Component {
	render() {
		let title;
		if (this.props.job === '') {
			title = <div> All</div>;
		} else {
			title = <div>{this.props.job}</div>;
		}
		return (
			<div className='job-hero'>
				<div className='title'>
					<span>Jobs > </span> {title}
				</div>
			</div>
		);
	}
}

export default hero;
