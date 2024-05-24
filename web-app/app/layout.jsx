import React from "react";

import "@/fonts/fonts.css";
import "@/app/global.css";

// Font Awesome Config
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Page metadata
export const metadata = {
  title: {
    template: "%s | Messages of Hope",
    default: "Messages of Hope",
    absolute: "Messages of Hope"
  },
  description: "Collecting your messages of hope and spreading them far and wide.",
  keywords: ["Mental Health", "Mental Illness", "BPD", "MOH", "Messages of Hope", "Hope"],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  }
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
};
export default RootLayout;
