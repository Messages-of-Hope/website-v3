"use client";

import React, { useState } from "react";

import MessageTable from "./MessageTable/MessageTable.jsx";

import styles from "./AdminConsole.module.css";


const AdminConsole = () => {
  const [menu, setMenu] = useState("messages");

  const logout = () => {
    const sendLogout = async () => {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_CLIENT_BACKEND_ADDR}/users/logout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({}),
        });
      } catch (error) {}
    };
    sendLogout();
    window.location.href = "/";
  };

  return (
    <section className={styles.admin_console}>
      <nav className={styles.menu}>
        <button
          className={menu === "messages" ? styles.active : ""}
          onClick={() => setMenu("messages")}
        >
          Messages
        </button>
        <button
          className={menu === "colouring" ? styles.active : ""}
          onClick={() => setMenu("colouring")}
        >
          Colouring
        </button>
        <button
          className={menu === "users" ? styles.active : ""}
          onClick={() => setMenu("users")}
        >
          Users
        </button>
        <a href="https://git.jonathande.dev/messages-of-hope/website-v3" target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
        <button onClick={logout}>Logout</button>
      </nav>

      <div className={styles.content}>
        {menu === "messages" && <MessageTable />}
      </div>
    </section>
  )
};
export default AdminConsole;