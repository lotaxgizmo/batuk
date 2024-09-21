import React, { useState } from "react";
import close from "../../assets/close.png";
import backstripes from "../../assets/backstripes.png";

const faqData = [
  {
    question: "WHAT IS BATUK?",
    answer:
      "Batuk is a Young Carefree Punjabi Bear Trying to Make It Big & MOG The world!",
  },
  {
    question: "WHAT DOES HE REPRESENT?",
    answer:
      "Batuk represents tokenized winning on SOLANA. Join Batuk in his wild journey of online gambling, shitcoin trading, and other degenerate shenanigans.",
  },
  {
    question: "WHY SHOULD ANYONE CARE?",
    answer:
      "Because Batuk loves online gambling. Batuk loves trading shitcoins. Batuk smokes weed. Batuk has insomnia. Batuk spends too much time on crypto twitter. Batuk collects sneakers. Batuk is a fan of John McAffe. Batuk has HDHD. Batuk is sometimes retarded. Batuk is aucustic. Batuk wants to make it. Batuk wants to stop getting rekted… Need more reasons why, anon?",
  },

];

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleFAQ}
      className="cursor-pointer relative faqbox border-2 border-black rounded-[35px] bg-[#EA3859] p-10 lg:w-[900px] w-11/12 mb-4 shadow-lg"
      style={{
        backgroundImage: `url(${backstripes})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 10px 0px #000000", // Added thick shadow at the bottom
      }}
    >
      <div className="flex justify-between items-center ">
        <h2 className="text-white lg:text-5xl text-3xl" onClick={toggleFAQ}>
          {question}
        </h2>
        <button onClick={toggleFAQ}>
          <img
            src={close}
            alt="close"
            className={`lg:w-14 w-20 transform transition-transform duration-500 ${isOpen ? "rotate-45" : ""
              }`}
          />
        </button>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-1500 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        {isOpen && (
          <div className="undertext text-white text-xl jost">{answer}</div>
        )}
      </div>
    </div>
  );
}

function Faqparts() {
  return (
    <div className="flex flex-col justify-center items-center">
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default Faqparts;
