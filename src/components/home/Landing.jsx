import React from "react";
import NFT from "../../images/nft.png";
import backgroundImage from "../../images/bg-shape-1.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";

const Landing = () => {
  Aos.init({
    duration: 1200,
  });

  return (
    <section
      id="section-hero"
      aria-label="section"
      className="no-top no-bottom vh-100"
      data-bgimage="url(images/bg-shape-1.jpg) bottom"
      style={{ background: `url(${backgroundImage}) bottom / cover` }}
    >
      <div className="v-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="spacer-single"></div>
              <h6>
                <span
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="text-uppercase id-color-2"
                >
                  Ultraverse Market
                </span>
              </h6>
              <div className="spacer-10"></div>
              <h1 data-aos="fade-up" data-aos-delay="600">
                Create, sell or collect digital items.
              </h1>
              <p data-aos="fade-up" data-aos-delay="800" className="lead">
                Unit of data stored on a digital ledger, called a blockchain,
                that certifies a digital asset to be unique and therefore not
                interchangeable
              </p>
              <div className="spacer-10"></div>
              <Link
                data-aos="fade-up"
                data-aos-delay="1000"
                className="btn-main lead"
                to="/explore"
              >
                Explore
              </Link>
              <div className="mb-sm-30"></div>
            </div>
            <div className="col-md-6 xs-hide">
              <img
                data-aos="fade-in"
                data-aos-delay="1200"
                src={NFT}
                className="lazy img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
