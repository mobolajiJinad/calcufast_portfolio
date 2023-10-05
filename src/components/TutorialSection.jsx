const checkmarkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white bg-red-400 p-1 rounded-full"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const TutorialSection = () => {
  return (
    <section className="py-6 px-3 flex flex-wrap justify-between items-center">
      <div className="mx-auto w-11/12 md:w-1/3 h-96 flex justify-center items-center text-2xl text-white uppercase py-40 border-2 border-gray-600 border-solid">
        placeholder image
      </div>

      <div className="w-full md:w-[60%] mt-3 ml-0.5">
        <h3 className="text-red-400 text-2xl uppercase">
          <span className="w-12 h-12 mr-2 inline-flex justify-center items-center border-4 border-red-400 border-solid rounded-full bg-transparent">
            ✔
          </span>
          my whatsapp tutorial classes
        </h3>

        <h4 className="my-5 mx-2 capitalize text-white text-2xl">
          Lorem ipsum, dolor sit amet consectetur.
        </h4>

        <p className="text-white my-2 px-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet placeat pariatur
          dignissimos saepe commodi eius neque ex tempore sit quisquam dolores mollitia
          cupiditate, reiciendis quo.
          <br /> <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad doloremque
          incidunt quidem autem aliquid, aspernatur pariatur eius quae in sit quam? <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint sit
          reprehenderit eos.
        </p>

        <ul className="my-9">
          <li className="text-white text-lg mx-1 my-2 flex items-center">
            {checkmarkIcon} <span className="ml-2">Lorem ipsum dolor.</span>
          </li>
          <li className="text-white text-lg mx-1 my-2 flex items-center">
            {checkmarkIcon} <span className="ml-2">Lorem ipsum dolor.</span>
          </li>
          <li className="text-white text-lg mx-1 my-2 flex items-center">
            {checkmarkIcon} <span className="ml-2">Lorem ipsum dolor.</span>
          </li>
        </ul>

        <a
          className="py-4 px-20 my-3 inline-block text-white uppercase bg-gradient-to-r from-[#FF4D54] to-[#007FFF] hover:bg-red-500 rounded-full"
          href="#"
        >
          join class
        </a>
      </div>
    </section>
  );
};

export default TutorialSection;
