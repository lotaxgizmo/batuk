import React from "react";
import burnbg from "../assets/burnbg.png";
import peedude from "../assets/peedude.png";
import tokenomics from "../assets/tokenomics.png";

function Tokenomics() {
  return (
    <div
      id="tokenomics"
      className="batukbg3 overflow-clip flex justify-center items-center flex-col pt-5"
    >
      <img
        src={tokenomics}
        alt=""
        className="max-w-[1500px] lg:w-[1000px] w-80 lg:self-end"
      />
      <img src={peedude} alt="" />
    </div>
  );
}

export default Tokenomics;
