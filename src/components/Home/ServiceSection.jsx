import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <section className="bg-[#202123] pb-10 pt-4 text-[#C8C8C8]" id="services">
      <h3
        style={{ fontFamily: "'Bungee Outline', cursive" }}
        className="my-4 text-center text-2xl uppercase tracking-wider md:text-5xl"
      >
        services
      </h3>

      <div className="px-2 lg:flex lg:items-center lg:justify-around">
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
    <div className="my-3 flex flex-col items-center lg:w-[30%]">
      <div className="w-[98%] rounded-xl bg-[#252527] px-3 py-5 sm:w-4/5 md:w-3/4 lg:w-full lg:px-1">
        <div className="my-4 flex items-center">
          <div className="flex h-12 w-12 items-center justify-center border-2 border-solid border-gray-600 py-4 text-xs uppercase text-white md:ml-2">
            placeholder
          </div>
          <h4 className="flex-shrink flex-grow py-4 text-center text-3xl uppercase">
            {title}
          </h4>
        </div>

        <p className="px-4">{paragraph}</p>
      </div>

      <Link
        to={link}
        className="my-4 mb-5 rounded-[2.5rem] bg-gradient-to-br from-[#bb373c] to-[#07539e] px-10 py-4 text-lg capitalize text-white hover:bg-red-500 lg:px-8"
      >
        check them out &rarr;
      </Link>
    </div>
  );
};

export default ServiceSection;
