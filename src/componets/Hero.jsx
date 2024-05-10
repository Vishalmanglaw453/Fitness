import React from "react";
import Nav from "../common/Navbaar";
import hyperimg from "../images/png/hyper_img.webp";
const Hero = () => {
  return (
    <>
      <header className="hero-bg-img">
        <Nav />

        <div className="container pt-109 pb-96">
          <div className="row">
            <div data-aos="zoom-in" className="col-md-8 col-12 d-flex align-items-center order-md-1 order-2">
              <h2 className=" hero_heading mb-0 fw-bold text-45 lh-59 text-white ff-Eurostile">
                Get the EBook that reveals the{" "}
                <span className=" color-yellow">7 fitness myths</span> that are
                holding you back from experiencing top-level fitness
              </h2>
            </div>
            <div data-aos="zoom-in" className="col-md-4 col-12 order-1 order-md-2 d-flex justify-content-center justify-content-lg-start">
              <img src={hyperimg} alt="hyper" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
