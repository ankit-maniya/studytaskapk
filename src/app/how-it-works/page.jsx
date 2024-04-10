import React from "react";
import "./timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faCouch,
  faEdit,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const metadata = {
  title: "How We Operate",
  description: "Just 4 Easy Steps",
  alternates: {
    canonical: "/how-it-works",
  },
};

const HowItWorks = () => {
  return (
    <section className="bg-gray py-2">
      <div className="container py-2">
        <div className="row text-center">
          <h1 className="fs-1">How We Operate</h1>
          <label className="fs-2">Just 4 Easy Steps</label>
        </div>
        <div className="row my-2">
          <div className="col-md-12">
            <div className="main-timeline">
              <div className="timeline">
                <Link
                  href="/how-it-works"
                  className="timeline-content text-decoration-none"
                >
                  <div className="timeline-year">01</div>
                  <h3 className="title">Describe your needs</h3>
                  <p className="description">
                    Request to teach us what you need
                  </p>
                  <div className="timeline-icon">
                    <FontAwesomeIcon
                      icon={faComments}
                      className="text-dark img-fluid"
                      size="2x"
                      height={32}
                    />
                  </div>
                </Link>
              </div>
              <div className="timeline">
                <Link
                  href="/how-it-works"
                  className="timeline-content text-decoration-none"
                >
                  <div className="timeline-year">02</div>
                  <h3 className="title">Free Support</h3>
                  <p className="description">
                    We offer our support to students at no cost
                  </p>
                  <div className="timeline-icon">
                    <FontAwesomeIcon
                      icon={faHeart}
                      height={32}
                      size="2x"
                      className="text-dark img-fluid"
                    />
                  </div>
                </Link>
              </div>
              <div className="timeline">
                <Link
                  href="/how-it-works"
                  className="timeline-content text-decoration-none"
                >
                  <div className="timeline-year">03</div>
                  <h3 className="title">Free to choose</h3>
                  <p className="description">
                    Attend in-person classes or join live online platforms
                  </p>
                  <div className="timeline-icon">
                    <FontAwesomeIcon
                      icon={faCouch}
                      className="text-dark img-fluid"
                      size="2x"
                      height={32}
                    />
                  </div>
                </Link>
              </div>
              <div className="timeline">
                <Link
                  href="/how-it-works"
                  className="timeline-content text-decoration-none"
                >
                  <div className="timeline-year">04</div>
                  <h3 className="title">Revision of Assignment</h3>
                  <p className="description">
                    Preview and request revisions if needed
                  </p>
                  <div className="timeline-icon">
                    <FontAwesomeIcon
                      icon={faEdit}
                      size="2x"
                      height={32}
                      className="text-dark img-fluid"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
