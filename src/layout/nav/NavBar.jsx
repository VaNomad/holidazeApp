import { navLinks } from "../../constants/constants";
import { FiMenu, FiXCircle  } from "react-icons/fi";
// import { vectorList } from "../../constants/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import holidazeLogoGreen from "../../assets/vectors/holidazeLogoGreen.png"

export const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-2 fixed">
      <div className="w-full flex justify-between items-center">
        <Link
          to="/"
          className="flex flex-col justify-end"
          onClick={() => {
            setActive("");
          }}
        >
          <img src={holidazeLogoGreen} alt="logo" className="w-[100px]" />
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-purple-600"
              } hover:text-purple-600 cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link to={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <span
            className="cursor-pointer text-[24px]"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FiXCircle /> : <FiMenu />}
          </span>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-blackish border-2 black absolute top-20 left-0 right-0 mx-2 rounded-xl z-10`}
          >
            <ul className="list-none flex flex-col items-start justify-around mx-auto my-16 h-[600px]">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white font-semibold" : "text-pink-300"
                  } text-[16px] cursor-pointer font-medium`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <Link to={link.id}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}