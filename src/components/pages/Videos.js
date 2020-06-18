import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import VideosHeader from '../videos/VideosHeader';
import { VideosMap } from '../videos/VideosMap';
const Videos = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Layout>
			<VideosHeader />
			<VideosMap />
		</Layout>
	);
};

export default Videos;
