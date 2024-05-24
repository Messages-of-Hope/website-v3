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

const About = () => {
  return (
    <main className={styles.main}>
      <Banner image="V4ssJV22Mv" short title="About Messages of Hope" />

      <ImagePanel wide image="zhdPwKuWQJ" altText="Two young people holding a whiteboard that says 'You're loved'">
        <h3>About Messages of Hope</h3>
        <p>Messages of Hope is a Community Interest Company that encourages people  to write messages of hope to individuals struggling with their mental  health. We turn your messages into stickers and Instagram posts and  spread them across the UK.</p>
        <p>You will often find us out, working in the community, asking strangers  to write messages of hope. Whether we are creating a collaborative art  piece or a short film, our purpose remains the same; to spread hope and  collect your messages of hope to inspire those struggling with their  mental health.</p>
        <Button className={styles.button} colour="blue" link="/write-a-message" text="Write a Message" />
      </ImagePanel>

      <ImagePanel wide blue right image="zhdPwKuWQJ" altText="Two young people holding a whiteboard that says 'You're loved'">
        <h3>What We Do</h3>
        <p>As a community organisation, Messages of Hope plays an active role in  trying to improve the mental health and well-being of individuals  throughout England and Wales, as well as working to support patients as  they arrive in hospital for a psychiatric related admission.</p>
        <p>We organise and run a variety of projects throughout the year and we always aim to connect communities through creativity.</p>
        <p>Check out our projects page to learn more about the work Messages of Hope does.</p>
        <Button className={styles.button} colour="yellow" link="/projects" text="All Our Projects" />
      </ImagePanel>

      <MessagePanel />
    </main>
  );
};
export default About;