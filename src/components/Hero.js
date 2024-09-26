import React from "react";
import Door from "./lilparts/door";
import Housebg from "../assets/housebgg.png";
import MHousebg from "../assets/mobilehousebg.png";
import section2 from "../assets/section2.png";
import enterbatuk from "../assets/enterbatuk.png";

function Hero() {
  return (

    <div className="z-10 door fixed flex w-full  justify-center items-center" id="home">


      <a href="/home" className="absolute z-20 lg:bottom-32 bottom-10">
        <img src={enterbatuk} className="w-96 transition-transform duration-300 hover:scale-105" alt="Enter Batuk's World" />
      </a>


      <img
        src={Housebg}
        alt=""
        className=" z-10 max-w-none w-[1200px]   lg:max-w-auto lg:w-screen lg: h-screen  shidden lg:block"
      />


    </div>
  );
}

export default Hero;
