import React from "react";
import faqtotal from "../assets/faqtotal.png";
import rightfaqpic from "../assets/rightfaqpic.png";
import redwalltodownload from "../assets/redwalltodownload.png";
import Faqparts from "./lilparts/Faqparts";
import weed1 from "../assets/weed1.png";
import weed2 from "../assets/weed2.png";

function Faq() {
  return (
    <div
      id="faq"
      className="z-30 batukbg2 flex flex-col justify-center items-center w-full relative "
    >
      <img src={faqtotal} alt="faq" className="w-96 lg:w-[1200px]" />
      <div className="two flex flex-col lg:flex-row justify-center items-center lg:items-start w-full">
        <div className="left flex justify-center items-center lg:w-[70%]">
          <Faqparts />
        </div>

        <div className="right flex justify-center items-center lg:w-[30%] ">
          <img src={rightfaqpic} alt="rightfaqpic" className="w-96" />
        </div>
      </div>

      <div className="weed flex justify-around items-center w-full mt-10 mb-10">
        <img
          src={weed1}
          alt="weed1"
          className="lg:w-60 w-48 absolutee bottom-0 left-0"
        />
        <img
          src={weed2}
          alt="weed2"
          className="lg:w-52 w-40 absolutee bottom-0 right-0"
        />
      </div>
    </div>
  );
}

export default Faq;
