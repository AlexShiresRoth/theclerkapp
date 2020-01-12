import React from 'react';
import ServicesController from './ServicesController';
import servicesStyles from './servicesstyles/ServicesHeader.module.scss';
const ServicesHeader = () => {
	return (
		<header className={servicesStyles.header}>
			<div className={servicesStyles.title__container}>
				<h1>Services</h1>
				<p>The Clerk of Oxford Company offers a range of SAT preparation categories, from writing to math.</p>
			</div>
			<ServicesController />
		</header>
	);
};

export default ServicesHeader;
