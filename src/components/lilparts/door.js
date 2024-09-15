import React, { useState, useEffect } from "react";
import doorfront from "../../assets/doorfront.png";
import doorback from "../../assets/doorback.png";

function Door() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const frontRotation = Math.min(scrollY / 5, 90); // Front door rotates up to 90 degrees
  const backRotation =
    scrollY > 450 ? Math.max(90 - (scrollY - 450) / 5, 0) : 90; // Back door starts from 90 degrees and rotates to 0 degrees

  return (
    <div className="absolute lg:h-[50vh] h-[90vw]  w-full max-w-[37vh] mx-auto lg:mt-[3vh] mt-[-1vh] lg:mr-[1vh] mr-[1vh]">
      <div
        className="absolute lg:h-[26vw] h-full w-full z-20"
        style={{
          transformOrigin: "left center",
          transform: `rotateY(${frontRotation}deg)`,
          backfaceVisibility: "hidden",
        }}
      >
        <img src={doorfront} alt="Front Door" className="z-20 h-full w-full" />
      </div>
      <div
        className="absolute lg:h-[26vw] h-full w-full z-20"
        style={{
          transformOrigin: "right center",
          transform: `rotateY(${backRotation}deg)`, // Inverted rotation
          backfaceVisibility: "hidden",
          left: "-100%",
        }}
      >
        <img src={doorback} alt="Back Door" className="z-20 h-full w-full" />
      </div>
    </div>
  );
}

export default Door;
