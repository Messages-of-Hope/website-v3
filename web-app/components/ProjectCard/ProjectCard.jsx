import React from "react";
import Link from "next/link";
import styles from "./ProjectCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, url, image }) => {
  return (
    <Link 
      href={url}
      className={styles.card}
      style={{ background: `url("${process.env.NEXT_PUBLIC_BACKEND_ADDR}/images/${image}") center/cover no-repeat, 
                            var(--glacier-white)` }}>
      <h6>
        {title}
        <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
      </h6>
    </Link>
  );
}
export default ProjectCard;