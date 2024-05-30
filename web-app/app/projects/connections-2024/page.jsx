import React from "react";
import Image from "next/image";

import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

import Banner from "@/components/Banner/Banner.jsx";

import styles from "./style.module.css";


export const metadata = {
  title: "Connections 2024",
  description: "Connections 2024 is a poignant short film created by Messages of Hope, delving into the transformative power of connection amidst mental health struggles. Through capturing the heartfelt messages penned by Londoners, the film illuminates the profound sense of empathy and solidarity within our communities."
}

const Connections2024 = () => {
  return (
    <main className={styles.main}>
      <Banner image="eT3lf4bF2M" short title="Connections 2024" />

      <section className={styles.section}>
        <div className={styles.padding} />
        <article className={styles.panel}>
          <h3>What is Connections 2024?</h3>
          <p>Connections 2024 is a poignant short film created by Messages of Hope and Speakers Collective for Great Mental Health Day 2024. Connections delves into the transformative power of connection amidst mental health struggles. Through capturing the heartfelt messages penned by Londoners, the film illuminates the profound sense of empathy and solidarity within our communities. Each message serves as a beacon of hope, affirming that even in the darkest moments, there are individuals who genuinely care.</p>
          <p>Our aspiration with Connections 2024 is to ignite a ripple effect of compassion and support, encouraging viewers to extend a hand of empathy to those in need and remind them that they are never alone in their journey towards healing.</p>
        </article>
        <VideoPlayer 
          title="Connections 2024" 
          url="https://www.youtube.com/watch?app=desktop&si=EWa9X-xExixMpenj&v=dFJHklUGYTU&feature=youtu.be&ab_channel=ThriveLDN"
          bslUrl="https://www.youtube.com/watch?v=ccomKjHDgp0&ab_channel=ThriveLDN"
          thumbnail="dRYXgZvZNR"
          className={styles.video}
          />
      </section>

      <section className={styles.alt_section}>
        <VideoPlayer
          title="The Making of Connections 2024"
          url="https://www.youtube.com/watch?v=X8Cu-JvoXSc&ab_channel=ThriveLDN"
          bslUrl="https://www.youtube.com/watch?v=BAAUs5BfuKs&ab_channel=ThriveLDN"
          thumbnail="honOyOXGym"
          className={styles.video}
          />
        <article className={styles.panel}>
          <h3>Who was involved?</h3>
          <p>Connections 2024 was made possible through the generous funding from The Mayor of London, Sadiq Khan, which we believe reflects his commitment to fostering the mental well-being of Londoners. Collaborating closely with Thrive LDN and Speakers Collective, Messages of Hope orchestrated the creation of this film, uniting diverse voices and talents in a collective effort to spread messages of hope and support.</p>
          <p>People from all over London were involved in writing messages of hope for Connections and we also worked with several dancers, including the incredible Speaker Box Street Party.</p>
          <p>It was a huge honour to have been able to work with Speakers Collective and have the support of both The Mayor of London, Sadiq Khan, and Public Health Director, Kevin Fenton on Connections 2024.</p>
        </article>
        <div className={styles.padding} />
      </section>

      <section className={styles.mobile_videos}>
        <VideoPlayer 
          title="Connections 2024" 
          url="https://www.youtube.com/watch?app=desktop&si=EWa9X-xExixMpenj&v=dFJHklUGYTU&feature=youtu.be&ab_channel=ThriveLDN"
          bslUrl="https://www.youtube.com/watch?v=ccomKjHDgp0&ab_channel=ThriveLDN"
          thumbnail="dRYXgZvZNR"
          className={styles.video}
          />
        <VideoPlayer
          title="The Making of Connections 2024"
          url="https://www.youtube.com/watch?v=X8Cu-JvoXSc&ab_channel=ThriveLDN"
          bslUrl="https://www.youtube.com/watch?v=BAAUs5BfuKs&ab_channel=ThriveLDN"
          thumbnail="honOyOXGym"
          className={styles.video}
          />
      </section>

      <section className={styles.section}>
        <div className={styles.padding} />
        <article className={styles.panel}>
          <h3>The Connections Premiere & Gallery Viewing</h3>
          <p>The evening of Great Mental Health Day 2024 saw the premiere of Connections at City Lit in London. In addition to the premiere viewing of Connections, City Lit displayed photography captured throughout the Connections filming process in their gallery from January 22nd to January 28th.</p>
        </article>
      </section>
      
      <section className={styles.alt_section}>
        <article className={styles.panel}>
          <h3>Messages of Hope X Speaker Box Street Party</h3>
          <p>In order to ensure the success of Connections 2024, we knew from the outset that involving Speaker Box Street Party was essential. Speaker Box is an incredible community organisation that successfully uses dance as a powerful tool to make the World, and in particular, London, a better place.</p>
          <p>Speaker Box Street Party brought immense fun and positivity to one of our filming days and helped us create an incredible dance party in London’s beautiful Covent Garden. We were overwhelmed by the support that we received from everyone that got involved and danced with us for Connections 2024.</p>
        </article>
        <div className={styles.padding} />
      </section>

      <section className={styles.text_panel}>
        <p>We would like to give a special thanks to our incredible volunteers that helped us bring Connections 2024 together. From approaching strangers to ask for messages of hope, to dancing in the streets of London, they did it all! Thank you again because without you, Connections 2024 wouldn’t have been possible.</p>
      </section>

      <section className={styles.image_gallery}>
        <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/bl4m2UPETa`} alt="A mother and daughter holding a message of hope written in French" width={300} height={300}/>
        <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/5CnpFGoOdE`} alt="The Speaker Box group holding a whiteboard saying 'If you want to dance in the street, dance in the street!'" width={300} height={300}/>
        <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/uNbak2l7po`} alt="A dog next to a whiteboard that says 'Woof woof'" width={300} height={300}/>
        <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/H7cLgJSMml`} alt="A man in a sloth costume holding a whiteboard that says 'Keep going, everything will be okay :)'" width={300} height={300}/>
        <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/CdTHi5Z0WZ`} alt="Bethan Evans holding a whiteboard that says 'One day someone is going to need to hear your story.'" width={300} height={300}/>
        <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/2KlsLHgJsO`} alt="A father and daughter writing inside a heart on a whiteboard" width={300} height={300}/>
        <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/IkyP20lYFw`} alt="A family holding a sign with a smiley face and Christmas tree on it" width={300} height={300}/>
        <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/PtSSYegxG0`} alt="Two people working to film the Connections 2024 short video" width={300} height={300}/>
        <Image src={`${process.env.NEXT_PUBLIC_INTERNAL_BACKEND_ADDR}/images/90m1s9J70V`} alt="Two young people writing on a whiteboard" width={300} height={300}/>
      </section>
    </main>
  );
};
export default Connections2024;