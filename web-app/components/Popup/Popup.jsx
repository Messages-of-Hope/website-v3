import React, { Fragment } from "react";
import styles from "./Popup.module.css";

const Popup = ({ closePopup, title, message, buttonText }) => {
  return (
    <Fragment>
      <div className={styles.overlay} onClick={closePopup} />
      <div className={styles.popup}>
        <h3>{title}</h3>
        <p>{message}</p>
        <button className={styles.button} onClick={closePopup}>{buttonText}</button>
      </div>
    </Fragment>
  );
};
export default Popup;