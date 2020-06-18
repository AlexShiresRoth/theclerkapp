import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Header from '../landing/Header';
import ServicesSection from '../landing/ServicesSection';
import AboutSection from '../landing/AboutSection';
const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Layout>
			<Header />
			<ServicesSection />
			<AboutSection />
		</Layout>
	);
};

export default Home;
