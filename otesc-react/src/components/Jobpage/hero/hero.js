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
        let location;
        if (this.props.location === '') {
            location = <div>, All location</div>;
        } else {
            location = (
                <div>
                    {', '}
                    {this.props.location}
                </div>
            );
        }
        return (
            <div className='job-hero'>
                <div className='title'>
                    <span>Jobs > </span> {title}
                    {location}
                </div>
            </div>
        );
    }
}

export default hero;
