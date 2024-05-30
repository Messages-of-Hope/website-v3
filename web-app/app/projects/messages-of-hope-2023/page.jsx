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

export const metadata = {
  title: "Messages of Hope 2023",
  description: "The Messages of Hope 2023 event at Barry Island was centred around a transformative collaborative art project that saw over 200 heartfelt messages collected and countless inspiring and empowering conversations shared."
}

const MessagesOfHope2023 = () => {
  return (
    <main className={styles.main}>
      <Banner image="591zjjboIe" short title="Messages of Hope 2023" />
    
      <section className={styles.panel}>
        <div className={styles.images}>
          <Image className={styles.blue} src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/9ntrQUf34S`} alt="A group of people writing messages of hope on canvases at Barry Island" width={800} height={800} />
          <Image className={styles.yellow} src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/Ut7HH9AXP4`} alt="Painted rocks with messages written on them" width={800} height={800} />
        </div>
        <div className={styles.text}>
          <p>On the 29th of July 2023, Messages of Hope hosted a transformative collaborative art project at Barry Island, which turned out to be a resounding success. The event saw an overwhelming outpouring of support, with over 200 heartfelt messages collected and countless inspiring and empowering conversations shared. People of all ages, from children to adults, left their marks on pre-prepared canvases, filling them with messages of hope and encouragement.</p>
          <p>Beyond the canvases, attendees had the opportunity to write their messages on pebbles, adding a unique touch to the project. A dedicated colouring station provided a space for mindfulness and creativity, allowing participants to take a peaceful break and express their hopes through art.</p>
          <p>We are immensely grateful to everyone who supported and participated in this campaign. Your contributions have created a tapestry of hope that we are excited to share with the broader community. You can view the finished canvases at the Barry YMCA in The Vale of Glamorgan, a testament to the collective spirit of hope and resilience.</p>
        </div>
      </section>

      <Image className={styles.image_panel} src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/64iJ879h4k`} alt="Bethan Evans standing in front of the full canvases at the Barry YMCA" width={2000} height={2000} />
    
      <MessagePanel className={styles.message_panel} />
    </main>
  );
};
export default MessagesOfHope2023;