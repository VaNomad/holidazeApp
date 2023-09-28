import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../nav/NavBar";
import { FiHome } from "react-icons/fi";

export const Header = () => {
  const location = useLocation();

  // Conditionally render different navigation content based on the current route
  const renderNav = () => {
    if (location.pathname === "*") {
      return (
        <Link to="/" className="flex flex-col items-center">
          <h1 className="flex items-center text-blue-800 underline underline-offset-1">
            Go back to the <FiHome className="mx-1" /> page
          </h1>
        </Link>
      );
    } else {
      return <NavBar />;
    }
  };

  return (
    <header>
      {/* Other header content */}
      {renderNav()}
    </header>
  );
};


