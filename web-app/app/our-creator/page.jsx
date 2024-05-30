import React from "react";
import Banner from "@/components/Banner/Banner.jsx";
import styles from "./style.module.css";
import Image from "next/image";
import MessagePanel from "@/components/MessagePanel/MessagePanel";
import Button from "@/components/Button/Button";
import CircleArt from "@/components/CircleArt/CircleArt";

export const metadata = {
  title: "Our Creator",
  description: "Messages of Hope, founded by Bethan Evans, supports mental health through community engagement and creativity. After overcoming her own struggles with Borderline Personality Disorder, Bethan launched initiatives like Bags of Hope to provide essentials for psychiatric patients. "
}

const text_1 = [
  "Bethan Evans is the Creator and Director of Messages of Hope.",
  "Messages of Hope was first created in 2020. However between the years of  2019 and 2022 Bethan was at war with her mental health, more  specifically Borderline Personality Disorder, therefore the growth and  development of Messages of Hope slipped far down on her list of  priorities.",
  "In November 2022 Bethan made an extremely serious attempt to end her  life which resulted in her hospitalisation. Following this suicide  attempt Bethan made a conscious effort to turn her life around and to  this day, she remains in recovery and out of hospital for over a year.",
  "Bethan wants to use her story to inspire others to keep fighting. She  wants everyone to know that they have a purpose in this world and  usually we feel most lost right before we are found. Suicide is not the  answer and it never will be."
];

const text_2 = [
  "Bethan is also passionate about supporting patients that arrive in  hospitals for psychiatric admissions. After spending four years of her  life in and out of hospitals and psychiatric facilities, Bethan knows  just how traumatic and life altering every admission can be.",
  "On several occasions Bethan would be admitted to hospital without any of  her belongings, and recalls several times when she would have to sit  for days in clothes soaked with vomit and her hair matted. The lack of  dignity and respect Bethan and so many other patients are shown during  psychiatric admissions is something she only began to reflect on once  she had entered recovery. Once she began to reflect she knew she had to  do what she could to help those in a similar position.",
  "Bethan created Bags of Hope in 2023 in order to provide patients  arriving in hospital for psychiatric admission with the essentials, such  as, body wash, wipes, socks and pants.",
  "Button",
  "Bethan promises to do what she can to support and advocate for the  mentally ill and she hopes that she can be a voice for those with  Borderline Personality Disorder."
];

const OurCreator = () => {
  return (
    <main>
      <Banner image="tKqTmPtj0X" short title="Our Creator" />

      <section className={styles.text_panel}>
        {text_1.map((text, index) => {
          return (<p key={index}>{text}</p>);
        })}
        {text_2.map((text, index) => {
          if (text === "Button") {
            return (
              <Button key={index} className={styles.button} colour="blue" link="/projects/bags-of-hope" text="Bags of Hope"/>
            );
          }

          return (<p key={index}>{text}</p>);
        })}
      </section>
      
      <MessagePanel />
    </main>
  );
};
export default OurCreator;