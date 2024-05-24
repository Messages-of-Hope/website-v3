import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx";
import Banner from "@/components/Banner/Banner.jsx";
import Button from "@/components/Button/Button.jsx";
import styles from "./style.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";
import ImagePanel from "@/components/ImagePanel/ImagePanel";
import MessagePanel from "@/components/MessagePanel/MessagePanel";
import Accordion from "@/components/Accordion/Accordion";

const SupportUs = () => {
  return (
    <main className={styles.main}>
      <Banner image="V4ssJV22Mv" short title="Support Us" />

      <section className={styles.panel}>
        <div>
          <p>If you like what we do and who we are and want to help, there are many ways you could help us out. By donating to Messages of Hope you would be helping us to continue our work in spreading mental health awareness and giving hope to those who need it.</p>
          <Button className={styles.button} colour="blue" link="/" text="Donate Directly"/>
        </div>
        <div>
          <p>Alternatively we have a JustGiving page which takes donations that will only go towards the Bags of Hope project.</p>
          <Button className={styles.button} colour="blue" link="/" text="JustGiving"/>
        </div>
        <div>
          <p>If you don't feel comfortable with a donation of money, we have setup and Amazon wishlist so that we can fill the bags used in the Bags of Hope campaign.</p>
          <Button className={styles.button} colour="blue" link="/" text="Amazon Wishlist"/>
        </div>
        <div>
          <p>If you don't feel comfortable with a donation of money, we have setup and Amazon wishlist so that we can fill the bags used in the Bags of Hope campaign.</p>
          <Button className={styles.button} colour="blue" link="/" text="Our Book"/>
        </div>
        <p className={styles.closing_text}>Anything you can give would be greatly appreciated, and we would just like to say thank you in advance.</p>
      </section>

      <ContactForm title="Get in touch" text="We’re a small team and we’re always looking to make connections with teams, organisations and individuals. Use the form below to send us a message and we’ll be in touch." />
    </main>
  );
};
export default SupportUs;