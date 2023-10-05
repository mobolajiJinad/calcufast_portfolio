import { useState, useEffect } from "react";

const MainSection = () => {
  return (
    <section className="bg-slate-900 px-1 mt-[88px]">
      <h1 className="text-5xl leading-10 uppercase font-extrabold opacity-10 text-gray-400 text-center py-8">
        Calcufast
      </h1>

      <div className="flex flex-wrap justify-between items-center">
        <div className="mx-auto w-11/12 md:w-1/3 md:h-3/4 h-4/5   flex justify-center items-center text-2xl text-white uppercase py-40 border-2 border-gray-600 border-solid">
          placeholder image
        </div>

        <div className="w-full md:w-2/3">
          <h4 className="py-4 m-auto w-4/5 md:text-3xl lg:text-4xl text-center leading-10 text-white text-4xl capitalize">
            Hello, my name is calcufast
          </h4>

          <TextChangingComponent />
        </div>
      </div>

      <aside className="mx-auto my-2 md:w-3/4 flex justify-between items-center flex-wrap p-2">
        <ExperienceCard text1="3" text2="years of experience" />

        <div className="w-0.5 h-36 bg-gradient-to-r from-[#FF4D54] to-[#007FFF]"></div>

        <ExperienceCard text1="30,000+" text2="impressions made" />
      </aside>
    </section>
  );
};

const TextChangingComponent = () => {
  const phrases = [
    "Lorem ipsum dolor sit amet,",
    "Consectetur adipiscing elit,",
    "Sed do eiusmod",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === phrases.length - 1 ? 0 : prevIndex + 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h5 className="text-3xl text-white text-center">
      I{" "}
      <span
        style={{
          background: "linear-gradient(90deg, #FF4D54 0%, #007FFF 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {phrases[currentIndex]}
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
      <h3 className="text-4xl mx-1 text-white inline text-center">{text1}</h3>
      <span className="text-xs text-white uppercase inline-block">
        {upperText2} <br />
        {lowerText2}
      </span>
    </div>
  );
};

export default MainSection;
