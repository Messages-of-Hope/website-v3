import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx";
import Banner from "@/components/_Layout/Banner/Banner.jsx";
import Button from "@/components/Button/Button.jsx";
import styles from "./style.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";
import ImagePanel from "@/components/ImagePanel/ImagePanel";
import MessagePanel from "@/components/MessagePanel/MessagePanel";
import Accordion from "@/components/Accordion/Accordion";

export const metadata = {
  title: "Login",
  description: "Login to your Messages of Hope account to access your profile and more."
}

const Login = () => {
  return (
    <main className={styles.main}>
      <Banner image="V4ssJV22Mv" short />

      <section className={styles.panel}>
        <Image src={`${process.env.NEXT_PUBLIC_SERVER_BACKEND_ADDR}/images/pF3vE95CRd`} alt="Messages of Hope Logo" width={300} height={300}/>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" id="username" name="username" required/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required/>

          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};
export default Login;