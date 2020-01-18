import React, { useEffect } from 'react';
import Layout from '../layout';
import Header from '../header';
const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Layout>
			<Header />
		</Layout>
	);
};

export default Home;
