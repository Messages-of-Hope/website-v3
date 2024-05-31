"use client";

import React, { useState, useEffect, Fragment } from "react";
import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ title, url, bslUrl, thumbnail, className }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [showBSL, setShowBSL] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  const handleBsl = () => {
    setShowBSL(!showBSL);
  };

  return (
    <section className={className}>
      <div className={styles.panel}>
      {showVideo &&
        <ReactPlayer
        width="100%"
        height="100%"
        url={showBSL ? bslUrl : url}
        controls={true}
        light={`${process.env.NEXT_PUBLIC_CLIENT_BACKEND_ADDR}/images/${thumbnail}`}
        pip={true}
        onClickPreview={() => setPlaying(true)}
        playing={playing}
      />}
      </div>
      {bslUrl &&
      <div className={styles.text}>
        <article>
          <label className={styles.switch}>
            <input onClick={handleBsl} className={styles.input} type="checkbox"/>
            <span className={styles.slider}></span>
          </label>
          <p className={`subheading ${styles.body}`}>BSL and Subtitles</p>
        </article>
      </div>}
    </section>
  );
};
export default VideoPlayer;