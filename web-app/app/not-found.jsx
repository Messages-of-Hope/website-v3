import React from "react";
import Banner from "@/components/_Layout/Banner/Banner";
import styles from "./style.module.css";


export const metadata = { title: "404 Page Not Found" }


const NotFound = () => {
  return (
    <main>
      <Banner short/>

      <h1 className={styles.title_404}>404 Page Not Found</h1>
      <p className={styles.body_404}>I&apos;m not sure how you got here, but this page doesn&apos;t exist.</p>
    </main>
  )
};
export default NotFound;
