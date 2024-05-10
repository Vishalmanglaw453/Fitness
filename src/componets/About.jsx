import React from "react";
import author from "../images/png/author.webp";
import rightellipe from "../images/png/about_ellipes.webp"
import leftellipe from "../images/png/about_left_ellipes.webp"
import about_BALL from "../images/svg/author_bol.svg"
const About = () => {
  return (
    <>
      <section className=" download_bg position-relative">
        <div className="container pt-115">
          <div className="row">
            <div data-aos="zoom-in" className="col-md-6 col-12 d-flex justify-content-center justify-content-md-start">
            <div className=" position-relative"> <img src={author} alt="author" />
            <div className=" about_BALL d-lg-block d-none"><img src={about_BALL} alt="ball" /></div></div> 
            </div>
            <div data-aos="zoom-in" className="col-md-6 col-12 d-flex mt-md-0 mt-4 justify-content-md-end justify-content-center align-items-end">
              <div className="author_pera">
                <h3 className="  ff-Eurostile fw-bold text-30 lh-37 color-grey">
                  About the<span className=" color-yellow"> Author</span>
                </h3>
                <p className=" ff-Manrope fw-normal text-18 lh-28 color-grey mb-0 mt-3">
                  Francesco is a Pro fitness coach currently working as head of
                  Sport Science for Toronto FC Academy. He is a registered
                  nutritionist, certified strength and conditioning specialist,
                  holds a Master’s in exercise science and is a national level
                  soccer coach.
                </p>
                <p className=" ff-Manrope fw-normal text-18 lh-28 color-grey mb-0 mt-2">
                  He has been a personal performance coach to a 1000+ elite
                  level footballers ranging from youth internationals all the
                  way to top level pro’s
                </p>
                <p className=" ff-Manrope fw-normal text-18 lh-28 color-grey mb-0 mt-2">
                  Francesco believes every footballer should have access to a
                  rock-solid S&C program alongside a quality nutrition plan to
                  improve the chances of crushing their genetic athletic
                  potential and becoming the best version of themselves.
                </p>
                <a href="" className=" ff-Eurostile fw-bold text-26 lh-33 color-grey gap-3 d-flex align-items-center mt-30">
                  <span>
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.1 17.5C23.1 18.6076 22.7716 19.6903 22.1562 20.6112C21.5409 21.5321 20.6663 22.2499 19.643 22.6737C18.6198 23.0976 17.4938 23.2085 16.4075 22.9924C15.3212 22.7763 14.3234 22.243 13.5402 21.4598C12.757 20.6766 12.2237 19.6788 12.0076 18.5925C11.7915 17.5062 11.9024 16.3802 12.3263 15.357C12.7501 14.3337 13.4679 13.4591 14.3888 12.8438C15.3097 12.2284 16.3924 11.9 17.5 11.9C18.9838 11.9046 20.4055 12.4961 21.4547 13.5453C22.5039 14.5945 23.0954 16.0162 23.1 17.5ZM35 9.8V25.2C35 27.7991 33.9675 30.2918 32.1296 32.1296C30.2918 33.9675 27.7991 35 25.2 35H9.8C7.20088 35 4.70821 33.9675 2.87035 32.1296C1.0325 30.2918 0 27.7991 0 25.2V9.8C0 7.20088 1.0325 4.70821 2.87035 2.87035C4.70821 1.0325 7.20088 0 9.8 0H25.2C27.7991 0 30.2918 1.0325 32.1296 2.87035C33.9675 4.70821 35 7.20088 35 9.8ZM25.9 17.5C25.9 15.8386 25.4073 14.2146 24.4843 12.8332C23.5613 11.4518 22.2494 10.3752 20.7145 9.73941C19.1796 9.10364 17.4907 8.93729 15.8612 9.2614C14.2318 9.58552 12.7351 10.3855 11.5603 11.5603C10.3855 12.7351 9.58552 14.2318 9.2614 15.8612C8.93729 17.4907 9.10364 19.1796 9.73941 20.7145C10.3752 22.2494 11.4518 23.5613 12.8332 24.4843C14.2146 25.4073 15.8386 25.9 17.5 25.9C19.7278 25.9 21.8644 25.015 23.4397 23.4397C25.015 21.8644 25.9 19.7278 25.9 17.5ZM28.7 8.4C28.7 7.98466 28.5768 7.57865 28.3461 7.2333C28.1153 6.88796 27.7874 6.6188 27.4036 6.45985C27.0199 6.30091 26.5977 6.25932 26.1903 6.34035C25.783 6.42138 25.4088 6.62139 25.1151 6.91508C24.8214 7.20877 24.6214 7.58295 24.5403 7.99031C24.4593 8.39767 24.5009 8.81991 24.6599 9.20364C24.8188 9.58736 25.088 9.91534 25.4333 10.1461C25.7786 10.3768 26.1847 10.5 26.6 10.5C27.157 10.5 27.6911 10.2788 28.0849 9.88492C28.4787 9.4911 28.7 8.95695 28.7 8.4Z"
                        fill="#FCE500"
                      />
                    </svg>
                  </span>
                  <span>Hypervive</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about_rightellipe d-lg-block d-none">
          <img src={rightellipe} alt="rightellipe" />
        </div>
        <div className="about_leftellipe d-lg-block d-none">
          <img src={leftellipe} alt="rightellipe" />
        </div>
      </section>
    </>
  );
};

export default About;
