import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Banner from "@/components/_Layout/Banner/Banner.jsx";
import styles from "./style.module.css";
import MessagePanel from "@/components/MessagePanel/MessagePanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Projects",
  description: "Explore the projects created by Messages of Hope and learn how you can get involved."
}

const getProjects = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BACKEND_ADDR}/projects`, {
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

const Projects = async () => {
  // Fetch data projects
  const projects = await getProjects();
  if (!projects || projects.status !== 200)
    redirect("/not-found");

  return (
    <main>
      <Banner image="V4ssJV22Mv" short title="Projects" />

      <section className={styles.panel}>
        {projects.projects.map((project, index) =>
          <Project key={index} url={project.url} title={project.title} image={project.thumbnail}/>
        )}
      </section>

      <MessagePanel />
    </main>
  );
};
export default Projects;
