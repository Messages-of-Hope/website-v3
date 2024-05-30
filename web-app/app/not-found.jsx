import React from "react";

import Banner from "@/components/Banner/Banner";

import styles from "./style.module.css";

export const metadata = {
  title: "404 Page Not Found",
  description: "I'm not sure how you got here, but this page doesn't exist.",
}

const NotFound = () => {
  return (
    <main>
      <Banner short/>

      <h1 className={`heading ${styles.heading404}`}>404 Page Not Found</h1>
      <p className={`body ${styles.body404}`}>I&apos;m not sure how you got here, but this page doesn&apos;t exist.</p>
    </main>
  )
};
export default NotFound;
