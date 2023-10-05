const ServiceSection = () => {
  return (
    <section className="text-[#C8C8C8] bg-[#202123] pt-4 pb-10">
      <h3 className="text-center text-2xl uppercase tracking-wider my-4">services</h3>

      <div className="px-2">
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
    <div className="my-3 flex flex-col items-center">
      <div className="px-3 py-5 rounded-xl sm:w-4/5 md:w-3/4 w-[98%] bg-[#252527]">
        <div className="flex my-2">
          <div className="w-12 h-12 flex justify-center items-center text-xs text-white uppercase py-4 border-2 border-gray-600 border-solid">
            placeholder
          </div>

          <h4 className="uppercase text-2xl left-1/2 translate-x-2/4 text-center">{title}</h4>
        </div>
        <p className="px-4">{paragraph}</p>
      </div>

      <a
        href={link}
        className="my-3 mb-5 px-10 py-3 capitalize text-lg rounded-[2.5rem] bg-gradient-to-br from-[#bb373c] to-[#07539e]"
      >
        check them out &rarr;
      </a>
    </div>
  );
};

export default ServiceSection;
