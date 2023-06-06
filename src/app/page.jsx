"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <header className="masthead">
      <div className="container vh-100 d-block d-lg-flex justify-content-center align-items-center">
        <div className="row m-0 p-0 mt-2">
          <div className="col-12  col-sm-6 d-flex justify-content-center align-items-center order-sm-1">
            <Image
              className="img-fluid "
              src="/completed_tasks.png"
              alt="test"
              loading="eager"
              height={300}
              width={350}
            />
          </div>
          <div className="col-12 col-sm-6 text-center text-sm-start order-xs-2">
            <div className="fs-1  fw-bold text-uppercase mb-2 text-primary">
              Will you write my Assignments for me?
            </div>
            <div className="fs-2 mb-2 fw-bold text-dark text-center text-sm-start">
              Yes, we will
            </div>
            <div className="mb-5 fs-4 fs-5-sm text-secondary text-center text-sm-start ">
              Discounted prices + Trustworthy writers = Happy clients 😊
            </div>
            <Link
              className="btn btn-primary btn-xl text-uppercase shadow"
              href="/contactus"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
