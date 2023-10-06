import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-[100vh] bg-[#0C0F16] flex flex-col justify-around items-center">
      <h1
        style={{ fontFamily: "'Bungee Outline', cursive" }}
        className="text-5xl w-full py-3 sm:text-7xl lg:text-9xl leading-10 uppercase font-extrabold opacity-10 text-gray-400 text-center "
      >
        Calcufast
      </h1>

      <h2 className="my-10 text-3xl sm:text-4xl text-white">Ooops, page not found!</h2>

      <Link className="py-4 px-16 bg-red-400 text-base text-white rounded-full" to={"/"}>
        Navigate to Home Page
      </Link>
    </div>
  );
};
export default NotFound;
