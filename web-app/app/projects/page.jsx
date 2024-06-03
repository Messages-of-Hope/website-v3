import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Banner from "@/components/_Layout/Banner/Banner.jsx";
import MessagePanel from "@/components/MessagePanel/MessagePanel.jsx";

import styles from "./style.module.css";


export const metadata = {
  title: "Projects",
  description: "Explore the projects created by Messages of Hope and learn how you can get involved."
};


/**
 * Retrieve all projects from the backend.
 * @returns {Object} The projects from the backend
 */
const getProjects = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BACKEND_ADDR}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      credentials: "include"
    });
    if (!response.ok)
      throw new Error("Failed to fetch projects");
    return await response.json();
  } catch (err) {
    return null;
  }
};


const Projects = async () => {
  const projects = await getProjects();
  if (!projects)
    redirect("/not-found");

  return (
    <main>
      <Banner image="V4ssJV22Mv" short title="Projects" />

      <section className={styles.projects_panel}>
        {projects.projects.map((project, index) =>
          <Link 
            key={index}
            href={project.url}
            className={styles.card}
            style={{ background: `linear-gradient(0deg, rgba(152,211,231,0.3) 0%, rgba(152,211,231,0.15) 55%, rgba(152,211,231,0) 100%),
                                  url("${process.env.NEXT_PUBLIC_CLIENT_BACKEND_ADDR}/images/${project.thumbnail}") center/cover no-repeat, 
                                  var(--glacier-white)` }}>
            <div className={styles.content}>
              <h5>
                {project.title}
                <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
              </h5>
            </div>
          </Link>
        )}
      </section>

      <MessagePanel />
    </main>
  );
};
export default Projects;
