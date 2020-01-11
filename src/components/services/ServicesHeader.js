import React from 'react';
import ServicesMap from './ServicesMap';
import servicesStyles from './servicesstyles/ServicesHeader.module.scss';
const ServicesHeader = () => {
	return (
		<header className={servicesStyles.header}>
			<div className={servicesStyles.title__container}>
				<h1>Services</h1>
				<p>The Clerk of Oxford Company offers a range of SAT preparation categories, from writing to math.</p>
			</div>
			<ServicesMap />
		</header>
	);
};

export default ServicesHeader;
