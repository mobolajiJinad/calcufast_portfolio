import lightening from "../../assets/lightening.svg";

const ValueSection = () => {
  return (
    <section>
      <div className="my-3 flex justify-center items-center-center">
        <h3 className="text-2xl uppercase text-white tracking-wider">value in the signal</h3>
        <img className="mx-1" src={lightening} />
      </div>

      <div className="flex flex-wrap px-5">
        <div className="w-11/12 sm:w-4/5 mx-auto h-full flex justify-center items-center text-2xl uppercase py-40 border-2 text-white border-gray-600 border-solid lg:w-[45%]">
          placeholder image
        </div>

        <p className="text-white leading-relaxed p-3 pl-5 md:px-9 lg:w-1/2">
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
