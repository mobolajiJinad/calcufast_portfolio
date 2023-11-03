import ValueImage from "../../assets/valueInTheSignal.png";

const ValueSection = () => {
  return (
    <section>
      <div className="items-center-center my-3 flex justify-center">
        <h3
          style={{ fontFamily: "'Bungee Outline', cursive" }}
          className="text-2xl uppercase tracking-wider text-white md:text-5xl"
        >
          1% better 🧘‍♂🌱
        </h3>
      </div>

      <div className="flex flex-wrap items-center px-5">
        <img
          src={ValueImage}
          alt="Icon"
          className="mx-auto block max-h-[450px] w-11/12 sm:w-4/5 lg:w-[45%]"
        />

        <p className="p-3 pl-3 leading-relaxed text-white md:px-9 lg:w-1/2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi totam
          explicabo a sequi? Voluptatibus eaque nisi illum natus necessitatibus
          impedit quae id!
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus at
          delectus, aperiam rerum maiores beatae impedit neque quae, vel quaerat
          unde et iste, molestias mollitia esse eius veritatis. Voluptates,
          excepturi.l Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Iure laboriosam nemo.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          sint, eaque, architect.
        </p>
      </div>
    </section>
  );
};
export default ValueSection;
