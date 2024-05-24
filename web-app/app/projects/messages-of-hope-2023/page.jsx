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

const MessagesOfHope2023 = () => {
  return (
    <main className={styles.main}>
      <Banner image="V4ssJV22Mv" short title="Messages of Hope 2023" />
    
      <section className={styles.panel}>
        <div className={styles.images}>
          <Image className={styles.blue} src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/9ntrQUf34S`} alt="A group of people writing messages of hope on canvases at Barry Island" width={800} height={800} />
          <Image className={styles.yellow} src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/Ut7HH9AXP4`} alt="Painted rocks with messages written on them" width={800} height={800} />
        </div>
        <div className={styles.text}>
          <p>On the 29th July 2023 Messages of Hope hosted a collaborative art project at Barry Island. The event was a huge success. We collected over 200 messages and had too many inspiring and empowering conversations to count. Both adults and children left their mark in the form of hopeful messages on our pre-prepared canvases.</p>
          <p>In addition to writing on canvases, members of the public were able to write messages of hope on pebbles and take a mindful break at our colouring station.</p>
          <p>We are so grateful for everyone that supported this campaign and we are excited to share all of your messages.</p>
          <p>Spot the finsihed canvases at the Barry YMCA in The Vale of Glamorgan.</p>
        </div>
      </section>

      <Image className={styles.image_panel} src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/64iJ879h4k`} alt="Bethan Evans standing in front of the full canvases at the Barry YMCA" width={2000} height={2000} />
    
      <MessagePanel className={styles.message_panel} />
    </main>
  );
};
export default MessagesOfHope2023;