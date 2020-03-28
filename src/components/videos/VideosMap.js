import React, { useState, useEffect, useRef } from "react";
import { videos } from "./videos";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import videoStyles from "./videostyles/VideosMap.module.scss";

export const VideosMap = () => {
  const [sliderNum, setSliderNum] = useState(0);
  const [isScrolling, setScrolling] = useState(false);

  let animationRef = useRef();

  let sliderRefs = useRef([]);

  const handleScrollingRight = () => {
    setScrolling(true);
    if (isScrolling) {
      sliderRefs.current[sliderNum].scrollLeft = sliderRefs.current[
        sliderNum
      ].scrollLeft += 20;

      animationRef.current = requestAnimationFrame(handleScrollingRight);
    }
  };
  const handleScrollingLeft = e => {
    setScrolling(true);
    if (isScrolling) {
      sliderRefs.current[sliderNum].scrollLeft = sliderRefs.current[
        sliderNum
      ].scrollLeft -= 20;
    }

    animationRef.current = requestAnimationFrame(handleScrollingLeft);
  };
  const handleMouseUp = e => {
    cancelAnimationFrame(animationRef.current);
  };

  useEffect(() => {
    cancelAnimationFrame(animationRef.current);
  }, []);

  const videoMap = videos.map((video, i, arr) => {
    return (
      <div
        className={videoStyles.video__container}
        onMouseEnter={e => setSliderNum(i)}
      >
        <div className={videoStyles.slider__heading}>
          <h3>{video.category}</h3>
        </div>
        <div
          className={`${videoStyles.video__slider} slider`}
          key={i * Math.random() * 100}
          ref={ref => sliderRefs.current.push(ref)}
        >
          {video.videos.map((video, i) => (
            <div className={videoStyles.video} key={i}>
              <video src={video.src} type="video/mp4" controls>
                Video Not Supported
              </video>
              <div className={videoStyles.caption}>
                <div className={videoStyles.col}>
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <span>
                      View on showme.com <FiExternalLink />
                    </span>
                    <br />
                    {video.title}
                  </a>
                </div>
                <div className={videoStyles.col}>
                  <span>Video #{i + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={videoStyles.slider__controls}>
          <button
            onMouseDown={e => handleScrollingLeft()}
            onMouseUp={() => handleMouseUp()}
            onTouchStart={e => handleScrollingLeft()}
            onTouchEnd={e => handleMouseUp()}
          >
            <FiChevronLeft />
          </button>
          <p>Video Count: {arr[i].videos.length}</p>
          <button
            onMouseDown={e => handleScrollingRight()}
            onMouseUp={() => handleMouseUp()}
            onTouchStart={e => handleScrollingRight()}
            onTouchEnd={e => handleMouseUp()}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    );
  });

  return <div className={videoStyles.container}>{videoMap}</div>;
};
