import React, { Component } from 'react';
import Navbar from '../../Jobpage/navBar/navbar';
import Footer from '../../Homepage/footer/footer';
import api from '../../../api/index';
import './jobDetail.scss';

export default class jobDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            location: '',
            date_posted: {},
            date_apply: {},
            category: '',
            education: '',
            salary: '',
            career_lvl: '',
            type: '',
            tags: [],
            desc: [],
            responsibility: [],
            requirements: []
        };
    }

    componentDidMount = () => {
        api.searchByID(this.props.match.params.id).then(res => {
            this.setState({
                title: res.title,
                location: res.location,
                date_posted: res.date_posted,
                date_apply: res.date_apply,
                category: res.category,
                education: res.education,
                salary: res.salary,
                career_lvl: res.career_lvl,
                type: res.type,
                tags: res.tags,
                desc: res.desc,
                responsibility: res.responsibility,
                requirements: res.requirements
            });
        });
    };

    render() {
        let desc;
        if (this.state.desc.length !== 0) {
            desc = (
                <div className='jobdetaildescwrap'>
                    <div className='descHead'>Job Description</div>
                    {this.state.desc.map(desc => {
                        return <div className='descResp'>{desc}</div>;
                    })}
                </div>
            );
        }
        return (
            <div className='jobDetail'>
                <Navbar />
                <div className='detail'>
                    <div className='jobDetailHead'>
                        <div className='jobheadTitle'>{this.state.title}</div>
                        <div className='jobheadLoc'>{this.state.location}</div>
                        <div className='headMisc'>
                            <div>{this.state.category}</div>
                            <div>
                                <div>
                                    {this.state.type}, {this.state.salary}
                                </div>
                            </div>
                        </div>
                        <div className='headPostDate'>
                            <div>
                                Posted {this.state.date_posted.month}{' '}
                                {this.state.date_posted.date},{' '}
                                {this.state.date_posted.year}
                            </div>
                        </div>

                        <button className='jobDetailApply'>Apply</button>
                    </div>

                    <div className='jobDetailContent'>
                        <div className='detailFlexRow'>
                            <div className='detailDesc'>
                                {desc}
                                <div className='descHead'>
                                    Job Responsibilities
                                </div>
                                {this.state.responsibility.map(resp => {
                                    return (
                                        <div className='descResp'>{resp}</div>
                                    );
                                })}
                                <div className='descHeadReq'>
                                    Job Requirements
                                </div>
                                {this.state.requirements.map(req => {
                                    return <div className='descReq'>{req}</div>;
                                })}
                            </div>
                            <div className='detailSide'>
                                <div className='sideHead'>Job Details</div>
                                <div className='sideDescHead'>Seniority</div>
                                <div className='sideDescText'>
                                    {this.state.career_lvl}
                                </div>
                                <div className='sideDescHead'>Education</div>
                                <div className='sideDescText'>
                                    {this.state.education}
                                </div>
                                <div className='sideDescHead'>
                                    Job Functions
                                </div>
                                <div className='sideDescText'>
                                    {this.state.category}
                                </div>
                                <div className='sideDescHead'>
                                    Employment Type
                                </div>
                                <div className='sideDescText'>
                                    {this.state.type}
                                </div>
                            </div>
                        </div>
                        <div className='detailTags'>
                            {this.state.tags.map(tag => {
                                return (
                                    <div className='detailIndTag'>{tag}</div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
