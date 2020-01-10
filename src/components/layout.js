import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Footer from './footer';
const layout = ({ children }) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	);
};

layout.propTypes = {};

export default layout;
