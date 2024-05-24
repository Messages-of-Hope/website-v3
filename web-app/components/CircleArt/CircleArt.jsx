"use client";

import React, { useState, useEffect } from "react";
import styles from "./CircleArt.module.css";

const CircleArt = ({ className }) => {
  const [randomClasses, setRandomClasses] = useState([
    styles.cls_1,
    styles.cls_2,
    styles.cls_3
  ]);

  useEffect(() => {
    const classes = [styles.cls_1, styles.cls_2, styles.cls_3];
    classes.sort(() => Math.random() - 0.5);
    setRandomClasses(classes);
  }, []);

  return (
    <svg className={`${className} ${styles.svg}`} id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 99">
      <g id="Layer_1-2" data-name="Layer 1">
        <circle className={randomClasses[1]} cx="67.5" cy="70.5" r="24.5"/>
        <circle className={`${randomClasses[0]} ${styles.ani}`} cx="105.5" cy="74.5" r="24.5"/>
        <circle className={randomClasses[2]} cx="78" cy="35" r="35"/>
        <path className={`${randomClasses[0]} ${styles.ani}`} d="M39,20c18.2,0,33,14.8,33,33s-14.8,33-33,33S6,71.2,6,53,20.8,20,39,20M39,14C17.46,14,0,31.46,0,53s17.46,39,39,39,39-17.46,39-39S60.54,14,39,14h0Z"/>
      </g>
    </svg>
  );
};
export default CircleArt;