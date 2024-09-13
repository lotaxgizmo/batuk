import React from "react";
import Door from "./lilparts/door";
import Housebg from "../assets/housebg.png";
import MHousebg from "../assets/mobilehousebg.png";
import section2 from "../assets/section2.png";

function Hero() {
  return (
    <div
      id="home"
      className="z-10 h-[1500px] bg-black flex flex-col relative items-center"
    >
      <div className="z-10 door fixed flex  justify-center items-center">
        <Door />
        <img
          src={Housebg}
          alt=""
          className=" z-10 max-w-none w-[1200px]   lg:max-w-auto lg:w-screen lg:h-screen  hidden lg:block"
        />
        <img
          src={MHousebg}
          alt=""
          className="z-10 max-w-none w-[1300px]   lg:max-w-auto lg:w-screen lg:h-screen  block lg:hidden -mt-20"
        />
        <div className="bg-black w-full h-full absolute top-0 left-0 z-0"></div>
      </div>
    </div>
  );
}

export default Hero;
