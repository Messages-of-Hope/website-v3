"use client";

import React, { useEffect, useState, useRef, Fragment } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

const Header = () => {
  const [projects, setProjects] = useState(null);
  const [dropdown, setDropdown] = useState(null);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const router = useRouter();
  const headerRef = useRef();

  const onAboutClick = () => {
    if (dropdown !== "about") {
      headerRef.current.classList.add(styles.interact);
      headerRef.current.classList.add(styles.about);
      if (dropdown === "projects") {
        headerRef.current.classList.remove(styles.projects);
      }
    } else {
      headerRef.current.classList.remove(styles.about);
      headerRef.current.classList.remove(styles.interact);
    }

    setDropdown(dropdown === "about" ? null : "about");
  }

  const onProjectClick = () => {
    if (projects === null) {
      router.push("/projects");
      return;
    }
    
    if (dropdown !== "projects") {
      headerRef.current.classList.add(styles.interact);
      headerRef.current.classList.add(styles.projects);
      if (dropdown === "about") {
        headerRef.current.classList.remove(styles.about);
      }
    } else {
      headerRef.current.classList.remove(styles.projects);
      headerRef.current.classList.remove(styles.interact);
    }

    setDropdown(dropdown === "projects" ? null : "projects");
  }

  const closeDropdown = (e) => {
    if (e.type !== "scroll") {
      if (!e.target || typeof e.target.className !== 'string') return;
      if (e.target.className && (e.target.className.split(" ").includes(styles.dropdown) || e.target.className.split(" ").includes("dropdown"))) return;
    }

    headerRef.current.classList.remove(styles.interact);
    if (dropdown === "projects")
      headerRef.current.classList.remove(styles.projects);
    else if (dropdown === "about")
      headerRef.current.classList.remove(styles.about);

    setDropdown(null);
  };

  useEffect(() => {
    if (dropdown === "projects" || dropdown === "about") {
      document.addEventListener("click", closeDropdown);
      window.addEventListener("scroll", closeDropdown);
    }

    return () => {
      document.removeEventListener("click", closeDropdown);
      window.removeEventListener("scroll", closeDropdown);
    }
  }, [dropdown]);

  /**
   * Fetch projects from backend
   */
  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ADDR}/projects?total=2`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store"
        });
        if (!response.ok)
          throw new Error("Failed to fetch projects");
        const data = await response.json();
        setProjects(data.projects);
      } catch (err) { }
    }
    getProjects();
  }, []);

  /**
   * Add active class to header when user scrolls down
   */
  useEffect(() => {
    const scrollFunction = () => {
      const header = document.querySelectorAll(`.${styles.header}`);
      if (document.body.scrollTop > window.innerHeight * 0.2 || document.documentElement.scrollTop > window.innerHeight * 0.2) {
        for (let h of header) {
          h.classList.add(styles.active);
        }
      }
      else {
        for (let h of header) {
          h.classList.remove(styles.active);
        }
      }
    }
    scrollFunction();
    window.addEventListener("scroll", scrollFunction, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    }
  }, []);

  return (
    <Fragment>
      <header ref={headerRef} className={`${styles.header}`}>
        <div className={`${styles.inner_header} ${styles.mobile}`}>
          <div className={styles.container}>
            <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/pF3vE95CRd`} alt="Messages of Hope logo" width={100} height={100}/>
            <button className={`${styles.hamburger} ${showMobileNav ? styles.open : ""}`} onClick={() => setShowMobileNav(!showMobileNav)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            { showMobileNav ? <MobileNavigation projects={projects} closeNav={ () => { setShowMobileNav(false); } }/> : null }
          </div>
        </div>

        <div className={`${styles.inner_header} ${styles.desktop}`}>
          <div className={styles.container}>
            <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/pF3vE95CRd`} alt="Messages of Hope logo" width={100} height={100}/>
            <ul className={styles.nav}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <button onClick={onAboutClick} className={styles.about_button}>
                  About
                  <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>
                </button>
                {
                  dropdown === "about" ? (
                    <div className={styles.dropdown}>
                      <ul className="dropdown">
                        <li>
                          <Link href="/about">
                            <h6>
                              About Messages of Hope
                              <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>
                            </h6>
                            <p>What is Messages of Hope? What does Messages of Hope do?</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/our-team">
                            <h6>
                              Our Team
                              <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>
                            </h6>
                            <p>Who are the Messages of Hope team and how can I get involved?</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/our-creator">
                            <h6>
                              Our Creator
                              <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>
                            </h6>
                            <p>Who created Messages of Hope and why is it important?</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : null
                }
              </li>
              <li>
                <button className={styles.projects_button} onClick={onProjectClick}>
                  Projects
                  <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>
                </button>
                {
                  dropdown === "projects" ? (
                    <div className={styles.dropdown}>
                      <ul className="dropdown">
                        {
                          projects.map((project, index) => {
                            return (
                              <li key={index}>
                                <Link href={project.url}>
                                  <h6>
                                    {project.title}
                                    <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>
                                  </h6>
                                  <p>{project.description}</p>
                                </Link>
                              </li>
                            );
                          })
                        }
                        <li>
                          <Link href="/projects">
                            <h6>
                              View All Projects
                              <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>
                            </h6>
                            <p>View all of our projects and see how you can get involved.</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : null
                }
              </li>
              <li>
                <Link href="/write-a-message">Write a Message</Link>
              </li>
              <li>
                <Link href="/support-us">Support Us</Link>
              </li>
            </ul>
          </div>

          <Link href="/login" className={styles.login}>
            <FontAwesomeIcon icon={faUser} className={styles.icon}/>
            Login
          </Link>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;