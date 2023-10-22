import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"
import { Outlet } from "react-router-dom";


export const Layout = () => {

  return (
    <div className="h-screen flex flex-col bg-hero-pattern bg-fixed md:bg-center bg-cover">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
