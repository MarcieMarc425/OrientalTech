import React, { Component } from 'react';
import Navbar from '../../Jobpage/navBar/navbar';
import Footer from '../../Homepage/footer/footer';
import api from '../../../api/index';
import './jobDetail.scss';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    FormText,
    Input,
    Button,
    Label,
    Alert
} from 'reactstrap';

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
            requirements: [],
            applyModal: false,
            applyForm: {
                applyName: '',
                applyEmail: '',
                applyPhone: '',
                applyResume: null,
                applyCover: null
            },
            applySubmitted: false,
            error: ''
        };
        this.toggleApplyModal = this.toggleApplyModal.bind(this);
        this.onApplyFormChange = this.onApplyFormChange.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.handleApplySubmit = this.handleApplySubmit.bind(this);
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
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

    toggleApplyModal() {
        this.setState({
            applyModal: !this.state.applyModal
        });
    }

    onApplyFormChange = e => {
        this.setState({
            applyForm: {
                ...this.state.applyForm,
                [e.target.name]: e.target.value
            }
        });
    };

    onFileChange = e => {
        if (e.target.files[0] === undefined) {
            this.setState({
                applyForm: {
                    ...this.state.applyForm,
                    [e.target.name]: null
                }
            });
        } else {
            this.setState({
                applyForm: {
                    ...this.state.applyForm,
                    [e.target.name]: e.target.files[0]
                }
            });
        }
    };

    handleApplySubmit = e => {
        e.preventDefault();
        if (
            this.state.applyForm.applyName === '' ||
            this.state.applyForm.applyEmail === '' ||
            this.state.applyForm.applyPhone === '' ||
            this.state.applyForm.applyResume === null ||
            this.state.applyForm.applyCover === null
        ) {
            this.setState({
                applySubmitted: true,
                error: 'Form entry(s) cannot be empty'
            });
        } else {
            var extension = this.state.applyForm.applyResume.name
                .split('.')
                .pop();
            console.log(extension);
            if (
                extension === 'pdf' ||
                extension === 'doc' ||
                extension === 'docx'
            ) {
                //upload to S3
            } else {
                this.setState({
                    applySubmitted: true,
                    error: 'File type must be .pdf, .doc or .docx'
                });
            }
        }
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

                        <button
                            className='jobDetailApply'
                            onClick={this.toggleApplyModal}
                        >
                            Apply
                        </button>
                    </div>
                    <Modal
                        isOpen={this.state.applyModal}
                        toggle={this.toggleApplyModal}
                        className='loginModal'
                    >
                        <Form onSubmit={this.handleApplySubmit}>
                            <ModalHeader toggle={this.toggleApplyModal}>
                                Apply to {this.state.title}
                            </ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label for='applyName'>Name</Label>

                                    <Input
                                        type='text'
                                        name='applyName'
                                        id='applyName'
                                        value={this.state.applyForm.applyName}
                                        onChange={this.onApplyFormChange}
                                        placeholder='Enter your full name'
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for='applyEmail'>Email</Label>

                                    <Input
                                        type='text'
                                        name='applyEmail'
                                        id='applyEmail'
                                        value={this.state.applyForm.applyEmail}
                                        onChange={this.onApplyFormChange}
                                        placeholder='Enter your email'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for='applyPhone'>Phone</Label>

                                    <Input
                                        type='text'
                                        name='applyPhone'
                                        id='applyPhone'
                                        value={this.state.applyForm.applyPhone}
                                        onChange={this.onApplyFormChange}
                                        placeholder='Enter your phone'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for='applyResume'>Resume</Label>
                                    <Input
                                        type='file'
                                        name='applyResume'
                                        id='applyResume'
                                        onChange={this.onFileChange}
                                    />
                                    <FormText color='muted'>
                                        Accepts only PDF or Word files
                                    </FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for='applyCover'>Cover Letter</Label>
                                    <Input
                                        type='file'
                                        name='applyCover'
                                        id='applyCover'
                                        onChange={this.onFileChange}
                                    />
                                    <FormText color='muted'>
                                        Accepts only PDF or Word files
                                    </FormText>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button type='submit' color='primary'>
                                    Apply
                                </Button>
                            </ModalFooter>
                        </Form>
                    </Modal>

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
