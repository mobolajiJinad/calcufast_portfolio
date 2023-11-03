import Marquee from "react-fast-marquee";

const Testimonial = () => {
  return (
    <div>
      <h1
        className="text-center text-2xl font-bold uppercase leading-10 text-gray-400 sm:text-3xl lg:text-4xl"
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
    <div className="mx-3 flex max-w-[22rem] flex-col items-center justify-between rounded-xl bg-[#202123] px-4 py-2">
      <div className="mx-auto my-2 flex h-48 w-48 items-center justify-center rounded-full bg-slate-600">
        placeholder
      </div>
      <h3 className="my-3 text-center text-xl font-bold text-white">
        John Doe
      </h3>
      <p className="px-1 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> <br />
        Perspiciatis in molestiae obcaecati modi, assumenda atque enim corporis
        iusto recusandae ipsam dignissimos consequatur quo possimus itaque
        libero beatae! Tempore, maiores voluptatem.
      </p>
    </div>
  );
};

export default Testimonial;
