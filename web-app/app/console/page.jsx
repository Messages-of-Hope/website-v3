import React from "react";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";
import Redis from "ioredis";

import Banner from "@/components/_Layout/Banner/Banner.jsx";
import AdminConsole from "@/components/AdminConsole/AdminConsole.jsx";

import styles from "./style.module.css";


export const metadata = {
  title: "Console",
  description: "Messages of Hope Admin Console",
};




const Console = async () => {
  const auth = await checkPageAuth(cookies(), headers());
  if (!auth)
    redirect("/login");

  return (
    <main className={styles.main}>
      <Banner image="V4ssJV22Mv" title="Admin Console" short />

      <AdminConsole />
    </main>
  );
};
export default Console;