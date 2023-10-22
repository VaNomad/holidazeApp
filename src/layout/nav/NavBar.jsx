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
      <nav className="w-full flex justify-center items-center fixed bg-blackish h-[50px] sm:h-[60px] z-50">
        <div className="w-full flex flex-cols justify-between items-center">
          
          {/* Mobile Menu */}
          <div className="col-span-2">
            <div
              className="cursor-pointer transition-transform ease-in-out duration-600"
              onClick={() => setToggle(!toggle)}
            >
              {/* close button */}
              <div
                className={`transition-all duration-600 ease-in-out absolute top-2 sm:top-2.5 left-8 sm:left-11 bg-zinc-900 rounded-full z-40 ${
                  toggle ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              >
                <div className="border-2 border-[#FCB5FF] rounded-full hover:text-black hover:bg-[#FCB5FF] hover:scale-105 transition-scale duration-200 ease-in">
                  <h1 className="text-[12px] sm:text-[18px] font-dm font-medium">
                    <GiCrossMark className="m-2" />
                  </h1>
                </div>
              </div>

              {/* menu button */}
              <div
                className={`transition-all duration-600 ease-in-out absolute top-0 p-2 sm:p-3  ${
                  toggle
                    ? "opacity-0 scale-100 disabled"
                    : "opacity-100 scale-100"
                }`}
              >
                <div className="p-1 sm:px-2 text-center border-2 border-[#FCB5FF] hover:border-none hover:bg-[#FCB5FF] hover:text-black rounded-full w-[80px] sm:w-[110px] hover:scale-105 transition-scale duration-200 ease-in">
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
              } bg-blackish absolute top-20 left-10 right-10 mx-auto max-w-xs rounded-xl`}
            >
              <ul className="flex flex-col items-start mx-auto my-14 gap-4 font-alli text-5xl">
                {navLinks.map((link) =>
                  (link.id === "profile" && !isAuthenticated()) ||
                  (link.id === "login" && isAuthenticated()) ||
                  (link.id === "my-venues" && !isAuthenticated()) ||
                  (link.id === "add-venue" && !isAuthenticated()) ? null : (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title
                          ? "text-white font-semibold px-5 py-1"
                          : "text-pink-300 px-5 py-1 hover:text-black hover:bg-holipink hover:rounded-full transition-all duration-300"
                      } cursor-pointer font-medium `}
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
                    className="bg-holiblue text-black font-dm text-[22px] rounded-full flex items-center gap-3 w-full px-5 py-2 whitespace-nowrap cursor-pointer hover:scale-105 hover:bg-gradient-to-br from-holigreen to-holired transition-all duration-300 ease-in"
                    onClick={handleLogout}
                  >
                    Log Out {<FiLogOut size={30} />}
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
            className="pe-3 sm:pe-5"
            onClick={() => {
              setActive("Home");
            }}
          >
            <div className="w-[150px] sm:w-[170px]">
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
