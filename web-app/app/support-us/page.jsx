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

export const metadata = {
  title: "Support Us",
  description: "Messages of Hope is a Community Interest Company that relies on donations to continue our work. Find out how you can support us and help us spread hope."
}

const SupportUs = () => {
  return (
    <main className={styles.main}>
      <Banner image="V4ssJV22Mv" short title="Support Us" />

      <section className={styles.panel}>
        <div>
          <h4>Colouring Book</h4>
          <p>Messages of Hope is proud to announce the release of our very own colouring book. This colouring book is a beautiful compilation of some of the message of hope submissions we have received via our website and social media pages. Since the origin of Messages of Hope we have received over 1500 messages of hope from strangers who are looking to give hope and provide support to other struggling individuals.</p>
          <p>We decided that designing and illustrating a Messages of Hope colouring book would be the best way to share a wide variety of some of our favourite message submissions. If you are looking for a fun, relaxing, positive and creative outlet, our colouring book is for you! Please share with us your completed colouring pages on social media.</p>
          <p>You can now purchase our Message of Hope colouring book via Amazon.</p>
          <Button className={styles.button} colour="blue" link="/" text="Colouring Book"/>
        </div>
        <div>
          <h4>Cash Donate</h4>
          <p>Messages of Hope heavily relies on the gratuitous donations we receive from individuals like yourself. Any amount you are able to give in support of Messages of Hope is hugely appreciated.</p>
          <p>With your money we are able to continue to support psychiatric patients as well as those struggling with their mental health throughout England and Wales. Your money will enable us to continue providing Bags of Hope for psychiatric patients, go out into communities to create collaborative art projects, and financially support the ongoing work within the organisation.</p>
          <p>If you like what we do and who we are and want to help, there are many ways you could help us out. By donating to Messages of Hope you would be helping us to continue our work in spreading mental health awareness and giving hope to those who need it.</p>
          <Button className={styles.button} colour="yellow" link="/" text="Donate Directly"/>
        </div>
        <div>
          <h4>JustGiving</h4>
          <p>Alternatively we have a JustGiving page which takes donations that will only go towards the Bags of Hope project.</p>
          <p>Donations to the Bags of Hope project will go towards providing essential items for patients arriving on psychiatric wards. Our goal is to ensure that nobody arrives to psychiatric wards with only the clothes on their back. Patients should be there for treatment and help, and hospital admissions shouldn't feel like a prison sentence.</p>
          <Button className={styles.button} colour="blue" link="/" text="JustGiving"/>
        </div>
        <div>
          <h4>Amazon Wishlist</h4>
          <p>If you don't feel comfortable with a donation of money, we have setup and Amazon wishlist so that we can fill the bags used in the Bags of Hope campaign.</p>
          <p>Items that we are looking for include body wash, wipes, socks, and underwear. These items are essential for patients arriving on psychiatric wards and offer comfort and dignity to patients during a challenging time. We also list snacks and activities that can be included in the bags.</p>
          <Button className={styles.button} colour="yellow" link="/" text="Amazon Wishlist"/>
        </div>
      </section>

      <ContactForm title="Get in touch" text="We’re a small team and we’re always looking to make connections with teams, organisations and individuals. Use the form below to send us a message and we’ll be in touch." />
    </main>
  );
};
export default SupportUs;