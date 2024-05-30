import React from "react";
import styles from "./style.module.css";
import Banner from "@/components/Banner/Banner";
import MessagePanel from "@/components/MessagePanel/MessagePanel";
import MessageSubmission from "@/components/MessageSubmission/MessageSubmission";

export const metadata = {
  title: "Write A Message",
  description: "Write a message of hope to share with the world. Messages of Hope collects messages of hope and spreads them far and wide."
}

const WriteAMessage = () => {
  return (
    <main>
      <Banner image="V4ssJV22Mv" short title="Write A Message" />

      <section className={styles.panel}>
        <p>Write a message of hope for someone struggling with their mental health. Your message could be the one that makes a difference in someone&apos;s life. Messages of Hope collects messages of hope and spreads them far and wide. Keep an eye on our social media pages to see if your message is shared.</p>
        
        <MessageSubmission/>
      </section>

      <MessagePanel />
    </main>
  );
};
export default WriteAMessage;