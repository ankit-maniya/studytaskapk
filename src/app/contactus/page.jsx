import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <header className="masthead">
      <div className="container">
        <div className="row m-0 p-0 my-2">
          <h1 className="fs-1">Our contacts</h1>
          <label className="fs-2">Reach us by any means available:</label>
        </div>
        <div className="row m-0 p-0 my-4">
          <div className="col-12 col-sm-6">
            <Image
              className="img-fluid"
              src="/email_delivery_new.png"
              alt="test"
              loading="lazy"
              height={300}
              width={350}
            />
          </div>
          <div className="col-12 col-sm-6 bg-purple text-start d-flex justify-content-start align-items-center rounded-4">
            <div className="p-2 p-sm-5 text-white ">
              <h3>E-mail</h3>
              <label htmlFor="email">
                <a
                  href="mailto:support@studytasks.online"
                  className="text-white"
                >
                  support@studytasks.online
                </a>
              </label>
            </div>
          </div>
        </div>
        <div className="row m-0 p-0 my-2">
          <label className="fs-2">
            Now is the time to contact and get the professional writing help you
            need. We really want to help you!
          </label>
        </div>
        <div className="row m-0 p-0 my-4">
          <div className="col-12 col-sm-6">
            <Image
              className="img-fluid "
              src="/contact_us_new.png"
              alt="test"
              loading="lazy"
              height={300}
              width={350}
            />
          </div>
          <div className="col-12 col-sm-6 bg-pink text-start d-flex justify-content-start align-items-center rounded-4">
            <div className="p-2 p-sm-5 text-white">
              <h3>Phone No</h3>
              <label htmlFor="phone">
                <a href="tel:+12668832602" className="text-white">
                  +1 266 883 2602
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactUs;
