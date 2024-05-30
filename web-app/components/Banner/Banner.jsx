import React from "react";

import BottomBorder from "./BottomBorder";
import styles from "./Banner.module.css";

const Banner = ({ title, image, children, short, minimal }) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLIENT_BACKEND_ADDR}/images/${image}`;
  const backgroundImage = `linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 100%), url(${imageUrl})`;

  return (
    <section className={`${styles.banner} ${short ? styles.short : ""} ${minimal ? styles.minimal : ""}`} style={{ backgroundImage: backgroundImage, backgroundColor: "var(--deep-ocean-blue)" }}>
      <div className={styles.inner_container}>
        {children}
        {title && <h1 className={styles.title}>{title}</h1>}
      </div>
      <BottomBorder/>
    </section>
  );
};
export default Banner;