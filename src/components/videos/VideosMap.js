import React from 'react';
import { videos } from './videos';
import videoStyles from './videostyles/VideosMap.module.scss';

export const VideosMap = () => {
	const videoMap = videos.map((video, i) => {
		return (
			<div className={videoStyles.video__container}>
				<div className={videoStyles.slider__heading}>
					<h3>{video.category}</h3>
				</div>
				<div className={videoStyles.video__slider} key={i * Math.random() * 100}>
					{video.videos.map((video, i) => (
						<div className={videoStyles.video} key={i}>
							<video src={video.src} type="video/mp4" controls>
								Video Not Supported
							</video>
							<div className={videoStyles.caption}>
								<a href={video.url} target="_blank" rel="noopener noreferrer">
									{video.title}
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	});

	return <div className={videoStyles.container}>{videoMap}</div>;
};
