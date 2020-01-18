import React from 'react';
import { videos } from './videos';
import videoStyles from './videostyles/VideosMap.module.scss';

export const VideosMap = () => {
	const videoMap = videos.map((video, i) => {
		return (
			<div className={videoStyles.video__slider} key={i * Math.random() * 100}>
				<div className={videoStyles.slider__heading}>
					<h3>{video.category}</h3>
				</div>
				<div className={videoStyles.slider__container}>
					{video.videos.map((video, i) => (
						<div className={videoStyles.video} key={i}>
							{video}
						</div>
					))}
				</div>
			</div>
		);
	});

	return <div className={videoStyles.container}>{videoMap}</div>;
};
