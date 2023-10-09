import { navLinks } from "../../constants/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import holidazeLogoPink2 from "../../assets/vectors/holidazeLogoPink2.png"
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import {FiLogOut} from "react-icons/fi"

export const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { logout } = useUser()
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate("/")
  }

  return (
    <nav className="w-full flex items-center fixed bg-blackish z-50">
      <div className="w-full flex justify-between">
        {/* Desktop Menu */}
        <ul className="list-none hidden">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-purple-600"
              } :text-purple-600 cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link to={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div>
          <div
            className="cursor-pointer transform transition-transform ease-in-out duration-600"
            onClick={() => setToggle(!toggle)}
          >
            <div
              className={`transition-all duration-600 ease-in-out absolute ${
                toggle ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              <div className="text-center border-2 border-[#FCB5FF] rounded-full hover:text-black hover:border-none hover:bg-[#FCB5FF] m-3 w-[35px] h-[35px] hover:scale-105">
                <h1 className="text-[18px] font-dm font-medium">x</h1>
              </div>
            </div>

            <div
              className={`transition-all duration-600 ease-in-out absolute ${
                toggle ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            >
              <div className="text-center border-2 border-[#FCB5FF] hover:border-none hover:bg-[#FCB5FF] hover:text-black rounded-full m-3 w-[120px] hover:scale-105 transition-scale duration-200 ease-in">
                <h1 className="text-[19px] font-dm font-medium">menu</h1>
              </div>
            </div>
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-blackish border-2 black absolute top-32 left-5 right-5 mx-2 rounded-xl`}
          >
            <ul className="list-none flex flex-col items-start justify-around mx-auto my-16 h-[500px]">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white font-semibold"
                      : "text-pink-300"
                  } text-[16px] cursor-pointer font-medium`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <Link to={link.id}>{link.title}</Link>
                </li>
              ))}
              <li
                className="bg-holiblue text-black rounded-full flex items-center gap-3 w-full ms-[-1rem] px-4 py-2 whitespace-nowrap"
                onClick={handleLogout}
              >
                Log Out{" "}{<FiLogOut />}
              </li>
            </ul>
          </div>
        </div>

        <Link
          to="/"
          className="flex flex-col justify-end"
          onClick={() => {
            setActive("");
          }}
        >
          <img src={holidazeLogoPink2} alt="logo" className="w-[180px] p-3" />
        </Link>
      </div>
    </nav>
  );
}