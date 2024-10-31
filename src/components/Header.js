import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import dextools from "../assets/dextools.png";
import tg from "../assets/tg.png";

const menuItems = [
  { name: "HOME", href: "/home" },
  { name: "TOKENOMICS", href: "/home#tokenomics" },
  { name: "FAQ", href: "/home#faq" },
  { name: "LEADERBOARD", href: "/leaderboard" },
];

function Header() {
  return (
    <div className="flex justify-center items-center w-full z-50">
      <div className="backdrop-blur-xl sg-[#FFC03E] w-10/12 lg:py-3 py-1 flex flex-row justify-around items-center rounded-full border-black border-4 m-2">
        <a href="#home">
          <img
            src={logo}
            alt="logo"
            className="lg:w-20 w-16 transform transition-transform duration-300 hover:scale-95 active:scale-90"
          />
        </a>

        <div className="menu hidden lg:flex">
          <ul className="flex flex-row gap-4 adi">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-white text-4xl transform transition-transform duration-300 hover:scale-95 active:scale-90"
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="socials flex gap-4">
          {[
            { href: "https://t.me/batukpass", src: tg, alt: "tg" },
            {
              href: "https://x.com/batuk",
              src: twitter,
              alt: "twitter",
            },
            {
              href: "https://www.dextools.io/app/yourtoken",
              src: dextools,
              alt: "dextools",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.src}
                alt={social.alt}
                className="lg:w-20 w-12 transform transition-transform duration-300 hover:scale-95 active:scale-90"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
