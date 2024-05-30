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
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import ColouringPagesPanel from "@/components/ColouringPagesPanel/ColouringPagesPanel";

export const metadata = {
  title: "Colouring Pages",
  description: "Messages of Hope provides free colouring pages to help spread hope and positivity. Download and print our colouring pages to share your creativity with us."
}

const ColouringPages = () => {
  return (
    <main>
      <Banner image="V4ssJV22Mv" short title="Colouring Pages" />

      <section className={styles.intro}>
        <p>Messages of Hope is proud to announce the release of our very own colouring book. This colouring book is a beautiful compilation of some of the message of hope submissions we have received via our website and social media pages. Since the origin of Messages of Hope we have received over 1500 messages of hope from strangers who are looking to give hope and provide support to other struggling individuals.</p>
        <p>We understand that we are living in very challenges times, therefore, if you are unable to purchase the Messages of Hope colouring book, feel free to download and print out our free colouring pages. Please share with us your completed colouring pages on social media.</p>
        <Button className={styles.button} colour="blue" link="/support-us" text="Colouring Book"/>
      </section>

      <ColouringPagesPanel />
    </main>
  );
};
export default ColouringPages;