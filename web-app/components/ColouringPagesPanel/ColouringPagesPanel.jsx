"use client";

import React, { useState, useEffect } from "react";
import styles from "./ColouringPagesPanel.module.css";
import Image from "next/image";

const ColouringPagesPanel = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_BACKEND_ADDR}/colouring-pages`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store"
        });
        if (!response.ok)
          throw new Error("Failed to fetch pages");
        const data = await response.json();
        setPages(data.colouring_pages);
      } catch (err) { }
    }
    fetchPages();
  }, []);

  const updateDownloadCount = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_BACKEND_ADDR}/colouring-pages/download/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store"
      });
      if (!response.ok)
        throw new Error("Failed to update download count");
    } catch (err) { }
  };

  return (
    <section className={styles.panel}>
      {
        pages.map((page, i) => (
          <a onClick={() => {updateDownloadCount(page.id)}} key={i} href={`${process.env.NEXT_PUBLIC_CLIENT_BACKEND_ADDR}/colouring-pages/${page.id}`} download={`${page.title}.png`}>
            <Image src={`${process.env.NEXT_PUBLIC_SERVER_BACKEND_ADDR}/colouring-pages/${page.id}`} alt={page.title} width={800} height={800} />
          </a>
        ))
      }
    </section>
  );
};
export default ColouringPagesPanel;