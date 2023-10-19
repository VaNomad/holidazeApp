import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"
import { Outlet, useLocation } from "react-router-dom";


export const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header className="" />
      <main className="flex-1" >
        <Outlet />
      </main>
      {location.pathname === "/" || location.pathname === "/home" ? null : (
        <Footer className="h-[10vh]" />
      )}
    </div>
  );
}