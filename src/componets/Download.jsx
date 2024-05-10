import React from "react";
import Commonbtn from "../common/Commonbtn";
import ellipes from "../images/png/download_ellipes.webp"
const Download = () => {
  return (
    <>
      <section className="download_bg position-relative z-1">
        <div className="container pt-182 pb-1">
          <div data-aos="zoom-in" className="download_card position-relative ">
            <p className=" mb-0 z-1 text-sm-center ff-Manrope fw-normal text-18 lh-28 color-grey">
              If you’re reading this, most likely you’re in search of the keys
              that unlock world class performance…..performance that can get you
              to the next level of your playing career …. And let you create a
              lifestyle that you’ve always dreamed of… right?
            </p>
            <p className=" mb-0 z-1 mt-3 text-sm-center ff-Manrope fw-normal text-18 lh-28 color-grey">
              Well there’s a big obstacle in your way…… one that you most likely
              don’t even notice….. like a hacker whose stolen your starting
              spot…..and you have no control over it.
            </p>
            <p className=" mb-0 z-1 mt-3 text-sm-center ff-Manrope fw-normal text-18 lh-28 color-grey">
              That annoying little hacker is simply a lack of knowledge. Sounds
              ridiculous, right? Stick with me here…. If I knew back then (in my
              playing days) what I know now, I would probably still be playing
              instead of writing this eBook.
            </p>
            <p className=" mb-0 z-1 mt-3 text-sm-center ff-Manrope fw-normal text-18 lh-28 color-grey">
              Early on in my career I realized that in order to get to the next
              level I needed to get stronger, pack on some lean muscle, improve
              my endurance, increase my sprint speed & develop robust change of
              direction qualities.
            </p>
            <p className=" mb-0 z-1 mt-3 text-sm-center ff-Manrope fw-normal text-18 lh-28 color-grey">
              Problem was... I had no idea how to improve these qualities. I
              needed help. I spent majority of my time researching on social
              media platforms & doing workouts that got me minimal results.
            </p>
            <p className=" mb-0 z-1 mt-3 text-sm-center ff-Manrope fw-normal text-18 lh-28 color-grey">
              Once I figured out the secret sauce to improving all the qualities
              mentioned above, getting fit became effortless. No more stress,
              disappointment, anger or frustration. I want you to feel that too.
              This short eBook can provide you with the tools you need to start
              getting better results out of your current programs, while doing
              less not more.
            </p>
            <div className=" d-flex justify-content-center pt-29">
              <Commonbtn text="Download Now" />
            </div>
            <div className=" d-lg-block d-none blur_ellipes"></div>
          </div>
        </div>
        <div className="downmolad_ellipe d-lg-block d-none"><img src={ellipes} alt="downmolad" /></div>
      </section>
    </>
  );
};

export default Download;
