// "use client";

import Script from "next/script";
import dynamic from 'next/dynamic'

import { Navbar } from "@/components/navbar/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "./globals.css";

import { Inter } from "next/font/google";
// import Footer from "@/components/footer/Footer";
// import { useEffect } from "react";


const CrispWithNoSSR = dynamic(
  () => import('@/components/Chat/CrispChat'),
  { ssr: false }
)

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://studytaskapk.vercel.app/",
  title: {
    default: "Will you write my assignments for me?",
    template: "%s | StudyTask",
  },
  description:
    "Yes, we will - Discounted prices + Trustworthy writers = Happy clients 😊",
};

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   typeof document !== undefined ? require("bootstrap") : null;
  // }, []);

  return (
    <html lang="en">
      <body className={inter.className + "text-white"}>
        <CrispWithNoSSR />
        <Navbar />
        {children}
        {/* <Footer /> */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossorigin="anonymous"
        ></Script>

      </body>
    </html>
  );
}
