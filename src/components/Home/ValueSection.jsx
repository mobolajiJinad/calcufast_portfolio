import ValueImage from "../../assets/valueInTheSignal.png";

const ValueSection = () => {
  return (
    <section>
      <div className="my-3 flex justify-center items-center-center">
        <h3
          style={{ fontFamily: "'Bungee Outline', cursive" }}
          className="text-2xl md:text-5xl uppercase text-white tracking-wider"
        >
          1% better 🧘‍♂🌱
        </h3>
      </div>

      <div className="flex flex-wrap px-5 items-center">
        <img
          src={ValueImage}
          alt="Icon"
          className="w-11/12 sm:w-4/5 max-h-[450px] block mx-auto lg:w-[45%]"
        />

        <p className="text-white leading-relaxed p-3 pl-3 md:px-9 lg:w-1/2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi totam explicabo a
          sequi? Voluptatibus eaque nisi illum natus necessitatibus impedit quae id!
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus at delectus,
          aperiam rerum maiores beatae impedit neque quae, vel quaerat unde et iste, molestias
          mollitia esse eius veritatis. Voluptates, excepturi.l Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Iure laboriosam nemo.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sint, eaque,
          architect.
        </p>
      </div>
    </section>
  );
};
export default ValueSection;
