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

const getProjects = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/projects?total=5`, {
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

const Home = async () => {
  // Fetch data projects
  const projects = await getProjects();
  if (!projects || projects.status !== 200)
    redirect("/not-found");

  const aboutPoints = [
    "Support people struggling with their mental health.",
    "Spread hope.",
    "Prevent suicide.",
    "Encourage conversations around mental health."
  ];
  const whatWeDoPoints = [
    {
      "title": "Collaborative Art Projects",
      "description": "You will often find us out, working in the community, asking strangers to write anonymous messages of hope for people going through a difficult time. We ask these strangers to write their message on one of our canvases, which are then displayed in the local community.",
      "description_2": "Participants' messages, displayed publicly, uplift and remind viewers of collective empathy. This initiative shows that small, anonymous acts of kindness can profoundly impact mental well-being, fostering solidarity and support within the community.",
      "image": "i31SIaW5lE",
      "altText": "A family holding a whiteboard that says 'Never Give UP'"
    },
    {
      "title": "Bags of Hope",
      "description": "Bags of Hope is a project that is set up to give items to patients arriving on psychiatric wards. We ask for donations via our Amazon Wish list and we put these items into bags for patients to have when they arrive on psychiatric wards. Our goal is to ensure that nobody arrives on psychiatric wards with only the clothes on their back.",
      "description_2": "These Bags of Hope provide essential items such as body wash, wipes, socks, and underwear, offering comfort and dignity to patients during a challenging time.",
      "image": "yv7GjAu48m",
      "altText": "A family holding a whiteboard that says 'Never Give UP'"
    },
    {
      "title": "Video Projects",
      "description": "Messages of Hope often collaborates with other community organisations, to create videos for mental health awareness days throughout the year. These videos will involve members of the public sharing their messages of hope.",
      "description_2": "These video projects amplify voices from the community, showcasing personal stories and messages of hope. By featuring diverse perspectives, they aim to raise awareness, reduce stigma, and inspire those struggling with mental health issues, reinforcing the message that they are not alone.",
      "image": "RSi3dKCCjy",
      "altText": "A family holding a whiteboard that says 'Never Give UP'"
    },
    {
      "title": "Collecting Your Messages",
      "description": "You are able to submit a message of hope whenever you like, via out website. We will then post the submitted messages of hope to our social media or your message might be turned into a sticker and placed in various spots around the local community.",
      "description_2": "Submitting a message of hope is a simple yet impactful way to support others. These messages, shared on social media or turned into stickers, spread positivity and encouragement throughout the community, creating a widespread network of support for those facing mental health challenges.",
      "image": "61i9PiBRIV",
      "altText": "A family holding a whiteboard that says 'Never Give UP'"
    }
  ]

  return (
    <main>
      <Banner image="V4ssJV22Mv">
        <div className={styles.banner_content}>
          <h4>Collecting your messages of hope and spreading them far and wide.</h4>
          <div className={styles.banner_buttons}>
            <Button className={styles.banner_button} colour="blue" link="/write-a-message" text="Write a Message"/>
            <Button className={styles.banner_button} colour="yellow" link={projects.projects[0].url} text="Our Latest Project"/> 
          </div>
        </div>
      </Banner>

      {/* About Messages of Hopes */}
      <ImagePanel image="zhdPwKuWQJ" altText="Two young people holding a whiteboard that says 'You're loved'">
        <h3 className={styles.about_title}>About Messages of Hope</h3>
        <p className={styles.about_text}>Messages of Hope is a Community Interest Company encouraging people to write hopeful messages for those struggling with mental health. These messages become stickers and Instagram posts spread across the UK, aiming to improve mental health and support psychiatric patients.</p>
        <p className={styles.about_text}>Messages of Hope is a Community Interest Company that was created to...</p>
        <ul className={styles.about_points}>
          {aboutPoints.map((point, index) => 
            <li key={index} className={`${styles.about_point} ${styles.body}`}>
              <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
              {point}
            </li>
          )}
        </ul>
      </ImagePanel>

      {/* What We Do */}
      <Accordion title="What We Do" data={whatWeDoPoints}/>

      <section className={styles.projects_panel}>
        <h3>Projects</h3>
        <div className={styles.project_list}>
          {projects.projects.map((project, index) =>
            <ProjectCard key={index} url={project.url} title={project.title} image={project.thumbnail} description={project.description}/>
          )}
          <ProjectCard url="/projects" title="View All Projects" image="1nxfPI6QBa" description="Go to the Projects page to check out all the projects Messages of Hope has undertaken." />
          <div className={styles.projects_image}>
            <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/srlnEmEMeq`} alt="A group of yound people wearing the Messages of Hope merchandise" width={962} height={457}/>
          </div>
        </div>
      </section>

      <ContactForm title="Contact Us" text="Messages of Hope welcomes collaborations with other businesses, organisations, charities, projects, schools and communities. If you're interested in hosting a Messages of Hope project or would like to collaborate with us in any capacity we would love to hear from you." />

      <MessagePanel/>
    </main>
  );
};
export default Home;