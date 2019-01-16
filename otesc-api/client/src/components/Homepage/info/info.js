import React, { Component } from 'react';
import './info.scss';

class Info extends Component {
	constructor(props) {
		super(props);
		this.state = {
			targetAud: 'candidate'
		};
		this.handleInfo = this.handleInfo.bind(this);
	}

	handleInfo = audience => {
		this.setState({
			targetAud: audience
		});
	};

	render() {
		let content;
		if (this.state.targetAud === 'candidate') {
			content = (
				<div className="text">
					<div>
						Our clients retain us to find suitable people for a
						broad range of functions at two tiers – Senior
						Executives (EVP/VP, Regional Director, Country Manager)
						and Middle Management (Divisional Head, Manager and
						Assistant VP). Our candidates rely on our recruitment
						service to maximize their career opportunities. As such,
						we have responsibilities to both clients and candidates.
					</div>
					<div>
						We will advice each candidate in an open manner,
						suggesting opportunity based on the individual’s
						ability, suitability and experience.
					</div>
					<div>
						We are always on the look-out for talented executives
						and professionals with successful career track record,
						exceptional leadership potential and professionalism in
						their specific industry. If you fit that description,
						please take the time to submit your resume. Your details
						will be kept confidential and be evaluated by our entire
						team of consultants.
					</div>
					<div>
						Our commitment to you is that we will work closely with
						you to match your career expectation, and that we will
						act ethically and fairly throughout the process so that
						you may trust us to represent your best interests at all
						times.
					</div>
				</div>
			);
		} else {
			content = (
				<div className="text">
					<div>
						For more than 20 years we have been advising clients on
						recruiting the most effective executives and
						professionals for their Asia Pacific operations. We work
						with a wide range of companies including Computer
						vendors (Systems and Software), Telecom Operators (Fixed
						and Wireless), Networking Equipment Suppliers (4G/LTE/3G
						Infrastructure, LAN/WAN/WIFI), Electronics Component
						Suppliers (Passive and Active), and Instrumentation
						(Medical, Telecom and Electronics).
					</div>
					<div>
						We are able to dedicate our resources to what really
						matters — providing outstanding service for clients. We
						consider fulfilling our client needs to be our top
						priority.
					</div>
				</div>
			);
		}

		let processes;
		if (this.state.targetAud === 'candidate') {
			processes = (
				<div className="processes">
					<div className="item">
						<div className="processTitle">Registration</div>
						<div>
							Send us your resume – We recommend you to send us a
							detailed resume. Registering with Oriental Tech will
							also grant you the opportunity to receive the first
							hand broadcasting emails about any executive job
							openings in your country.
						</div>
					</div>
					<div className="item">
						<div className="processTitle">Screening</div>
						<div>
							We will run a pre-screen on your resume, contact you
							for a telephone interview to evaluate your situation
							and advise the next move appropriately. Our
							Consultants always put your career development as
							the top priority. If we note that your present
							position can still provide you the best interest in
							career development, we would say it so and would
							recommend you to make no move.
						</div>
					</div>
					<div className="item">
						<div className="processTitle">Qualifying</div>
						<div>
							We will contact you for any opening which can match
							your expectation, utilize your skills and
							professions, and most importantly, take you to the
							next level accordingly to your career plan.
						</div>
					</div>
					<div className="item">
						<div className="processTitle">Submission</div>
						<div>
							No ten pages resume can describe you all. Our
							Executive Recruiters will work closely with you to
							create a new resume which can emphasize your
							strength, ability, insight and characters for
							presentation to the individual employer.
						</div>
					</div>
					<div className="item">
						<div className="processTitle">Follow-Up</div>
						<div>
							Our Consultants will stay in touch with you to
							provide you the latest update and feedback of the
							interviewers. Review the situation and advise you to
							act appropriately. We understand the candidates may
							sometimes fail in the interview process. But it may
							also be your interest in learning the reasons why
							you failed so as not to make the same mistake the
							next time you are given similar opportunity.
						</div>
					</div>
					<div className="item">
						<div className="processTitle">Closing the Deal</div>
						<div>
							We have over 20 years of executive recruitment
							experience and our consultants will assist you in
							the salary negotiation stage. All employees
							(including all the CxO executives) would like to see
							their annual salaries “tripled” every year, but an
							incoherent salary expectation may cost your job as
							well. It is our Consultants to give you appropriate
							advice all the time.
						</div>
					</div>
				</div>
			);
		} else {
			processes = (
				<div className="processes">
					<div className="item">
						<div className="processTitle">
							Undertsanding Client's Requirements
						</div>
						<div>
							An Oriental Tech associate visits you, talks with
							your executives and learns about your company's
							corporate philosophies, company culture, HR
							policies, structure and personality.
						</div>
						<div>
							Defining The Positions - Working closely with your
							hiring management can help to define a detailed and
							precise job description, highlighting the necessary
							experience and personal qualities of potentially
							sucessful candidates. Our associates will always be
							there as your working partners throughout the
							recruitment process.
						</div>
					</div>
					<div className="item">
						<div className="processTitle">Nationwide Search</div>
						<div>
							Oriental Tech associates screen and identify
							potential candidates from their own personal network
							formed over years of business practice and from our
							established and sophisticated computerized databank
							of executives. Each of the identified candidate will
							be constantly monitored in terms of career
							performance and progress. Further qualified
							candidates, usually named by the customers, will
							also be "hunted" from the pertinent
							companies/industries.
						</div>
						<div>
							A combination of our personal network in the
							high-tech industries and a well developed computer
							databank ensure maximal targeting of potential
							candidates during the recruitment process.
						</div>
					</div>
					<div className="item">
						<div className="processTitle">Narrowing the Search</div>
						<div>
							We screen and present (with our candidate's
							approval) only those candidates whom we believe meet
							the position specifications, general character
							traits and compatibility needs of each client. All
							possible candidates are analyzed for your technical
							requirements, desired personal qualities and
							compatibility with the individual character of your
							company. Each candidate's motvations and objectives
							are probed and assessed. A final slate is submitted
							for in-depth, face to face interviews with your
							management team.
						</div>
					</div>
					<div className="item">
						<div className="processTitle">
							Introducing Clients and Candidates
						</div>
						<div>
							When you are introduced to a candidate, you are
							assured of a fully screened and predisposed
							individual. You also will be presented a complete
							and detailed resume outlining the candidate's
							business experience and our evaluation of the
							executive's strengths and weaknesses, personal
							character and management style profile. The
							corresponding results of our background search will
							enable you to use interview time as effectively and
							efficiently as possible.
						</div>
					</div>
				</div>
			);
		}

		return (
			<div className="Info">
				<div className="container">
					<div className="header">
						<div
							className="candidateTab"
							onClick={() => this.handleInfo('candidate')}
							style={{
								borderBottom:
									this.state.targetAud === 'candidate'
										? '2px solid #3b4057'
										: 'none',
								color:
									this.state.targetAud === 'candidate'
										? '#3b4057'
										: '#979797'
							}}
						>
							Candidates
						</div>
						<div
							className="employerTab"
							onClick={() => this.handleInfo('employer')}
							style={{
								borderBottom:
									this.state.targetAud === 'employer'
										? '2px solid #3b4057'
										: 'none',
								color:
									this.state.targetAud === 'employer'
										? '#3b4057'
										: '#979797'
							}}
						>
							Employers
						</div>
					</div>
					<div className="content">
						{content}
						<div className="process">Process</div>
						{processes}
					</div>
				</div>
			</div>
		);
	}
}

export default Info;
