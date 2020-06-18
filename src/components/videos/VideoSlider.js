import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import VideoItem from './VideoItem';
import PropTypes from 'prop-types';
import style from './videostyles/VideosMap.module.scss';

const VideoSlider = ({ video, i, arr }) => {
	const [isScrolling, setScrolling] = useState(false);
	const [direction, setDirection] = useState('');

	let animationRef = useRef();

	let sliderRef = useRef();

	useEffect(() => {
		const handleScrolling = () => {
			if (direction === 'right') {
				sliderRef.current.scrollLeft = sliderRef.current.scrollLeft += 20;
			}
			if (direction === 'left') {
				sliderRef.current.scrollLeft = sliderRef.current.scrollLeft -= 20;
			}
			animationRef.current = requestAnimationFrame(handleScrolling);
		};

		if (isScrolling) {
			handleScrolling();
		}

		if (!isScrolling) {
			cancelAnimationFrame(animationRef.current);
		}
	}, [isScrolling, direction]);

	return (
		<div className={style.video__container}>
			<div className={style.slider__heading}>
				<h3>{video.category}</h3>
			</div>
			<div className={`${style.video__slider} slider`} key={i} ref={sliderRef}>
				{video.videos.map((video, i) => (
					<VideoItem video={video} i={i} />
				))}
			</div>
			<div className={style.slider__controls}>
				<button
					onMouseDown={(e) => {
						setScrolling(true);
						setDirection('left');
					}}
					onMouseUp={() => setScrolling(false)}
					onTouchStart={(e) => {
						setScrolling(true);
						setDirection('left');
					}}
					onTouchEnd={(e) => setScrolling(false)}
					className="left"
				>
					<FiChevronLeft />
				</button>
				<p>Video Count: {arr[i].videos.length}</p>
				<button
					onMouseDown={(e) => {
						setScrolling(true);
						setDirection('right');
					}}
					onMouseUp={() => setScrolling(false)}
					onTouchStart={(e) => {
						setScrolling(true);
						setDirection('right');
					}}
					onTouchEnd={(e) => setScrolling(false)}
					className="right"
				>
					<FiChevronRight />
				</button>
			</div>
		</div>
	);
};

VideoSlider.propTypes = {
	video: PropTypes.object.isRequired,
	i: PropTypes.number.isRequired,
	arr: PropTypes.array.isRequired,
};

export default VideoSlider;
