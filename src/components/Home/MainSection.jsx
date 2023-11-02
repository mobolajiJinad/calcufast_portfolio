import { useState, useEffect } from "react";

import MainProfile from "../../assets/CalcufastProfileMain.png";

const MainSection = () => {
  return (
    <section
      className="bg-slate-900 px-1 mt-[88px]"
      style={{ background: "linear-gradient(200deg, #141518 50%, #111215 50%)" }}
    >
      <h1
        style={{ fontFamily: "'Bungee Outline', cursive" }}
        className="text-5xl sm:text-7xl lg:text-9xl leading-10 uppercase font-extrabold opacity-10 text-gray-400 text-center py-8"
      >
        Calcufast
      </h1>

      <div className="flex flex-wrap justify-between items-center md:px-[5%]">
        <div className="mx-auto w-11/12 md:w-[40%] md:h-3/4 h-4/5 bg-[#11141b] rounded-3xl">
          <img src={MainProfile} alt="Main profile picture" className="w-full" />
        </div>

        <div className="w-full md:w-[60%]">
          <h4 className="py-4 m-auto w-4/5 md:text-3xl lg:text-4xl text-center leading-10 text-white text-3xl capitalize">
            Hello, my name is calcufast
          </h4>

          <TextChangingComponent />
        </div>
      </div>

      <aside className="mx-auto my-2 md:w-3/4 flex justify-between items-center flex-wrap p-2">
        <ExperienceCard text1="3" text2="years of experience" />

        <div className="w-0.5 h-36 bg-gradient-to-r from-[#FF4D54] to-[#007FFF]"></div>

        <ExperienceCard text1="750+" text2="impressions made" />
      </aside>
    </section>
  );
};

const TextChangingComponent = () => {
  const phrases = [
    "help you understand unconventional education and learning",
    "am best friend to students and teachers.",
    "influence for brands.",
    "raise and mentor scholarpreneurs",
    "am an edupreneur.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (textIndex < phrases[currentIndex].length) {
        setCurrentText((prevText) => prevText + phrases[currentIndex][textIndex]);
        setTextIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setTextIndex(0);
          setCurrentText("");
          setCurrentIndex((prevIndex) =>
            prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentIndex, textIndex]);

  return (
    <h5 className="text-2xl text-white text-center pl-[10%] lg:pl-[15%]">
      I{" "}
      <span
        style={{
          background: "linear-gradient(90deg, #FF4D54 0%, #007FFF 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {currentText}
      </span>
    </h5>
  );
};

const ExperienceCard = ({ text1, text2 }) => {
  const words = text2.split(" ");

  const upperText2 = words.shift();
  const lowerText2 = words.join(" ");

  return (
    <div className="pt-3 pb-4 w-[47%] flex justify-center items-center flex-wrap">
      <h3 className="text-4xl mx-1 md:text-6xl text-white inline text-center">{text1}</h3>
      <span className="text-xs text-white uppercase inline-block">
        {upperText2} <br />
        {lowerText2}
      </span>
    </div>
  );
};

export default MainSection;
