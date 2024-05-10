import React from "react";
import inner from "../images/png/inner-laptop.webp";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Commonbtn from "../common/Commonbtn";
import ellipes from "../images/png/inner_ellipes.webp"
const Inner = () => {
  const [inputvalue, setValue] = useState({
    first: "",
    second: "",
  });

  const addvalue = (e) => {
    setValue({ ...inputvalue, [e.target.name]: e.target.value });
  };
  function fromsubmit(e) {
    e.preventDefault();
    setValue({ first: "", second: "" });
    Swal.fire({
      title: "Good job!",
      text: "Your task has been added !",
      icon: "success",
    });

    const serviceID = "service_cown3sg";
    const templateID = "template_trxy6xw";
    const userID = "_1XTPe6CahrlkVPya";
    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
      },
      (error) => {
        console.error("Email failed to send!", error.text);
      }
    );
  }
  return (
    <>
      <section className="download_bg position-relative">
        <div className="container pt-151 pb-168">
          <div className="row">
            <div data-aos="zoom-in" className="col-md-6 col-12 d-flex justify-content-center position-relative">
              <img className=" w-100" src={inner} alt="laptop" />
              <div className=" inner_ellipes2 d-lg-block d-none"></div>
            </div>
            <div data-aos="zoom-in" className="col-md-6 col-12 d-flex flex-column justify-content-center">
              <h4 className=" mb-0 ff-Eurostile fw-bold text-30 lh-37 text-white text-capitalize">
                Let me know where{" "}
                <span className=" color-yellow">you want me to send it</span>
              </h4>
              <form onSubmit={fromsubmit} className=" pt-29 d-flex flex-column">
                <input
                  name="first"
                  value={inputvalue.first}
                  className="name_input  ff-Manrope text-16 lh-21 fw-normal text-white opacity-50"
                  type="text"
                  placeholder="Name"
                  onChange={addvalue}
                  required
                />
                <input
                  name="second"
                  value={inputvalue.second}
                  className="name_input  ff-Manrope text-16 lh-21 mt-13 fw-normal text-white opacity-50"
                  type="email"
                  placeholder="Email"
                  onChange={addvalue}
                  required
                />
               <div className="  d-flex  mt-54"><Commonbtn text="Send It Here!"/></div>
              </form>
            </div>
          </div>
        </div>
        <div className=" inner_ellipes d-lg-block d-none"><img src={ellipes} alt="ellipes" /></div>
        
      </section>
    </>
  );
};

export default Inner;
