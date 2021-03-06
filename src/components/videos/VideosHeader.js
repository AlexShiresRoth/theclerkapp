import React from 'react';
import videoStyles from './videostyles/VideosHeader.module.scss';
const VideosHeader = (props) => {
	return (
		<header className={videoStyles.header}>
			<div className={videoStyles.videos__container}>
				<div className={videoStyles.title__container}>
					<h1>Videos</h1>
					<p>Practice your skills, or learn something new with a video tutorial.</p>
				</div>
			</div>
		</header>
	);
};

export default VideosHeader;
