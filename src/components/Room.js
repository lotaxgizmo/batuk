import React from "react";
import section2 from "../assets/section2.png";
import Header from "./Header";

function Room() {
  return (
    <div className="h-[1000px]s relative z-[1] overflow-clip">
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
