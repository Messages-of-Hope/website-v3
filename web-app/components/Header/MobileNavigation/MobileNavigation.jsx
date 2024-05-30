import React, { Fragment } from "react";
import styles from "./MobileNavigation.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronRight, faUser } from "@fortawesome/free-solid-svg-icons";
import CircleArt from "@/components/CircleArt/CircleArt";

const MobileNavigation = ({ projects, closeNav }) => {
  return (
    <section className={styles.section}>
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
          <Link href="/projects" onClick={closeNav}>
            Projects
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon_arrow}/>
          </Link>
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

      <Image className={styles.logo} src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/pF3vE95CRd`} alt="Messages of Hope Logo" width={300} height={300}/>
    </section>
  );
};
export default MobileNavigation;