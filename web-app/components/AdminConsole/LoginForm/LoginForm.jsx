"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const usernameRef = useRef();
  const passwordRef = useRef();

  /**
   * Handle the form submission to log the user in.
   * @param {*} event The form submission event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_BACKEND_ADDR}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: usernameRef.current.value.trim(),
          password: passwordRef.current.value.trim(),
        }),
      });

      if (response.status === 200) {
        router.push("/console");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      usernameRef.current.value = "";
      passwordRef.current.value = "";
      setError(true);
    }
  };

  return (
    <section className={styles.panel}>
      <Image src={`${process.env.NEXT_PUBLIC_SERVER_BACKEND_ADDR}/images/pF3vE95CRd`} alt="Messages of Hope Logo" width={300} height={300}/>
      <form className={styles.form} onSubmit={handleSubmit}>
        {error && <p className={styles.error}>We couldn't log you in. Please check your username and password and try again.</p>}
        <label>Username</label>
        <input ref={usernameRef} type="text" id="username" name="username" required/>

        <label htmlFor="password">Password</label>
        <input ref={passwordRef} type="password" id="password" name="password" required/>

        <button type="submit">Login</button>
      </form>
    </section>
  );
};
export default LoginForm;