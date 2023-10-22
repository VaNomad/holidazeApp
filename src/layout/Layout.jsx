import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"
import { Outlet } from "react-router-dom";


export const Layout = () => {

  return (
    <div className="flex flex-col bg-fixed md:bg-center bg-cover">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
