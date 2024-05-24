import React from "react";
import Banner from "@/components/Banner/Banner.jsx";
import styles from "./style.module.css";
import Image from "next/image";
import ContactForm from "@/components/ContactForm/ContactForm";

const team = [
  {
    "name": "Bethan Evans",
    "role": "Founder and Director",
    "image": "mBe5LO46tD",
    "bio": "Bethan is the founder of Messages of Hope. She is a mental health advocate and a filmmaker. She is passionate about using creativity to spread messages of hope and support to those struggling with their mental health."
  },
  {
    "name": "Jonathan Evans",
    "role": "Director",
    "image": "W00II3Vu5M",
    "bio": "Jonathan is a director of Messages of Hope. He is passionate about using creativity to spread messages of hope and support to those struggling with their mental health."
  },
  {
    "name": "Teddy Bear",
    "role": "Chief Cuddles Officer",
    "image": "W00II3Vu5M",
    "bio": "Teddy is the Chief Cuddles Officer at Messages of Hope. She is passionate about using cuddles to spread messages of hope and support to those struggling with their mental health."
  }
]

const OurTeam = () => {
  return (
    <main>
      <Banner image="V4ssJV22Mv" short title="Our Team" />

      <section className={styles.panel}>
        {
          team.map((member, index) => (
            <article key={index} className={styles.member}>
              <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/${member.image}`} alt={member.name} width="300" height="300"/>
              <div className={styles.text}>
                <h4>{member.name}</h4>
                <h6>{member.role}</h6>
                <p>{member.bio}</p>
              </div>
            </article>
          ))
        }
      </section>

      <ContactForm title="Help us out" text="We’re a small team and we’re always looking to make connections with teams, organisations and individuals. Use the form below to send us a message and we’ll be in touch." />
    </main>
  );
};
export default OurTeam;