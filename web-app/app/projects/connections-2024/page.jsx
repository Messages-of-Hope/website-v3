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
  title: "Connections 2024",
  description: "Connections 2024 is a poignant short film created by Messages of Hope, delving into the transformative power of connection amidst mental health struggles. Through capturing the heartfelt messages penned by Londoners, the film illuminates the profound sense of empathy and solidarity within our communities."
}

const Connections2024 = () => {
  return (
    <main className={styles.main}>
      <Banner image="eT3lf4bF2M" short title="Connections 2024" />

      <div className={styles.blue_grid}>
        <div className={styles.padding_1}/>
        <section className={styles.panel}>
          <h3>What is Connections 2024?</h3>
          <p>Connections 2024 is a poignant short film created by Messages of Hope, delving into the transformative power of connection amidst mental health struggles. Through capturing the heartfelt messages penned by Londoners, the film illuminates the profound sense of empathy and solidarity within our communities. Each message serves as a beacon of hope, affirming that even in the darkest moments, there are individuals who genuinely care.</p>
          <p>Our aspiration with Connections 2024 is to ignite a ripple effect of compassion and support, encouraging viewers to extend a hand of empathy to those in need and remind them that they are never alone in their journey towards healing.</p>
        </section>
        <div className={styles.padding_2}/>
      </div>
      
      <div className={styles.yellow_grid}>
        <div className={styles.padding_1}/>
        <section className={styles.panel}>
          <h3>Who was involved?</h3> 
          <p>Connections 2024 is made possible through the generous funding from The Mayor of London, reflecting a commitment to fostering mental well-being and community resilience. Collaborating closely with Thrive LDN and Speakers Collective, Messages of Hope orchestrated the creation of this film, uniting diverse voices and talents in a collective effort to spread messages of hope and support.</p>
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