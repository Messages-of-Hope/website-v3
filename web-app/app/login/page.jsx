import React from "react";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

import { checkPageAuth } from "@/utils/auth.js";
import Banner from "@/components/_Layout/Banner/Banner.jsx";
import LoginForm from "@/components/AdminConsole/LoginForm/LoginForm.jsx";

import styles from "./style.module.css";


export const metadata = {
  title: "Login",
  description: "Login to your Messages of Hope account to access your profile and more."
};


const Login = async () => {
  const auth = await checkPageAuth(cookies(), headers());
  if (auth)
    redirect("/console");

  return (
    <main className={styles.main}>
      <Banner image="V4ssJV22Mv" short />

      <LoginForm />
    </main>
  );
};
export default Login;