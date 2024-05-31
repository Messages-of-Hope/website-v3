import React from "react";

import Button from "@/components/Button/Button.jsx";

import Banner from "@/components/_Layout/Banner/Banner.jsx";
import ImagePanel from "@/components/ImagePanel/ImagePanel";
import MessagePanel from "@/components/MessagePanel/MessagePanel";

import styles from "./style.module.css";


export const metadata = {
  title: {
    absolute: "About Messages of Hope"
  },
  description: "Messages of Hope is a Community Interest Company dedicated to supporting individuals struggling with their mental health by encouraging people to write uplifting messages. These messages are transformed into stickers and Instagram posts, spreading positivity across the UK.",
}


const About = () => {
  return (
    <main className={styles.main}>
      <Banner image="LDZ9jJyvEv" short title="About Messages of Hope" />

      <ImagePanel wide image="63hxYZYncr" altText="Three people writing a message of hope on a whiteboard">
        <h3>About Messages of Hope</h3>
        <p>Messages of Hope is a Community Interest Company dedicated to supporting individuals struggling with their mental health by encouraging people to write uplifting messages. These messages are transformed into stickers and Instagram posts, spreading positivity across the UK.</p>
        <p>We actively engage with the community, inviting strangers to write messages of hope. Whether through collaborative art projects, video initiatives, or our Bags of Hope, our mission is to inspire and uplift those facing mental health challenges. By collecting and sharing these messages, we aim to create a supportive network, showing that even small acts of kindness can make a significant impact.</p>
        <p>Through these varied initiatives, Messages of Hope strives to connect communities and provide a beacon of hope for anyone in need.</p>
        <Button className={styles.button} colour="blue" link="/write-a-message" text="Write a Message" />
      </ImagePanel>

      <ImagePanel wide blue right image="zhdPwKuWQJ" altText="Speaker Box dancing at the Connections 2024 event">
        <h3>What We Do</h3>
        <p>As a community organisation, Messages of Hope is committed to improving individuals&apos; mental health and well-being throughout England and Wales. We actively support patients arriving at hospitals for psychiatric admissions, ensuring they receive essential items and compassionate care through our Bags of Hope project.</p>
        <p>We organise and run various projects throughout the year, each designed to connect communities through creativity and collective empathy. Our initiatives include collaborative art pieces, video projects for mental health awareness days, and public displays of messages of hope. These efforts uplift those in need and foster a sense of unity and support within the community.</p>
        <p>Visit our projects page to learn more about the diverse work Messages of Hope undertakes and how you can get involved in spreading positivity and hope.</p>
        <Button className={styles.button} colour="yellow" link="/projects" text="All Our Projects" />
      </ImagePanel>

      <MessagePanel />
    </main>
  );
};
export default About;