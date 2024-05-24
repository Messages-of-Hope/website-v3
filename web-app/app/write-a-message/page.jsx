import React from "react";
import styles from "./style.module.css";
import Banner from "@/components/Banner/Banner";
import MessagePanel from "@/components/MessagePanel/MessagePanel";
import MessageSubmission from "@/components/MessageSubmission/MessageSubmission";

const WriteAMessage = () => {
  return (
    <main>
      <Banner image="V4ssJV22Mv" short title="Write A Message" />

      <section className={styles.panel}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <MessageSubmission/>
      </section>

      <MessagePanel />
    </main>
  );
};
export default WriteAMessage;