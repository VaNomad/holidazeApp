// import { Link } from "react-router-dom";
import header from "../../assets/images/maldives1.jpg"
import dummyProfile from "../../assets/vectors/hLogoGreen.png"
import { AvatarModal } from "../../components/ui/modals/AvatarModal";
import { useState } from "react";

export const Profile = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <div className="bg-black h-screen relative">
      <div>
        <div className="bg-i">
          <img
            src={header}
            alt="profile header"
            className="h-[400px] w-full object-cover object-bottom md:h-[500px]"
          />
        </div>
        <div className="absolute h-[150px] md:h-[200px] w-[150px] md:w-[200px] border-4 border-zinc-700 bg-black rounded-full px-2 top-[25%] right-[25%] md:right-[30%]">
          <div>
            <img src={dummyProfile} alt="" className="" />
          </div>
          <button onClick={ openModal } className="text-4xl text-holiblue text-right">+</button>
          <AvatarModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </div>
      <div className="p-5 absolute top-[20rem]">
        <h1 className="font-alli text-5xl">Profile</h1>
      </div>
    </div>
  );
};
