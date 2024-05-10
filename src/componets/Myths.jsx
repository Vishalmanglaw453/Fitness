import React from "react";
import ipadpro from "../images/png/iPadPro.webp";

const Myths = () => {
  return (
    <>
      <section className=" download_bg">
        <div className="container pt-312">
          <div data-aos="zoom-in" className="avoid_card avoid_bg_img position-relative">
            <div className=" d-flex flex-xl-row flex-column">
              <div className=" d-flex flex-column align-items-center   order-xl-1 order-2">
                <div>
                  <h2 className=" ff-Eurostile fw-bold text-45 lh-59 text-black mb-0">
                    7 Fitness Myths{" "}
                    <span className=" d-lg-block">to Avoid</span>
                  </h2>
                  <p className=" ff-Manrope fw-normal mt-2 text-18 lh-28 text-black mb-0">
                    Grab your free copy now!
                  </p>
                  <div className=" d-flex">
                    <div className="btn_border border-black mt-30 position-relative">
                      <button className="common_btn bg-black text-white  ff-Eurostile fw-bold text-14 lh-14">
                        Download For Free
                      </button>
                      <div className="commonbtn_line bg-yellow "></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" ipad_postion order-xl-2 order-1 d-flex justify-content-center">
                <img src={ipadpro} alt="ipadpro" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Myths;
