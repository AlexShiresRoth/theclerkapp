import React from 'react';
import PropTypes from 'prop-types';
import { FiExternalLink } from 'react-icons/fi';
import style from './VideoItem.module.scss';

const VideoItem = ({ video, i }) => {
	return (
		<div className={style.video} key={i}>
			<video controls>
				<source src={video.src} type="video/mp4" />
				Video Not Supported
			</video>
			<div className={style.caption}>
				<div className={style.col}>
					<span>Video #{i + 1}</span>
				</div>
				<div className={style.col}>
					<p>{video.title}</p>
				</div>
				<div className={style.col}>
					<a href={video.url} target="_blank" rel="noopener noreferrer">
						<button>
							View on showme.com <FiExternalLink />
						</button>
						<br />
					</a>
				</div>
			</div>
		</div>
	);
};

VideoItem.propTypes = {
	video: PropTypes.object.isRequired,
	i: PropTypes.number.isRequired,
};

export default VideoItem;
