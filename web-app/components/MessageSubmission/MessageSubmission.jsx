"use client";

import React, { useEffect, useRef, useState, Fragment } from "react";
import styles from "./MessageSubmission.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Popup from "@/components/MessageSubmission/Popup/Popup";

const MessageSubmission = () => {
  const [status, setStatus] = useState(null);
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const send = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_BACKEND_ADDR}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: messageRef.current.value
        })
      });
      return response;
    }
    const response = await send();
    if (response.status === 200) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === null || status === "error") return;

    messageRef.current.value = "";
  }, [status]);

  const closePopup = () => {
    setStatus(null);
  }

  return (
    <Fragment>
      {
        status === "success" ? (
          <Popup title="Message Sent" buttonText="Close" message="Thank you for your message. Be sure to keep an eye on our Instagram for your message in a post." closePopup={closePopup}/>
        ) : status === "error" ? (
          <Popup title="Oops!" buttonText="Close" message="Unfortunately it failed to send the message. Try again later or message us your message on Instagram." closePopup={closePopup}/>
        ) : null
      }
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea ref={messageRef} className={styles.textarea} placeholder="Write your message here..." rows="10" required/>
        <button className={styles.button} type="submit">
          Submit
          <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
        </button>
      </form>
    </Fragment>
  );
};
export default MessageSubmission;