import React from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/Button/Button.jsx";

import Banner from "@/components/_Layout/Banner/Banner.jsx";
import ImagePanel from "@/components/ImagePanel/ImagePanel";
import Accordion from "@/components/Accordion/Accordion";
import ContactForm from "@/components/ContactForm/ContactForm";
import MessagePanel from "@/components/MessagePanel/MessagePanel";

import styles from "./style.module.css";


const ABOUT_POINTS = [
  "Support people struggling with their mental health.",
  "Spread hope.",
  "Prevent suicide.",
  "Encourage conversations around mental health."
];
const WHAT_WE_DO_POINTS = [
  {
    "title": "Collaborative Art Projects",
    "description": [
      "You will often find us out, working in the community, asking strangers to write anonymous messages of hope for people going through a difficult time. We ask these strangers to write their messages on one of our canvases, which are then displayed in the local community.",
      "Participants' messages, displayed publicly, uplift and remind viewers of collective empathy. This initiative shows that small, anonymous acts of kindness can profoundly impact mental well-being, fostering solidarity and support within the community."
    ],
    "image": "i31SIaW5lE",
    "altText": "A young person writing a message of hope on a canvas at the Messages of Hope event 2023"
  },
  {
    "title": "Bags of Hope",
    "description": [
      "Bags of Hope is a project that is set up to give items to patients arriving on psychiatric wards. We ask for donations via our Amazon Wishlist and our JustGiving page, and we put these items into bags for patients to have when they arrive at psychiatric wards. Our goal is to ensure that nobody arrives on psychiatric wards with only the clothes on their back.",
      "These Bags of Hope provide essential items such as body wash, wipes, socks, and underwear, offering comfort and dignity to patients during a challenging time."
    ],
    "image": "yv7GjAu48m",
    "altText": "Graffiti art of a yellow smiley face with the words 'You are loved' in the background"
  },
  {
    "title": "Video Projects",
    "description": [
      "Messages of Hope often collaborates with other community organisations to create videos for mental health awareness days throughout the year. These videos will involve members of the public sharing their messages of hope.",
      "These video projects amplify voices from the community, showcasing personal stories and messages of hope. By featuring diverse perspectives, they aim to raise awareness, reduce stigma, and inspire those struggling with mental health issues, reinforcing the message that they are not alone."
    ],
    "image": "RSi3dKCCjy",
    "altText": "A woman holding a whiteboard that says 'Millions of people said the world was flat, they were wrong. Don't listen to others, you're worth it.'"
  },
  {
    "title": "Collecting Your Messages",
    "description": [
      "You can submit a message of hope whenever you like via our website. We will then post the submitted messages of hope on our social media, or your message might be turned into a sticker and placed in various spots around the local community.",
      "Submitting a message of hope is a simple yet impactful way to support others. These messages, shared on social media or turned into stickers, spread positivity and encouragement throughout the community, creating a widespread support network for those facing mental health challenges."
    ],
    "image": "61i9PiBRIV",
    "altText": "Two young writing messages of hope on a whiteboard"
  }
];

export const metadata = {
  title: {
    "absolute": "Messages of Hope"
  },
  description: "Messages of Hope is a Community Interest Company encouraging people to write hopeful messages for those struggling with mental health. These messages become stickers and Instagram posts spread across the UK, aiming to improve mental health and support psychiatric patients.",
}


/**
 * Retrieve the top 5 projects from the backend for the home page projects panel.
 * @returns {Object} The top 5 projects from the backend.
 */
const getProjects = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BACKEND_ADDR}/projects?total=5`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store"
    });
    if (!response.ok)
      throw new Error("Failed to fetch projects");
    return await response.json();
  } catch (err) {
    return null;
  }
}


const Project = ({ key, title, url, image }) => {
  return (
    <Link
      key={key}
      href={url}
      className={styles.card}
      style={{ background: `linear-gradient(0deg, rgba(152,211,231,0.3) 0%, rgba(152,211,231,0.15) 55%, rgba(152,211,231,0) 100%),
                            url("${process.env.NEXT_PUBLIC_CLIENT_BACKEND_ADDR}/images/${image}") center/cover no-repeat, 
                            var(--glacier-white)` }}>
      <div className={styles.content}>
        <h5>
          {title}
          <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
        </h5>
      </div>
    </Link>
  );
};


const Home = async () => {
  const projects = await getProjects();

  return (
    <main>
      {/* Banner */}
      <Banner image="V4ssJV22Mv">
        <div className={styles.banner_content}>
          <h4>Collecting your messages of hope and spreading them far and wide.</h4>
          <div className={styles.banner_buttons}>
            <Button className={styles.banner_button} colour="blue" link="/write-a-message" text="Write a Message"/>
            <Button className={styles.banner_button} colour="yellow" link={projects ? projects.projects[0].url : "/projects"} text="Our Latest Project"/> 
          </div>
        </div>
      </Banner>

      {/* About Messages of Hopes */}
      <ImagePanel image="V1EPZH5feL" altText="Two young people holding a whiteboard that says 'You're loved'">
        <h3 className={styles.about_title}>About Messages of Hope</h3>
        <p className={styles.about_text}>Messages of Hope is a Community Interest Company encouraging people to write hopeful messages for those struggling with mental health. These messages become stickers and Instagram posts spread across the UK, aiming to improve mental health and support psychiatric patients.</p>
        <p className={styles.about_text}>Messages of Hope is a Community Interest Company that was created to...</p>
        <ul className={styles.about_points}>
          {ABOUT_POINTS.map((point, index) => 
            <li key={index} className={`${styles.about_point} ${styles.body}`}>
              <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
              {point}
            </li>
          )}
        </ul>
      </ImagePanel>

      {/* What We Do */}
      <Accordion title="What We Do" data={WHAT_WE_DO_POINTS}/>

      {/* Projects */}
      {
        projects ?
        <section className={styles.projects_panel}>
          <h3>Projects</h3>
          <div className={styles.project_list}>
            {projects.projects.map((project, index) =>
              <Project key={index} url={project.url} title={project.title} image={project.thumbnail}/>
            )}
            <Project url="/projects" title="View All Projects" image="1nxfPI6QBa"/>
            <div className={styles.projects_image}>
              <Image src={`${process.env.NEXT_PUBLIC_SERVER_BACKEND_ADDR}/images/srlnEmEMeq`} alt="A group of yound people wearing the Messages of Hope merchandise" width={962} height={457}/>
            </div>
          </div>
        </section>
        : null
      }

      {/* Contact Us */}
      <ContactForm title="Contact Us" text="Messages of Hope welcomes collaborations with other businesses, organisations, charities, projects, schools and communities. If you're interested in hosting a Messages of Hope project or would like to collaborate with us in any capacity we would love to hear from you." />

      {/* Message Panel */}
      <MessagePanel/>
    </main>
  );
};
export default Home;
