import { useState, useEffect } from "react";

import MainProfile from "../../assets/CalcufastProfileMain.png";

const MainSection = () => {
  return (
    <section
      className="mt-[88px] bg-slate-900 px-1"
      style={{
        background: "linear-gradient(200deg, #141518 50%, #111215 50%)",
      }}
    >
      <h1
        style={{ fontFamily: "'Bungee Outline', cursive" }}
        className="py-8 text-center text-5xl font-extrabold uppercase leading-10 text-gray-400 opacity-10 sm:text-7xl lg:text-9xl"
      >
        Calcufast
      </h1>

      <div className="flex flex-wrap items-center justify-between md:px-[5%]">
        <div className="mx-auto h-4/5 w-11/12 rounded-3xl bg-[#11141b] md:h-3/4 md:w-[40%]">
          <img
            src={MainProfile}
            alt="Main profile picture"
            className="w-full"
          />
        </div>

        <div className="w-full md:w-[60%]">
          <h4 className="m-auto w-4/5 py-4 text-center text-3xl capitalize leading-10 text-white md:text-3xl lg:text-4xl">
            Hello, my name is calcufast
          </h4>

          <TextChangingComponent />
        </div>
      </div>

      <aside className="mx-auto my-2 flex flex-wrap items-center justify-between p-2 md:w-3/4">
        <ExperienceCard text1="3" text2="years of experience" />

        <div className="h-36 w-0.5 bg-gradient-to-r from-[#FF4D54] to-[#007FFF]"></div>

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
        setCurrentText(
          (prevText) => prevText + phrases[currentIndex][textIndex],
        );
        setTextIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setTextIndex(0);
          setCurrentText("");
          setCurrentIndex((prevIndex) =>
            prevIndex === phrases.length - 1 ? 0 : prevIndex + 1,
          );
        }, 1000);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentIndex, textIndex]);

  return (
    <h5 className="pl-[10%] text-center text-2xl text-white lg:pl-[15%]">
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
    <div className="flex w-[47%] flex-wrap items-center justify-center pb-4 pt-3">
      <h3 className="mx-1 inline text-center text-4xl text-white md:text-6xl">
        {text1}
      </h3>
      <span className="inline-block text-xs uppercase text-white">
        {upperText2} <br />
        {lowerText2}
      </span>
    </div>
  );
};

export default MainSection;
