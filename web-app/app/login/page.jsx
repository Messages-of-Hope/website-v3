import React from "react";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";
import Redis from "ioredis";

import Banner from "@/components/_Layout/Banner/Banner.jsx";
import LoginForm from "@/components/AdminConsole/LoginForm/LoginForm.jsx";

import styles from "./style.module.css";


export const metadata = {
  title: "Login",
  description: "Login to your Messages of Hope account to access your profile and more."
};


const checkAuth = async (cookieStore, ip) => {
  try {
    const username = cookieStore.get(process.env.NEXT_PUBLIC_USERNAME_TOKEN).value;
    const api_token = cookieStore.get(process.env.NEXT_PUBLIC_ACCESS_TOKEN).value;

    const redis = new Redis ({
      port: 6379,
      host: "moh-web3-redis",
    });

    const token = await redis.get(username);
    if (token === null) {
      throw new Error("Invalid token");
    }
    const [storedToken, storedIP] = token.split("_");
    if (token !== api_token || !ip.includes(storedIP)) {
      throw new Error("Invalid token");
    }

    return true;
  } catch (error) {
    return false
  }
};

const Login = async () => {
  const cookieStore = cookies();
  
  const FALLBACK_IP = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for") || FALLBACK_IP;
  let ip;
  if (forwardedFor) {
    ip = forwardedFor.split(",")[0] ?? FALLBACK_IP;
  } else {
    ip = headers().get('x-real-ip') ?? FALLBACK_IP;
  }

  const auth = await checkAuth(cookieStore, ip);
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