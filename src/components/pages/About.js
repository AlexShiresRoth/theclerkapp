import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout';
import AboutHeader from '../about/AboutHeader';
const About = props => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	console.log(props);
	return (
		<Layout>
			<AboutHeader />
		</Layout>
	);
};

About.propTypes = {};

export default About;
