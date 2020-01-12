import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout';
import ServicesHeader from '../services/ServicesHeader';
const Services = props => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Layout>
			<ServicesHeader />
		</Layout>
	);
};

Services.propTypes = {};

export default Services;
