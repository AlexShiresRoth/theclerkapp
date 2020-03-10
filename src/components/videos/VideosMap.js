import React from "react";
import { videos } from "./videos";
import videoStyles from "./videostyles/VideosMap.module.scss";

export const VideosMap = () => {
  const videoMap = videos.map((video, i) => {
    return (
      <div className={videoStyles.video__container}>
        <div className={videoStyles.slider__heading}>
          <h3>{video.category}</h3>
        </div>
        <div
          className={videoStyles.video__slider}
          key={i * Math.random() * 100}
        >
          {video.videos.map((video, i) => (
            <div className={videoStyles.video} key={i}>
              {video}
            </div>
          ))}
          <iframe
            src="https://www.showme.com/sma/embed/?s=WyBexPM"
            width="578"
            height="433"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    );
  });

  return <div className={videoStyles.container}>{videoMap}</div>;
};
