import React from "react";
import Banner from "@/components/Banner/Banner.jsx";
import styles from "./style.module.css";
import Image from "next/image";
import MessagePanel from "@/components/MessagePanel/MessagePanel";
import Button from "@/components/Button/Button";
import CircleArt from "@/components/CircleArt/CircleArt";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const getProjects = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/projects`, {
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
          <ProjectCard key={index} url={project.url} title={project.title} image={project.thumbnail}/>
        )}
      </section>

      <MessagePanel />
    </main>
  );
};
export default Projects;