"use client";

import React, { useEffect, useRef, useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./ContactForm.module.css";
import Popup from "@/components/Popup/Popup";

const ContactForm = ({ title, text }) => {
  const [status, setStatus] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const organisationRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const sendEmail = async (event) => {
    event.preventDefault();
    const send = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ADDR}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          organisation: organisationRef.current.value,
          subject: subjectRef.current.value,
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

    nameRef.current.value = "";
    emailRef.current.value = "";
    organisationRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  }, [status]);

  const closePopup = () => {
    setStatus(null);
  }

  return (
    <Fragment>
      {
        status === "success" ? (
          <Popup title="Speak Soon!" buttonText="Close" message="Your message has been sent successfully." closePopup={closePopup} />
        ) : status === "error" ? (
          <Popup title="Oops!" buttonText="Close" message="An error occurred while sending your message. Please try again later." closePopup={closePopup} />
        ) : null
      }
      <section className={styles.contact_panel}>
        <div className={styles.inner_container}>
          <h3>{title}</h3>
          <p>{text}</p>
          <form className={styles.contact_form} onSubmit={sendEmail}>
            <div className={styles.contact_form_content}>
              <div className={styles.inputs}>
                <input ref={nameRef} name="name" type="text" placeholder="Name*" required autoComplete="on"/>
                <input ref={emailRef} name="email" type="email" placeholder="Email*" required autoComplete="on"/>
                <input ref={organisationRef} name="organisation" type="text" placeholder="Business/Organisation"/>
                <input ref={subjectRef} name="subject" type="text" placeholder="Subject*" required/>
              </div>
              <textarea ref={messageRef} name="message" placeholder="Message..." required rows="10" />
            </div>
            <button className={styles.contact_button} type="submit">
              Send Message
              <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};
export default ContactForm;