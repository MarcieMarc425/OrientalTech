import React, { Component } from 'react';
import './hero.scss';

class hero extends Component {
	render() {
		return (
			<div className='minihero'>
				<div className='title'>
					<span>Company > </span>
					{this.props.title}
				</div>
			</div>
		);
	}
}

export default hero;
