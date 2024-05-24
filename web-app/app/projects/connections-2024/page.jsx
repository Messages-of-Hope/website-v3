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

const Connections2024 = () => {
  return (
    <main className={styles.main}>
      <Banner image="V4ssJV22Mv" short title="Connections 2024" />

      <div className={styles.blue_grid}>
        <div className={styles.padding_1}/>
        <section className={styles.panel}>
          <h3>What is Connections 2024?</h3>
          <p>Connections is a short film created by Messages of Hope that explores how we can find hope through connection.</p>
          <p>We set out to capture Londoners writing messages of hope for people struggling with their mental health and we discovered just how connected we truly are.</p>
          <p>Connections is proof that somebody out there really does care about you.</p>
          <p>We hope that this film will inspire you to reach out to someone you care about and remind them that they are not alone.</p>
        </section>
        <div className={styles.padding_2}/>
      </div>
      
      <div className={styles.yellow_grid}>
        <div className={styles.padding_1}/>
        <section className={styles.panel}>
          <h3>Who was involved?</h3>
          <p>Connections is funded by The Mayor of London and we worked with Thrive LDN and Speakers Collective to make it happen.</p>
          <p>People from all over London were involved in writing messages of hope for Connections and we also worked with several dancers, including the incredible Speaker Box Street Party.</p>
        </section>
        <div className={styles.padding_2}/>
      </div>

      <section className={styles.video_panel}>
        <VideoPlayer 
          title="Connections 2024" 
          url="https://www.youtube.com/watch?app=desktop&si=EWa9X-xExixMpenj&v=dFJHklUGYTU&feature=youtu.be&ab_channel=ThriveLDN"
          bslUrl="https://www.youtube.com/watch?v=ccomKjHDgp0&ab_channel=ThriveLDN"
          thumbnail="dRYXgZvZNR"
          className={styles.video}
          />
        <VideoPlayer
          title="The Making of Connections 2024"
          url="https://www.youtube.com/watch?v=X8Cu-JvoXSc&ab_channel=ThriveLDN"
          bslUrl="https://www.youtube.com/watch?v=BAAUs5BfuKs&ab_channel=ThriveLDN"
          thumbnail="honOyOXGym"
          className={styles.video}
          />
      </section>

      <MessagePanel className={styles.message_panel} />
    </main>
  );
};
export default Connections2024;