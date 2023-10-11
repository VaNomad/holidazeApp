import { navLinks } from "../../constants/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import holidazeLogoPink2 from "../../assets/vectors/holidazeLogoPink2.png";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { GiCrossMark } from "react-icons/gi";

export const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { logout } = useUser();
  const { isAuthenticated } = useUser();
  const { user } = useUser();
  console.log(user)
  const navigate = useNavigate();
  console.log("isAuthenticated:", isAuthenticated);

  const handleLogout = () => {
    logout();
    navigate("/");
    setToggle(!toggle);
    console.log(logout())
  };

  return (
    <nav className="w-full flex items-center fixed bg-blackish z-50">
      <div className="w-full grid grid-cols-5">
        {/* Desktop Menu */}
        {/* <ul className="list-none hidden">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-purple-600"
              } text-purple-600 cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link to={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul> */}

        {/* Mobile Menu */}
        <div className="col-span-2">
          <div
            className="cursor-pointer transition-transform ease-in-out duration-600"
            onClick={() => setToggle(!toggle)}
          >
            <div
              className={`transition-all duration-600 ease-in-out absolute ${
                toggle ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              <div className="border-2 border-[#FCB5FF] rounded-full hover:text-black hover:border-none hover:bg-[#FCB5FF] hover:scale-105 transition-scale duration-200 ease-in">
                <h1 className="text-[18px] font-dm font-medium">
                  <GiCrossMark />
                </h1>
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
              {navLinks.map((link) =>
                (link.id === "profile" && !isAuthenticated()) ||
                (link.id === "my-venues" && !isAuthenticated()) ||
                (link.id === "add-venue" && !isAuthenticated()) ? null : (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title
                        ? "text-white font-semibold px-5 py-2"
                        : "text-pink-300 px-5 py-2 hover:text-black hover:bg-holipink hover:rounded-full transition-all duration-300"
                    } text-[16px] cursor-pointer font-medium `}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <Link to={link.id}>{link.title}</Link>
                  </li>
                )
              )}
              <li
                className="bg-holiblue text-black rounded-full flex items-center gap-3 w-full px-4 py-2 whitespace-nowrap cursor-pointer hover:scale-105 hover:bg-gradient-to-br from-holigreen to-holired transition-all duration-300 ease-in"
                onClick={handleLogout}
              >
                Log Out {<FiLogOut size={20} />}
              </li>
            </ul>
          </div>
        </div>

        {/* {!isAuthenticated ? null : (
          <Link to="/profile" className="flex">
            {user && (
              <img
                id="avatar-image"
                src={user.avatar}
                alt="avatar"
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
            )}
          </Link>
        )} */}

        <div className="col-span-1">
          {isAuthenticated && user && (
            <Link to="/profile" className="grid justify-self-center items-center h-full w-8">
              <img
                id="avatar-image"
                src={user.avatar}
                alt="avatar"
                className="w-[30px] h-[30px] object-cover rounded-full"
              />
            </Link>
          )}
        </div>

        <Link
          to="/"
          className="col-span-2 justify-self-end"
          onClick={() => {
            setActive("Home");
          }}
        >
          <img src={holidazeLogoPink2} alt="logo" className="p-3 min-w-[180px] max-w-[180px]" />
        </Link>
      </div>
    </nav>
  );
};
