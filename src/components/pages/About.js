import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout';
import AboutHeader from '../about/AboutHeader';
const About = props => {
	return (
		<Layout>
			<AboutHeader />
		</Layout>
	);
};

About.propTypes = {};

export default About;
