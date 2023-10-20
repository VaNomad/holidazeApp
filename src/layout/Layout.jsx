import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"
import { Outlet } from "react-router-dom";


export const Layout = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header className="" />
      <main className="flex-1 bg-black">
        <Outlet />
      </main>
      {/* {location.pathname === "/" || location.pathname === "/home" || location.pathname === "/" ? null : (
        <Footer className="h-[10vh] fixed bottom-0 w-full" />
      )} */}
      <Footer className="h-[10vh] fixed bottom-0 w-full" />
    </div>
  );
};
