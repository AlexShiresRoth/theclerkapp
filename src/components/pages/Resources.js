import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import ResourcesHeader from '../resources/ResourcesHeader';
const Resources = (props) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, []);
	return (
		<Layout>
			<ResourcesHeader />
		</Layout>
	);
};

export default Resources;
