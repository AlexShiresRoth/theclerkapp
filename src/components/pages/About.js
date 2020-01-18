import React, { useEffect } from 'react';
import Layout from '../layout';
import AboutHeader from '../about/AboutHeader';
const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Layout>
			<AboutHeader />
		</Layout>
	);
};

export default About;
