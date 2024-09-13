import React from "react";
import whotext from "../assets/whotext.png";
import whobg from "../assets/whobg.png";
import whobgmobile from "../assets/whobgmobile.png";
import whobuy from "../assets/whobuy.png";
import restbatuk from "../assets/restbatuk.png";

function Whome() {
  return (
    <div
      id="about"
      className="z-20 relative whomebg flex flex-col lg:flex-row  justify-center items-center w-full min-h-[140vh] lg:px-24 lg:-mt-48 -mt-56 p-4"
      style={{
        backgroundImage: `url(${
          window.innerWidth < 1024 ? whobgmobile : whobg
        })`, // {{ edit_1 }}
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="left lg:w-1/2 flex flex-col justify-center items-center">
        <img
          src={whotext}
          alt="Who Text"
          className="w-72 lg:w-[500px] mt-10 lg:mt-0"
        />

        <p className="text-[#E3F1D0] text-center text-2xl lg:text-4xl ">
          Meet Batuk, a 22-year-old jeet bear, red eyes, and a knack for chaos.
          After a wild ride of gambling, crypto, and questionable life choices,
          he's here to make it big—or go down trying. Join the fun, laugh at his
          misadventures, and see if you can ride the memecoin wave with Batuk.
          Let's get rich or at least have a blast trying!
        </p>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={whobuy}
            alt="Buy Now"
            className="w-96 lg:w-[700px] mt-4 transform transition-transform duration-300 hover:scale-95 active:scale-90"
          />
        </a>
      </div>

      <div className="right lg:w-1/2 flex lg:justify-end items-center">
        <img
          src={restbatuk}
          alt="Rest Batuk"
          className="w-80 lg:w-[500px] my-10 lg:my-0"
        />
      </div>
    </div>
  );
}

export default Whome;
