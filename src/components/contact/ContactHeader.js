import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import contactStyles from './contactstyles/ContactHeader.module.scss';
const ContactHeader = props => {
	useEffect(() => {
		window.scrollTo({
			top: '0',
		});
	}, []);
	return (
		<header className={contactStyles.header}>
			<div className={contactStyles.contact__container}>
				<div className={contactStyles.title__container}>
					<h1>Contact</h1>
					<p>Let's get in touch.</p>
				</div>
			</div>
		</header>
	);
};

ContactHeader.propTypes = {};

export default ContactHeader;
