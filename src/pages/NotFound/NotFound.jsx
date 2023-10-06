import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <h1 className="my-10 text-4xl ">Ooops, page not found!</h1>
      <Link className="py-4 px-16 bg-red-400 text-base rounded-full" to={"/"}>
        Navigate to Home Page
      </Link>
    </div>
  );
};
export default NotFound;
