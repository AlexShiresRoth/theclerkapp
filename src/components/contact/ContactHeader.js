import React, { useEffect } from 'react';
import contactStyles from './contactstyles/ContactHeader.module.scss';
const ContactHeader = (props) => {
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
					<p>Need a tutor?</p>
				</div>
			</div>
		</header>
	);
};

export default ContactHeader;
