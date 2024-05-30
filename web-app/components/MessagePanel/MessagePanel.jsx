"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./MessagePanel.module.css";

const staticMessages = [
  "Life is a journey and everyone’s different. No matter how many times you fall please get back up. You don’t know what the future will bring or what's around the corner for you. Just take one step at a time no matter how small that is, even if it's a wrong turn or backwards just keep going. Lots of love from a survivor.",
  "I am so proud of you for getting through everything that had lead you to this moment.",
  "Even on your darkest days, there is always hope. You are your unique self, there is no one in the world like you, or ever will be. One day, someone will need you, let them have that chance."
];

const MessagePanel = ({ className }) => {
  const [messages, setMessages] = useState(staticMessages);
  const currentMessage = useRef(0);

  const nextMessage = () => {
    let mess = document.getElementById("message-div__" + currentMessage.current);
    mess.classList.add(styles.after);
    setTimeout(() => {
      let id = currentMessage.current - 1;
      if (id < 0) {
        id = messages.length - 1;
      }
      let _mess = document.getElementById("message-div__" + id);
      _mess.classList.add(styles.hidden);
      _mess.classList.remove(styles.after);
    }, 1000);

    currentMessage.current = (currentMessage.current + 1) % messages.length;
    mess = document.getElementById("message-div__" + currentMessage.current);
    mess.classList.remove(styles.hidden);
  }

  useEffect(() => {
    const interval = setInterval(nextMessage, 15000);
    return () => clearInterval(interval);
  }, [messages]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_BACKEND_ADDR}/messages`);
        const data = await response.json();
        if (response.ok) {
          setMessages(data.messages);
        }
      } catch (err) { }
    };
    fetchMessages();
  }, []);

  return (
    <section className={`${styles.message_panel} ${className ? className : ""}`}>
      <div className={styles.inner_container}>
        {
          messages.map((message, index) => {
            return (
              <div id={"message-div__" + index} key={index} className={index == 0 ? "" : styles.hidden}>
                <p>{message}</p>
                <p>- Anonymous -</p>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};
export default MessagePanel;