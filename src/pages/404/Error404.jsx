import { Link } from "react-router-dom"
// import {FiHome} from "react-icons/fi"

export const Error404 = () => {

  console.log("Rendering Error404 component");
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col justify-center items-center gap-3 p-8 backdrop-blur-lg rounded-3xl mt-40">
        <h1 className="text-md sm:text-[2rem] text-center text-dm tracking-wider">
          There seems to be a broken link somewhere
        </h1>
        <h2 className="text-center font-bold text-[4rem] sm:text-[6rem] text-white">404</h2>
        <Link to="/" className="flex flex-col items-center backdrop-blur-2xl rounded-full px-5 py-2 border border-zinc-200">
          <h1 className="flex items-center text-white font-alli text-2xl sm:text-5xl">
            Go back to the home page
          </h1>
        </Link>
      </div>
    </div>
  );
}