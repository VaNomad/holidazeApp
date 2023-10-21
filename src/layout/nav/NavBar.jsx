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
  console.log(user);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setToggle(!toggle);
    console.log(logout());
  };

  return (
    <div>
      <nav className="w-full flex justify-center items-center fixed bg-blackish z-50">
        <div className="w-full flex flex-cols justify-between items-center">
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
              {/* close button */}
              <div
                className={`transition-all duration-600 ease-in-out absolute top-24 left-10 z-40 ${
                  toggle ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              >
                <div className="border-2 border-[#FCB5FF] rounded-full hover:text-black hover:bg-[#FCB5FF] hover:scale-105 transition-scale duration-200 ease-in">
                  <h1 className="text-[18px] font-dm font-medium">
                    <GiCrossMark className="m-2" />
                  </h1>
                </div>
              </div>

              {/* menu button */}
              <div
                className={`transition-all duration-600 ease-in-out absolute top-0 p-3 ${
                  toggle
                    ? "opacity-30 scale-100 disabled"
                    : "opacity-100 scale-100"
                }`}
              >
                <div className="text-center border-2 border-[#FCB5FF] hover:border-none hover:bg-[#FCB5FF] hover:text-black rounded-full w-[80px] sm:w-[110px] hover:scale-105 transition-scale duration-200 ease-in">
                  <h1 className="font-dm text-[14px] font-medium sm:text-[16px] ">
                    menu
                  </h1>
                </div>
              </div>
            </div>

            {/* menu overlay */}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } bg-blackish border-2 black absolute top-20 left-5 right-5 mx-auto max-w-md rounded-xl`}
            >
              <ul className="flex flex-col items-start mx-auto my-16 gap-5">
                {navLinks.map((link) =>
                  (link.id === "profile" && !isAuthenticated()) ||
                  (link.id === "login" && isAuthenticated()) ||
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
                {isAuthenticated && user ? (
                  <li
                    className="bg-holiblue text-black rounded-full flex items-center gap-3 w-full px-4 py-2 whitespace-nowrap cursor-pointer hover:scale-105 hover:bg-gradient-to-br from-holigreen to-holired transition-all duration-300 ease-in"
                    onClick={handleLogout}
                  >
                    Log Out {<FiLogOut size={20} />}
                  </li>
                ) : null}
              </ul>
            </div>
          </div>

          {/* nav avatar */}
          <div className="flex justify-end w-full">
            {isAuthenticated && user && (
              <Link
                to="/profile"
                className="flex justify-center items-center m-2 w-8 h-8"
              >
                <img
                  id="avatar-image"
                  src={user.avatar}
                  alt="avatar"
                  className="w-[25px] sm:w-[35px] h-[25px] sm:h-[35px] object-cover rounded-full"
                />
              </Link>
            )}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className=""
            onClick={() => {
              setActive("Home");
            }}
          >
            <div className="w-[130px]">
              <img
                src={holidazeLogoPink2}
                alt="logo"
                className=""
              />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};
