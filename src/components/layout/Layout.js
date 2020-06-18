import React from 'react';
import '../../stylesheets/style.css';
import Nav from './Nav';
import Footer from './Footer';
const layout = ({ children }) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default layout;
