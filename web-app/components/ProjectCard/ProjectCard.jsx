import React from "react";
import Link from "next/link";
import styles from "./ProjectCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, url, image, description }) => {
  return (
    <Link 
      href={url}
      className={styles.card}
      style={{ background: `linear-gradient(0deg, rgba(152,211,231,0.3) 0%, rgba(152,211,231,0.15) 55%, rgba(152,211,231,0) 100%),
                            url("${process.env.NEXT_PUBLIC_BACKEND_ADDR}/images/${image}") center/cover no-repeat, 
                            var(--glacier-white)` }}>
      <div className={styles.content}>
        <h5>
          {title}
          <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
        </h5>
        {/* <p>{description}</p> */}
      </div>
    </Link>
  );
}
export default ProjectCard;