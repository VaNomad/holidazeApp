import logo from "../../assets/vectors/hLogoPink.png"
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 z-40">
      <div className="flex flex-col bg-holipink text-black font-alli text-4xl items-center rounded-t-[1rem]">
        <div className="flex p-4 items-center gap-4">
          <div className="bg-zinc-800 rounded-full p-1">
            <img
              src={logo}
              alt="Logo"
              className="h-6 w-6"
            />
          </div>
          <div>
            <AiFillTwitterCircle size={35} className="text-holiblue" />
          </div>
          <div>
            <IoLogoWhatsapp size={35} className="text-holiblue" />
          </div>
          <div>
            <h2 className="text-[20px] sm:text-[30px]">Built by Sjur Hassel</h2>
          </div>
        </div>
      </div>
    </footer>
  );
}