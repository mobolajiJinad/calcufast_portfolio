import { Link } from "react-router-dom";
import WhatsappImage from "../../assets/ComeToMyWhatsapp.png";

const checkmarkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 rounded-full bg-red-400 p-1 text-white"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const TutorialSection = () => {
  return (
    <section className="flex flex-wrap items-center justify-between px-3 py-6">
      <img src={WhatsappImage} className="mx-auto w-11/12 py-40 md:w-[48%]" />

      <div className="ml-0.5 mt-3 w-full md:w-[48%]">
        <h3 className="text-2xl uppercase text-red-400">
          <span className="mr-2 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-solid border-red-400 bg-transparent">
            ✔
          </span>
          my whatsapp tutorial classes
        </h3>

        <h4 className="mx-2 my-5 text-2xl capitalize text-white">
          Lorem ipsum, dolor sit amet consectetur.
        </h4>

        <p className="my-2 px-2 text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet placeat
          pariatur dignissimos saepe commodi eius neque ex tempore sit quisquam
          dolores mollitia cupiditate, reiciendis quo.
          <br /> <br /> Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Ad doloremque incidunt quidem autem aliquid, aspernatur pariatur
          eius quae in sit quam? <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint
          sit reprehenderit eos.
        </p>

        <ul className="my-9">
          <li className="mx-1 my-2 flex items-center text-lg text-white">
            {checkmarkIcon} <span className="ml-2">Lorem ipsum dolor.</span>
          </li>
          <li className="mx-1 my-2 flex items-center text-lg text-white">
            {checkmarkIcon} <span className="ml-2">Lorem ipsum dolor.</span>
          </li>
          <li className="mx-1 my-2 flex items-center text-lg text-white">
            {checkmarkIcon} <span className="ml-2">Lorem ipsum dolor.</span>
          </li>
        </ul>

        <Link
          className="my-3 inline-block rounded-full bg-gradient-to-r from-[#FF4D54] to-[#007FFF] px-20 py-4 uppercase text-white hover:bg-red-500"
          to="#"
        >
          join class
        </Link>
      </div>
    </section>
  );
};

export default TutorialSection;
