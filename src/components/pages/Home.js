import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout';
import Header from '../header';
const Home = props => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Layout>
			<Header />
		</Layout>
	);
};

Home.propTypes = {};

export default Home;
