import React from 'react';
import headerStyles from './headerstyles/header.module.scss';
import { headerSvg, headerWavSvg, virtualSvg, videoSvg, inPersonSvg } from './headerstyles/headerSvg';
import { FaBookOpen } from 'react-icons/fa';
import { MdDoneAll } from 'react-icons/md';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			virtual: false,
			video: false,
			inperson: false,
		};
	}

	render() {
		const inPersonHover = (
			<ul>
				<li>
					<MdDoneAll />
					<p>One on One</p>
				</li>
				<li>
					<MdDoneAll />
					<p>In Person Tutoring</p>
				</li>
				<li>
					<MdDoneAll />
					<p>For one hour or idk</p>
				</li>
			</ul>
		);

		const virtualHover = (
			<ul>
				<li>
					<MdDoneAll />
					<p>Meet Online at your convenience</p>
				</li>
				<li>
					<MdDoneAll />
					<p>Virtually connect with Zoom</p>
				</li>
				<li>
					<MdDoneAll />
					<p>For one hour or idk</p>
				</li>
			</ul>
		);

		const videoHover = (
			<ul>
				<li>
					<MdDoneAll />
					<p>Meet Online at your convenience</p>
				</li>
				<li>
					<MdDoneAll />
					<p>Virtually connect with Zoom</p>
				</li>
				<li>
					<MdDoneAll />
					<p>For one hour or idk</p>
				</li>
			</ul>
		);

		return (
			<header className={headerStyles.header}>
				<div className={headerStyles.header__grid}>
					<div className={headerStyles.text__box__left}>
						<h1>
							The Clerk of <br /> Oxford Company.
						</h1>
						<h2>English, Writing, Math, and SAT Prep.</h2>
						<h3>Willy Williams Tutoring</h3>
					</div>
					<div className={headerStyles.divider}>
						<span></span>
						<FaBookOpen />
						<span></span>
					</div>
					<div className={headerStyles.text__box__right}>
						{headerSvg}
						{headerWavSvg}
						<div className={headerStyles.button__container}>
							<button>Contact</button>
							<button>Resources</button>
						</div>
					</div>
				</div>
				<div className={headerStyles.services__grid}>
					<div
						className={headerStyles.item}
						onMouseOver={() => this.setState({ inperson: true })}
						onMouseLeave={() => this.setState({ inperson: false })}
					>
						{inPersonSvg}
						<h3>In Person Tutoring</h3>
						{this.state.inperson ? inPersonHover : null}
					</div>
					<div
						className={headerStyles.item}
						onMouseOver={() => this.setState({ virtual: true })}
						onMouseLeave={() => this.setState({ virtual: false })}
					>
						{virtualSvg}
						<h3>Virtual Tutoring</h3>
						{this.state.virtual ? virtualHover : null}
					</div>
					<div
						className={headerStyles.item}
						onMouseOver={() => this.setState({ video: true })}
						onMouseLeave={() => this.setState({ video: false })}
					>
						{videoSvg}
						<h3>Video Conference</h3>
						{this.state.video ? videoHover : null}
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
