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

export const metadata = {
  title: "Bags of Hope",
  description: "Bags of Hope is a project to give items to patients arriving on psychiatric wards. Our goal is to ensure that nobody arrives to psychiatric wards with only the clothes on their back. Patients should be there for treatment and help, and hospital admissions shouldn't feel like a prison sentence."
}

const BagsOfHope = async () => {
  return (
    <main className={styles.main}>
      <Banner image="V4ssJV22Mv" short title="Bags of Hope" />

      <ImagePanel wide blue right image="AA6lgpnyoV" altText="Two young people holding a whiteboard that says 'You're loved'">
        <h3>What is Bags of Hope?</h3>
        <p>Bags of Hope is a project to give items to patients arriving on psychiatric wards. Our goal is to ensure that nobody arrives to psychiatric wards with only the clothes on their back. Patients should be there for treatment and help, and hospital admissions shouldn't feel like a prison sentence.</p>
        <p>We're not asking for money, instead we've created an amazon wishlist so that items can be donated directly. The items are then sorted into different bags, each providing a range of essentials as well as activites, snacks. The bags are then delivered to local psychiatric wards in the Vale of Glamorgan.</p>
        <p>You can help by spending as little as £2.</p>
        <Button className={styles.button} colour="blue" link="https://www.amazon.co.uk/hz/wishlist/ls/2B8A3SKRC0F49?ref_=wl_share" text="Amazon Wishlist" />
        <p>We are constantly posting updates with this project on our Instagram, as well as the products that we are currently lacking, so be sure to check that out.</p>
      </ImagePanel>

      {/* <!-- Social media feed using thrid-party application curator.io --> */}
      <InstagramFeed />

      <MessagePanel />
    </main>
  );
};
export default BagsOfHope;