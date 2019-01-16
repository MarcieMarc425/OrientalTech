import React, { Component } from 'react';
import './jobCard.scss';

class jobCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			title: this.props.title,
			location: this.props.location,
			date_posted: this.props.date_posted,
			salary: this.props.salary,
			career_lvl: this.props.career_lvl,
			category: this.props.category,
			type: this.props.type,
			tags: this.props.tag
		};
	}

	render() {
		return (
			<div className='jobCard'>
				<div className='jobTitle'>{this.state.title}</div>
				<div className='jobLocation'>{this.state.location}</div>
				<div className='jobMiscDetail'>
					<div className='jobCareerLvl'>{this.state.career_lvl}</div>
					<div className='jobTypeSalary'>
						<div>
							{this.state.type}, {this.state.salary}
						</div>
					</div>
					<div className='date_posted'>
						<div>
							Posted {this.state.date_posted.month}{' '}
							{this.state.date_posted.date},{' '}
							{this.state.date_posted.year}
						</div>
					</div>
				</div>
				<div className='jobTags'>
					{this.state.tags.map(tag => {
						return <div className='tag'>{tag}</div>;
					})}
				</div>
			</div>
		);
	}
}

export default jobCard;
