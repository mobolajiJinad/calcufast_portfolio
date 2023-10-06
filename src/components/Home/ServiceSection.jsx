import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <section className="text-[#C8C8C8] bg-[#202123] pt-4 pb-10" id="services">
      <h3
        style={{ fontFamily: "'Bungee Outline', cursive" }}
        className="text-center text-2xl md:text-5xl uppercase tracking-wider my-4"
      >
        services
      </h3>

      <div className="px-2 lg:flex lg:justify-around lg:items-center">
        <Card
          title="Placeholder text"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa totam at atque
          officia cum voluptates, eveniet iusto, assumenda sunt nisi illum veritatis, hic
          recusandae aliquid dolorum quibusdam explicabo alias veniam."
          link="#"
        />
        <Card
          title="Placeholder text"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa totam at atque
          officia cum voluptates, eveniet iusto, assumenda sunt nisi illum veritatis, hic
          recusandae aliquid dolorum quibusdam explicabo alias veniam."
          link="#"
        />
        <Card
          title="Placeholder text"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa totam at atque
          officia cum voluptates, eveniet iusto, assumenda sunt nisi illum veritatis, hic
          recusandae aliquid dolorum quibusdam explicabo alias veniam."
          link="#"
        />
      </div>
    </section>
  );
};

const Card = ({ title, paragraph, link }) => {
  return (
    <div className="my-3 lg:w-[30%] flex flex-col items-center">
      <div className="px-3 lg:px-1 py-5 rounded-xl w-[98%] sm:w-4/5 md:w-3/4 lg:w-full bg-[#252527]">
        <div className="flex my-4 items-center">
          <div className="w-12 h-12 flex justify-center items-center text-xs text-white uppercase md:ml-2 py-4 border-2 border-gray-600 border-solid">
            placeholder
          </div>
          <h4 className="uppercase text-3xl py-4 flex-grow flex-shrink text-center">
            {title}
          </h4>
        </div>

        <p className="px-4">{paragraph}</p>
      </div>

      <Link
        to={link}
        className="my-4 mb-5 px-10 lg:px-8 py-4 capitalize text-white text-lg rounded-[2.5rem] bg-gradient-to-br from-[#bb373c] to-[#07539e] hover:bg-red-500"
      >
        check them out &rarr;
      </Link>
    </div>
  );
};

export default ServiceSection;
