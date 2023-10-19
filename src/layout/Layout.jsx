import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"
import { Outlet, useLocation } from "react-router-dom";


export const Layout = () => {
  const location = useLocation();

  return (
    <div className="">
      <Header />
      <main>
        <Outlet />
      </main>
      {location.pathname === "/" || location.pathname === "/home" ? null : (
        <Footer />
      )}
    </div>
  );
}