import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-around bg-[#0C0F16]">
      <h1
        style={{ fontFamily: "'Bungee Outline', cursive" }}
        className="w-full py-3 text-center text-5xl font-extrabold uppercase leading-10 text-gray-400 opacity-10 sm:text-7xl lg:text-9xl "
      >
        Calcufast
      </h1>

      <h2 className="my-10 text-3xl text-white sm:text-4xl">
        Ooops, page not found!
      </h2>

      <Link
        className="rounded-full bg-red-400 px-16 py-4 text-base text-white"
        to={"/"}
      >
        Navigate to Home Page
      </Link>
    </div>
  );
};
export default NotFound;
