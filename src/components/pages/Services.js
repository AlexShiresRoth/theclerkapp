import React, { useEffect } from 'react';
import Layout from '../layout';
import ServicesHeader from '../services/ServicesHeader';
const Services = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Layout>
			<ServicesHeader />
		</Layout>
	);
};

export default Services;
