import React from "react";

import styles from "./BottomBorder.module.css";


const BottomBorder = () => {
  return (
    <svg className={styles.border} data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 16" preserveAspectRatio="none">
      <g data-name="Layer 1">
        <rect className={styles.lightBlue}/>
        <path className={styles.darkBlue} d="M266,0h908c8.83,0,16,7.17,16,16H250c0-8.83,7.17-16,16-16Z"/>
        <path className={styles.yellow} d="M437,0h566c8.83,0,16,7.17,16,16H421c0-8.83,7.17-16,16-16Z"/>
      </g>
    </svg>
  );
};
export default BottomBorder;