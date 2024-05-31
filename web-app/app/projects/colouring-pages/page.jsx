import React from "react";
import Image from "next/image";

import Banner from "@/components/_Layout/Banner/Banner.jsx";
import Button from "@/components/Button/Button.jsx";

import styles from "./style.module.css";


export const metadata = {
  title: "Colouring Pages",
  description: "Messages of Hope provides free colouring pages to help spread hope and positivity. Download and print our colouring pages to share your creativity with us."
};


/**
 * Retrieve all colouring pages descriptions from the backend.
 * @returns {Object} The colouring pages from the backend
 */
const fetchColouringPages = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BACKEND_ADDR}/colouring-pages`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store"
    });
    if (!response.ok)
      throw new Error("Failed to fetch pages");
    return await response.json();
  } catch (err) {
    return null;
  }
};


const ColouringPages = async () => {
  const pages = await fetchColouringPages();

  return (
    <main>
      <Banner image="V4ssJV22Mv" short title="Colouring Pages" />

      <section className={styles.description}>
        <p>Messages of Hope is proud to announce the release of our very own colouring book. This colouring book is a beautiful compilation of some of the message of hope submissions we have received via our website and social media pages. Since the origin of Messages of Hope we have received over 1500 messages of hope from strangers who are looking to give hope and provide support to other struggling individuals.</p>
        <p>We understand that we are living in very challenges times, therefore, if you are unable to purchase the Messages of Hope colouring book, feel free to download and print out our free colouring pages. Please share with us your completed colouring pages on social media.</p>
        <Button className={styles.button} colour="blue" link="/support-us" text="Colouring Book"/>
      </section>

      <section className={styles.pages_panel}>
        { pages ? pages.colouring_pages.map((page, i) => (
            <a key={i} href={`${process.env.NEXT_PUBLIC_CLIENT_BACKEND_ADDR}/colouring-pages/download/${page.id}`} download={`${page.title}.png`}>
              <Image src={`${process.env.NEXT_PUBLIC_SERVER_BACKEND_ADDR}/colouring-pages/${page.id}`} alt={page.title} width={800} height={800} />
            </a>
          )) :
          <p>There are no colouring pages available at this time. Please check back later.</p>
        }
      </section>
    </main>
  );
};
export default ColouringPages;