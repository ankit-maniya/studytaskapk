"use client";

import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <header className="masthead">
      <div className="container vh-90 d-flex flex-column justify-content-center align-items-center">
        <div className="masthead-subheading">Welcome To Our Studio!</div>
        <div className="masthead-heading text-uppercase">
          Its Nice To Meet You
        </div>
        <Link
          className="btn btn-primary btn-xl text-uppercase"
          href="/contactus"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Home;
