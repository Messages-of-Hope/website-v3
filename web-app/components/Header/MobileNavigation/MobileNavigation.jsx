import React, { Fragment } from "react";
import styles from "./MobileNavigation.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronRight, faUser } from "@fortawesome/free-solid-svg-icons";
import CircleArt from "@/components/CircleArt/CircleArt";

const MobileNavigation = ({ projects, closeNav }) => {
  return (
    <section className={styles.section}>
      <CircleArt className={`${styles.art} ${styles.cir_1}`} />
      <CircleArt className={`${styles.art} ${styles.cir_2}`} />
      <CircleArt className={`${styles.art} ${styles.cir_3}`} />
      <CircleArt className={`${styles.art} ${styles.cir_4}`} />
      <CircleArt className={`${styles.art} ${styles.cir_5}`} />

      <ul className={styles.nav}>
        <li>
          <Link href="/" onClick={closeNav}>
            Home
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon_arrow}/>
          </Link>
        </li>

        <li>
          <p>
            About
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon_chevron}/>
          </p>
          <ul className={styles.sub_nav}>
            <li>
              <Link href="/about" onClick={closeNav}>
                About Messages of Hope
                <FontAwesomeIcon icon={faArrowRight} className={styles.icon_arrow}/>
              </Link>
            </li>
            <li>
              <Link href="/our-team" onClick={closeNav}>
                Our Team
                <FontAwesomeIcon icon={faArrowRight} className={styles.icon_arrow}/>
              </Link>
            </li>
            <li>
              <Link href="/our-creator" onClick={closeNav}>
                Our Creator
                <FontAwesomeIcon icon={faArrowRight} className={styles.icon_arrow}/>
              </Link>
            </li>
          </ul>
        </li>

        <li>
          {
            projects !== null ? (
              <Fragment>
                <p>
                  Projects
                  <FontAwesomeIcon icon={faChevronRight} className={styles.icon_chevron}/>
                </p>
                <ul className={styles.sub_nav}>
                  {projects.map((project, index) => {
                    return (
                      <li key={index}>
                        <Link href={project.url}>
                          {project.title}
                          <FontAwesomeIcon icon={faArrowRight} className={styles.icon_arrow}/>
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <Link href="/projects" onClick={closeNav}>
                      All Projects
                      <FontAwesomeIcon icon={faArrowRight} className={styles.icon_arrow}/>
                    </Link>
                  </li>
                </ul>
              </Fragment>
            ) : (
              <Link href="/projects" onClick={closeNav}>
                Projects
                <FontAwesomeIcon icon={faArrowRight} className={styles.icon_arrow}/>
              </Link>
            )
          }
        </li>

        <li>
          <Link href="/write-a-message" onClick={closeNav}>
            Write a Message
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon_arrow}/>
          </Link>
        </li>

        <li>
          <Link href="/support-us" onClick={closeNav}>
            Support Us
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon_arrow}/>
          </Link>
        </li>

        <li>
          <Link href="/login" onClick={closeNav}>
            <FontAwesomeIcon icon={faUser} className={styles.icon}/>
            Login
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon_arrow}/>
          </Link>
        </li>

      </ul>
    </section>
  );
};
export default MobileNavigation;