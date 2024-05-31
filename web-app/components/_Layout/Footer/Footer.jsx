"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import Button from "@/components/Button/Button";
import FooterTop from "./FooterTop";

import styles from "./Footer.module.css";


const Footer = () => {
  const [project, setProject] = useState("/projects");

  /**
   * Fetch the latest project from the backend when component loads.
   */
  useEffect(() => {
    const getProject = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_BACKEND_ADDR}/projects`);
        const data = await response.json();
        setProject(data.projects[0].url);
      } catch (err) { }
    }
    getProject();
  }, []);

  return (
    <footer className={styles.footer}>
      <FooterTop/>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>Messages of Hope (MOH) C.I.C</p>
          <p>Company Number 15299854</p>
          <p>contact@messagesofhope.co.uk</p>
        </div>
    
        <div className={styles.mobile}>
          <a href="/privacy-policy" target="_blank">privacy policy</a>
          <p>© 2024 Messages of Hope</p>
        </div>

        <div className={styles.buttons}>
          <Button colour="blue" link="/write-a-message" text="Write a Message"/>
          <Button colour="yellow" link={project} text="Our Latest Project"/> 
        </div>
      </div>

      <div className={styles.socials}>
        <a className={styles.desktop} href="/privacy-policy" target="_blank">privacy policy</a>

        <div className={styles.social_icons}>
          <a className={styles.social} href="mailto:contact@messagesofhope.co.uk" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          </a>
          <a className={styles.social} href="https://www.instagram.com/messagesof.hope/" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          </a>
          <a className={styles.social} href="https://www.facebook.com/people/Messages-of-Hope/100087952429971/" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={faFacebookF} />
          </a>
        </div>

        <p className={styles.desktop}>© 2024 Messages of Hope</p>
      </div>
    </footer>
  );
};
export default Footer;
