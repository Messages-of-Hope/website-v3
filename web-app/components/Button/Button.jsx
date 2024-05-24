import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Button.module.css";

const Button = ({ id, className, link, text, colour }) => {
  const classes = `${styles.button} ${className} ${colour ? styles[colour] : ""}`;

  return (
    <Link id={id} className={classes} href={link}>
      {text}
      <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
    </Link>
  );
};
export default Button;