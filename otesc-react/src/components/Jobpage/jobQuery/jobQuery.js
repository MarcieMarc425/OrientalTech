import React, { Component } from 'react';
import './jobQuery.scss';
import JobCard from './JobCard/jobCard';

class JobQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobArr: [],
            updateFlag: false
        };
    }

    componentDidUpdate = () => {
        if (this.state.updateFlag === false) {
            this.setState({
                jobArr: this.props.jobArr,
                updateFlag: true
            });
        }
    };

    render() {
        let query;
        if (this.state.jobArr.length === 0) {
            query = <div>No result found</div>;
        } else {
            query = (
                <div>
                    {this.state.jobArr.map(job => {
                        return (
                            <JobCard
                                key={job._id}
                                id={job._id}
                                title={job.title}
                                location={job.location}
                                date_posted={job.date_posted}
                                salary={job.salary}
                                career_lvl={job.career_lvl}
                                type={job.type}
                                tag={job.tags}
                            />
                        );
                    })}
                </div>
            );
        }
        return <div className='jobQuery'>{query}</div>;
    }
}

export default JobQuery;
