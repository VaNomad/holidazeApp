import { CurrentStorage } from "../../utils/CurrentStorage";
import header from "../../assets/images/maldives1.jpg"
// import dummyProfile from "../../assets/vectors/hLogoGreen.png"
import { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineCamera } from "react-icons/ai";
import { BsKey } from "react-icons/bs"
import {GiCheckMark, GiCrossMark} from "react-icons/gi"
import noAvatar from "../../assets/vectors/hLogoGreen.png"
import { ChangeAvatarModal } from "../../components/ui/modals/ChangeAvatarModal";

export const Profile = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  const userData = CurrentStorage();

  return (
    <div className="bg-black">
      <div>
        <div className="">
          <img
            src={header}
            alt="profile header"
            className="h-[400px] w-full object-cover object-bottom"
          />
        </div>
        <div className="absolute top-[25%] md:top-[18%] right-[25%] md:right-[30%] flex flex-col">
          <div className="h-[150px] md:h-[200px] w-[150px] md:w-[200px] border-4 border-zinc-700 bg-black rounded-full">
            <img
              src={userData.avatar ? userData.avatar : noAvatar}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <button
            onClick={openModal}
            className="text-4xl text-holiblue p- absolute bottom-[-1rem] right-[-1rem]"
          >
            +
          </button>
          <ChangeAvatarModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </div>
      <div className="p-5 absolute top-[20.5rem] md:top-[19rem] lg:left-[10%]">
        <h1 className="font-alli text-5xl md:text-[5rem]">Profile</h1>
      </div>
      <div className="flex flex-col items-center justify-evenly h-[45vh]">
        <div className="relative ps-24 pe-20 py-2 border-[2px] border-holipink rounded-full w-[60%] h- md:max-w-[30rem]">
          <div className="absolute top-0 left-0">
            <AiOutlineUser
              size={40}
              className="text-black bg-holipink rounded-full p-1"
            />
          </div>
          <p className="whitespace-nowrap">{userData.username}</p>
        </div>
        <div className="relative ps-24 pe-20 py-2 border-[2px] border-holipink rounded-full w-[60%] md:max-w-[30rem]">
          <div className="absolute top-0 left-0">
            <AiOutlineMail
              size={40}
              className="text-black bg-holipink rounded-full p-1"
            />
          </div>
          <p className="whitespace-nowrap">{userData.email}</p>
        </div>
        <div className="relative ps-24 pe-20 py-2 border-[2px] border-holipink rounded-full w-[60%] md:max-w-[30rem]">
          <div className="absolute top-0 left-0">
            <AiOutlineCamera
              size={40}
              className="text-black bg-holipink rounded-full p-1"
            />
          </div>
          <p className="whitespace-nowrap overflow-hidden">{userData.avatar}</p>
        </div>
        <div className="relative ps-24 pe-20 py-2 border-[2px] border-holipink rounded-full w-[60%] md:max-w-[30rem]">
          <div className="absolute top-0 left-0">
            <BsKey
              size={40}
              className="text-black bg-holipink rounded-full p-1"
            />
          </div>
          <p className="whitespace-nowrap flex items-center justify-between">
            Venue Manager:{" "}
            {userData.manager ? (
              <GiCheckMark color="#70C376" />
            ) : (
              <GiCrossMark color="#C37070" size={20} />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
