import React from "react";
import section2 from "../assets/section2.png";
import Header from "./Header";
import Showlights from "./lilparts/showlights";
function Room() {
  return (
    <div className="h-[1000px]s relative z-[1] overflow-clipd">
      <div className="absolute top-0 left-0 w-full  h-full z-[2] opacity-25 lg:opacity-100">
        <Showlights />
      </div>
      <div className="header absolute bottom-0 left-0 w-full z-[100]"></div>
      <img
        src={section2}
        alt=""
        className=" relative room w-screen lg:h-screen ab z-[1]"
      />
    </div>
  );
}

export default Room;
