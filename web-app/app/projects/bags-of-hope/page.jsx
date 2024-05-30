import React from "react";
import Banner from "@/components/Banner/Banner.jsx";
import styles from "./style.module.css";
import Image from "next/image";
import MessagePanel from "@/components/MessagePanel/MessagePanel";
import Button from "@/components/Button/Button";
import CircleArt from "@/components/CircleArt/CircleArt";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ImagePanel from "@/components/ImagePanel/ImagePanel";
import InstagramFeed from "@/components/InstagramFeed/InstagramFeed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faSocks, faHospital } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Bags of Hope",
  description: "Bags of Hope is a project to give items to patients arriving on psychiatric wards. Our goal is to ensure that nobody arrives to psychiatric wards with only the clothes on their back. Patients should be there for treatment and help, and hospital admissions shouldn't feel like a prison sentence."
}

const BagsOfHope = async () => {
  return (
    <main className={styles.main}>
      <Banner image="tKqTmPtj0X" short title="Bags of Hope" />

      <ImagePanel wide blue right image="AA6lgpnyoV" altText="Bethan Evans delivering bags of hope to a ward at Llandough hospital">
        <h3>What is Bags of Hope?</h3>
        <p>Bags of Hope is a project to give items to patients arriving on psychiatric wards. Our goal is to ensure that nobody arrives to psychiatric wards with only the clothes on their back. Patients should be there for treatment and help, and hospital admissions shouldn&apos;t feel like a prison sentence.</p>
        <p>These Bags of Hope provide essential items such as body wash, wipes, socks, and underwear, offering comfort and dignity to patients during a challenging time. Donated items are sorted into different bags, each providing a range of essentials as well as activites, snacks.</p>
        <p>The bags are delivered to local psychiatric wards in and around the Vale of Glamorgan.</p>
        <p>Go to our <a href="https://www.instagram.com/messagesof.hope/">Instagram page</a> to get the latest updates on the Bags of Hope project.</p>
      </ImagePanel>

      <section className={styles.stats_panel}>
        <article>
          <FontAwesomeIcon icon={faBagShopping} className={styles.icon}/>
          <h4>Bags Created:</h4>
          <p>159</p>
        </article>
        <article>
          <FontAwesomeIcon icon={faSocks} className={styles.icon}/>
          <h4>Items Donated:</h4>
          <p>4500+</p>
        </article>
        <article>
          <FontAwesomeIcon icon={faHospital} className={styles.icon}/>
          <h4>Wards Helped:</h4>
          <p>9</p>
        </article>
      </section>

      <ImagePanel wide image="n5u7SXZB5K" altText="Bethan Evans standing in behind the bags of hope that need to be delivered">
        <h3>How Can I Help?</h3>
        <p>There are several impactful ways you can support Bags of Hope in its mission to provide essential items for patients arriving on psychiatric wards. You can donate items directly using our Amazon wishlist, ensuring that much-needed supplies reach those in need. Financial contributions are also greatly appreciated and can be made through our JustGiving page or directly to us; even a small donation of £2 can make a significant difference.</p>
        <Button className={styles.button} colour="blue" link="/support-us" text="Support Us" />
        <p>If you&apos;re unable to donate, simply sharing our Instagram stories helps immensely in raising awareness and garnering broader support for our cause. Every act of kindness, big or small, contributes to making a meaningful impact on the lives of those struggling with their mental health.</p>
      </ImagePanel>

      <MessagePanel />
    </main>
  );
};
export default BagsOfHope;