import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import Room from "./components/Room";
import Batuk from "./components/Batuk";
import Whome from "./components/Whome";
import Smokesection from "./components/Smokesection";
import Faq from "./components/Faq";
import Tokenomics from "./components/Tokenomics";
import Header from "./components/Header";
import Footer from "./components/Footer";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;

    const scrollTrigger = ScrollTrigger.create({
      trigger: heroElement,
      start: window.innerWidth < 768 ? "bottom-=100" : "bottom+=-50",
      end: "bottom",
      onEnter: () => gsap.to(heroElement, { opacity: 0 }),
      onLeaveBack: () => gsap.to(heroElement, { opacity: 1 }),
    });

    return () => scrollTrigger.kill(); // Clean up the scroll trigger
  }, []);

  return (
    <div className="App ">
      <div ref={heroRef} className="relative z-20">
        <Hero />
      </div>

      <div className="relative  overflow-clip ">
        <div className="header fixed bottom-0 left-0 w-full z-[100]">
          <Header />
        </div>

        <Room />
        <Batuk />
        <Whome />
        <Smokesection />
        <Faq />
        <Tokenomics />
        <Footer />
      </div>
    </div>
  );
}

export default App;
