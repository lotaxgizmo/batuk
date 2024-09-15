import React, { useEffect, useState } from "react";
import batukboard from "../assets/batukboard.png";
import cashleft from "../assets/cashleft.png";
import cashright from "../assets/cashright.png";
import bigbatuk from "../assets/bigbatuk.png";
import telegram from "../assets/telegram.png";
import buy from "../assets/buy.png";
import ca from "../assets/ca.png";
import walltodownload from "../assets/walltodownload.png";

function Batuk() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="z-[3] flex flex-col justify-center items-center batukbg pb-20">
      <img
        src={batukboard}
        alt="batukboard"
        className="z-[3] w-10/12  mt-10 z-1d0"
      />

      <div
        className="cash flex flex-row justify-between items-center w-full lg:-mt-40 -mt-32"
        style={{
          transform:
            window.innerWidth < 768
              ? `translateY(${scrollY * 0.0}px)` // Different multiplier for mobile view
              : `translateY(${scrollY * 0.1}px)`, // Adjust the multiplier for speed
        }}
      >
        <img
          src={cashleft}
          alt="cashleft"
          className="lg:w-[450px] w-1/2  mt-10 lg:ml-0 -ml-10"
        />
        <img
          src={cashright}
          alt="cashright"
          className="lg:w-[450px] w-1/2  mt-10 lg:mr-0 -mr-10"
        />
      </div>

      <div className="btns z-10 flex flex-row lg:justify-between justify-around items-center dmb-10 w-full lg:w-10/12  ">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={buy}
            alt="buy"
            className="lg:w-60 w-40 transform transition-transform duration-300 hover:scale-95 active:scale-90"
          />
        </a>
        <a
          href="https://t.me/batukpass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={telegram}
            alt="telegram"
            className="lg:w-60 w-40 transform transition-transform duration-300 hover:scale-95 active:scale-90"
          />
        </a>
      </div>

      <img
        src={ca}
        alt="ca"
        className=" lg:w-[700px] w-10/12 z-30 mt-5 lg:-mt-0 transform transition-transform duration-300 hover:scale-95 active:scale-90"
        onClick={() => {
          navigator.clipboard.writeText("Text to be copied");
          alert("Text copied to clipboard!");
        }}
        style={{ cursor: "pointer" }}
      />

      <img
        src={bigbatuk}
        alt="bigbatuk"
        className="w-10/12 lg:-mt-[800px] -mt-[300px] mb-14 lg:mb-0"
        style={{
          transform:
            window.innerWidth < 768
              ? `translateY(${scrollY * 0.0}px)` // Different multiplier for mobile view
              : `translateY(${scrollY * 0.05}px)`, // Adjust the multiplier for speed
        }}
      />
    </div>
  );
}

export default Batuk;
