import React from 'react';
import '../stylesheets/style.css';
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
