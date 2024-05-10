import React from "react";

const Commonbtn = (props) => {
  return (
    <>
      <div className="btn_border position-relative">
        <button className="common_btn  ff-Eurostile fw-bold text-14 lh-14">{props.text}</button>
        <div className="commonbtn_line"></div>
      </div>
    </>
  );
};

export default Commonbtn;
