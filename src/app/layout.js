"use client";

import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../../scss/main.css";

import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    typeof document !== undefined ? require("bootstrap") : null;
  }, []);

  return (
    <html lang="en">
      <body className={inter.className + "text-white"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}