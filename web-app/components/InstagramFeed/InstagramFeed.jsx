"use client";

import React, { useEffect } from "react";
import styles from "./InstagramFeed.module.css";

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.curator.io/published/9a69af8c-ed7a-44e5-b64e-7b93b3e13e2e.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className={styles.panel} id="curator-feed-default-feed-layout">
      <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a>
    </div>
  );
};
export default InstagramFeed;