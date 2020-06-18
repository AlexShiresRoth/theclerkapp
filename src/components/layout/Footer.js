import React from 'react';
import PropTypes from 'prop-types';
import footerStyles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { MdEmail, MdPhone } from 'react-icons/md';
const footer = () => {
	return (
		<footer>
			<div className={footerStyles.footer}>
				<div className={footerStyles.column}>
					<h3>Contact</h3>
					<span>
						<MdEmail />
						<a href="mailto:theclerkofoxfordcompany@gmail.com"> theclerkofoxfordcompany@gmail.com</a>
					</span>
					<span>
						<MdPhone /> <a href="tel:631-335-2654">(631)-335-2654</a>
					</span>
				</div>
				<div className={footerStyles.column}>
					<h3>Site</h3>
					<Link to="/videos">Videos</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/services">Services</Link>
					<Link to="/resources">Resources</Link>
				</div>
				<div className={footerStyles.column}>
					<p>The Clerk of Oxford Company ©2020</p>
					<p>
						Website Design & Development by <a href="https://fillthevoid.io">fillthevoid.io</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

footer.propTypes = {
	siteTitle: PropTypes.string.isRequired,
};

export default footer;
