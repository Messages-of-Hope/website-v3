import React from "react";
import Image from "next/image";
import styles from "./ImagePanel.module.css";
import CircleArt from "@/components/CircleArt/CircleArt";

const ImagePanel = ({ image, altText, children, wide, blue, right }) => {
  return (
    <section className={`${styles.panel} ${wide ? styles.wide : ""} ${blue ? styles.blue : ""} ${right ? styles.right : ""}`}>
      <div className={styles.image}>
        <CircleArt className={styles.design_1}/>
        <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/${image}`} alt={altText} width={300} height={300}/>
        <CircleArt className={styles.design_2}/>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};
export default ImagePanel;