import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./service.css";
import Image from "next/image";
import { brandList } from "@/utils/brands";
import { serviceList } from "@/utils/services";

export const metadata = {
  title: "Our Services",
  description: "Development, Design, Writing and Fast Delivery",
  alternates: {
    canonical: "/services",
  },
};

const Services = () => {
  return (
    <div>
      <section className="bg-gray h-100 vh-md-90 py-2 d-flex justify-content-center align-items-center  ">
        <div className="container py-2">
          <div className="row text-center">
            <h1 className="fs-1">Our Services</h1>
          </div>
          <div className="row my-4">
            {serviceList.length > 0 &&
              serviceList.map((service, key) => {
                return (
                  <div
                    className="mt-2 col-12 col-sm-6 col-md-3 text-center"
                    key={key}
                  >
                    <div className="bg-primary shadow text-white rounded-circle icon-container  d-flex justify-content-center align-items-center  m-auto">
                      <FontAwesomeIcon
                        className="img-fluid"
                        icon={service.icon}
                        width={50}
                      />
                    </div>
                    <label className="fs-4 fw-bold mt-2">{service.name}</label>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section className="bg-dark py-2 d-flex justify-content-center align-items-center  ">
        <div className="container py-2">
          <div className="row text-center">
            <h1 className="fs-1 text-white">Development</h1>
          </div>
          <div className="row my-2">
            {brandList.length > 0 &&
              brandList.map((brand, key) => {
                return (
                  <div className="col-6 col-sm-4 col-md-3 g-3" key={key}>
                    <div
                      className={`p-1 p-sm-3 d-flex flex-column bg-white shadow rounded border-5 border-${brand.border} border-start`}
                    >
                      <Image
                        className="img-fluid "
                        src={`/icons/${brand.imgName}`}
                        alt={`${brand.alt}`}
                        loading="eager"
                        height={300}
                        width={350}
                      />
                      <label className="text-center">{brand.name}</label>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
