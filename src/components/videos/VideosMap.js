import React from 'react';
import { videos } from './videos';
import videoStyles from './videostyles/VideosMap.module.scss';
import VideoSlider from './VideoSlider';

export const VideosMap = () => {
	const videoMap = videos.map((video, i, arr) => {
		return <VideoSlider video={video} i={i} arr={arr} key={i} />;
	});

	return <div className={videoStyles.container}>{videoMap}</div>;
};
