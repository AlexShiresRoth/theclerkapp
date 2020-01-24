import React from 'react';
import PropTypes from 'prop-types';
import footerStyles from './footerstyles/footer.module.scss';
const footer = () => {
	return (
		<footer>
			<div className={footerStyles.footer}>
				<div className={footerStyles.column}>
					<h3>Contact</h3>
					<span>
						Email:
						<a href="mailto:theclerkofoxfordcompany@gmail.com"> theclerkofoxfordcompany@gmail.com</a>
					</span>
					<span>
						Phone: <a href="tel:631-335-2654">(631)-335-2654</a>
					</span>
				</div>
				<div className={footerStyles.column}>
					<p>©The Clerk of Oxford Company</p>
					<p>Powered by AlexRoth productions</p>
				</div>
			</div>
		</footer>
	);
};

footer.propTypes = {
	siteTitle: PropTypes.string.isRequired,
};

export default footer;
