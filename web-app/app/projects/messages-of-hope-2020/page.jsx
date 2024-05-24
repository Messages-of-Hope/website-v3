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

const MessagesOfHope2020 = () => {
  return (
    <main className={styles.main}>
      <Banner image="V4ssJV22Mv" short title="Messages of Hope 2020" />
    
      <ImagePanel wide right image="AA6lgpnyoV" altText="Two young people holding a whiteboard that says 'You're loved'">
        <p>2020 was the year in which Messages of Hope was created. I was twenty years old and had been struggling with my mental health for a long time. I was extremely passionate about mental health advocacy and desperately wanted to think of a way to give hope to others. At this point in my mental health journey, I had not yet been diagnosed with Borderline Personality Disorder but the symptoms of this illness were beginning to seep into my life.</p>
        <p>I had just moved home to South Wales after dropping out of my second year of university because my mental health was severly impacting my studies, when the idea of Messages of Hope came to me.</p>
        <p>In 2020 I collected 200 messages in a week. I displayed all of these messages on a mural that I created in my kitchen, recorded a video of the me creating the mural and tried to share as many of the messages as I could.</p>
        <p>I was determined to show everyone that was struggling how many strangers cared about them. I needed people to know that so many people cared about them.</p>
        <p>Reading all of the message submissions, it was truly incredible and inspiring. People had written about their circumstances and struggles, they provided signposting information, and they wrote their favourite quotes, books, films and TV shows that have helped them through difficult times, practical advice, and words of support, love, and wisdom.</p>
        <p>It was becoming clear that not only was this campaign giving hope to people who needed it most, but it was also giving a voice to people who just wanted to be heard.</p>
        <p>In addition to all of the messages that were collected, I also gave everyone an opportunity to submit a video of themselves, which would allow them to be featured in the campaign video.</p>
      </ImagePanel>
    
      <VideoPlayer
        url="https://www.youtube.com/watch?v=8fgUuvxVQMA&ab_channel=BethEvans"
        thumbnail="V4ssJV22Mv"
        className={styles.video}
        />

      <MessagePanel className={styles.message_panel} />
    </main>
  );
};
export default MessagesOfHope2020;