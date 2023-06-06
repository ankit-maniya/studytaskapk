import React from "react";
import "./timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faCouch,
  faCreditCard,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
                    Enter necessary information into the order form
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
                  <h3 className="title">Provide payment details</h3>
                  <p className="description">
                    Choose one of the dozen available payment methods
                  </p>
                  <div className="timeline-icon">
                    <FontAwesomeIcon
                      icon={faCreditCard}
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
                  <h3 className="title">Relax and enjoy yourself</h3>
                  <p className="description">
                    Let our team take care of your papers while you res
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
                  <h3 className="title">Download the Assignment</h3>
                  <p className="description">
                    Preview and approve the Assignment if you don’t require
                    revisions
                  </p>
                  <div className="timeline-icon">
                    <FontAwesomeIcon
                      icon={faDownload}
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
