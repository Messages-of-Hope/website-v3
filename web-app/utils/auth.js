"use strict";

import Redis from "ioredis";


const checkPageAuth = async (cookieStore, headerStore) => {
  try {
    const FALLBACK_IP = "0.0.0.0";
    const forwardedFor = headerStore.get("x-forwarded-for") || FALLBACK_IP;
    let ip;
    if (forwardedFor) {
      ip = forwardedFor.split(",")[0] ?? FALLBACK_IP;
    } else {
      ip = headerStore.get('x-real-ip') ?? FALLBACK_IP;
    }

    const username = cookieStore.get(process.env.NEXT_PUBLIC_USERNAME_TOKEN).value;
    const api_token = cookieStore.get(process.env.NEXT_PUBLIC_ACCESS_TOKEN).value;

    const redis = new Redis ({
      port: 6379,
      host: "moh-web3-redis",
    });

    const redisToken = await redis.get(username);
    if (token === null) {
      throw new Error("Invalid token");
    }
    const [storedToken, storedIP, storedPerm] = redisToken.split("_");
    if (storedToken !== api_token || !ip.includes(storedIP)) {
      throw new Error("Invalid token");
    }

    return true;
  } catch (error) {
    return false
  }
};

export { checkPageAuth }