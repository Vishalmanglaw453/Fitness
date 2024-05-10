import React from "react";
import Commonbtn from "./Commonbtn";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="container d-flex  justify-content-between align-items-center py-13">
          <h1 className=" text-30 ff-Eurostile  mb-0 text-white">Logo</h1>
       <Commonbtn text="GET IN TOUCH"/>
       </div>
      </nav>
    </>
  );
};

export default Nav;
