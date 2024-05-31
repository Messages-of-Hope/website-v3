"use client";

import React, { useState, Fragment } from "react";
import styles from "./Accordion.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, data }) => {
  const [current, setCurrent] = useState(0);

  return (
    <Fragment>

      <section className={styles.v_display}>
        <h3 className={styles.title}>{title}</h3>
        {data.map((item, index) => {
          return (
            <article key={index} className={styles.item}>
              <h6 className={styles.heading}>{item.title}</h6>
              <p>{item.description[0]}</p>
            </article>
          );
        })}
      </section>

      {/* Horizontal Accordion */}
      <section className={styles.container}>
        <div className={`${styles.left_panel} ${current % 2 == 1 ? styles.even : ""}`} />

        <div className={styles.h_accordion}>
            {data.map((item, index) => {
              return (
                <article key={index} className={`${styles.item} ${current == index ? styles.open : ""}`} onClick={() => {setCurrent(index)}}>
                  <h6 className={styles.sidebar}>
                    {item.title}
                    <FontAwesomeIcon icon={faPlus} className={styles.icon}/>
                  </h6>

                  <div className={styles.content}>
                    <div className={styles.text}>
                      <h3 className={styles.title}>{title}</h3>
                      <h5 className={styles.heading}>{item.title}</h5>
                      <p>{item.description[0]}</p>
                      <p>{item.description[1]}</p>
                    </div>
                    <Image src={`${process.env.NEXT_PUBLIC_SERVER_BACKEND_ADDR}/images/${item.image}`} alt={item.altText} width={900} height={900}/>
                  </div>
                </article>
              );
            })}
        </div>

        <div className={`${styles.right_panel} ${current % 2 == 1 ? styles.even : ""}`} />
      </section>
    </Fragment>
  );
};
export default Accordion;