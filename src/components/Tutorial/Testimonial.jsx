import Marquee from "react-fast-marquee";

const Testimonial = () => {
  return (
    <div>
      <h1
        className="text-2xl sm:text-3xl lg:text-4xl leading-10 uppercase font-bold text-center text-gray-400"
        style={{ fontFamily: "'Bungee Outline', cursive" }}
      >
        Testimonials
      </h1>

      <Marquee
        speed={90}
        direction="right"
        pauseOnHover={true}
        pauseOnClick={true}
        loop={0}
        className="my-4 w-full "
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Marquee>
    </div>
  );
};

const TestimonialCard = () => {
  return (
    <div className="px-4 py-2 mx-3 max-w-[22rem] bg-[#202123] rounded-xl flex flex-col justify-between items-center">
      <div className="w-48 h-48 my-2 rounded-full bg-slate-600 mx-auto flex justify-center items-center">
        placeholder
      </div>
      <h3 className="text-center text-xl my-3 font-bold text-white">John Doe</h3>
      <p className="px-1 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> <br />
        Perspiciatis in molestiae obcaecati modi, assumenda atque enim corporis iusto
        recusandae ipsam dignissimos consequatur quo possimus itaque libero beatae! Tempore,
        maiores voluptatem.
      </p>
    </div>
  );
};

export default Testimonial;
