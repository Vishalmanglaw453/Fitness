import React from "react";
import fitness from "../images/png/socer-fitness-img.webp";
const Soccer = () => {
  return (
    <>
      <section className=" soccer_fitness_bg">
        <div className="container py-50">
          <div className=" d-flex flex-md-row flex-column  gap-5">
              <div data-aos="zoom-in" className=" d-flex align-items-center ">
                <h3 className="soccer_heading ff-Eurostile text-capitalize fw-bold text-30 lh-49 mb-0 text-black">
                  With the right knowledge maintaining and improving your fitness
                  becomes effortless and enjoyable. Stop wasting time you don’t
                  have!
                </h3>
              </div>
              <div data-aos="zoom-in" className=" d-flex justify-content-center">
                <img className=" " height={472} src={fitness} alt="soccer" />
              </div>
          </div>
        </div> 
      </section>
    </>
  );
};

export default Soccer;
