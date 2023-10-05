import { CurrentStorage } from "../../utils/CurrentStorage";
import header from "../../assets/images/maldives1.jpg";
// import dummyProfile from "../../assets/vectors/hLogoGreen.png"
import { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineCamera } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";
import { BsCloudUpload } from "react-icons/bs";
import noAvatar from "../../assets/vectors/hLogoGreen.png";
import { ChangeAvatarModal } from "../../components/ui/modals/ChangeAvatarModal";
import { useUser } from "../../context/UserContext";
import { GridLoader } from "react-spinners";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/react-toastify.css";

export const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const { newAvatarUrl, updateAvatar } = useUser();
  // const notify = () => toast("Avatar image swapped!");
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const userData = CurrentStorage();

  const handleSaveProfile = async () => {
    if (newAvatarUrl) {
      try {
        setIsLoading(true);
        await updateAvatar();
        console.log("Avatar image swapped!");
        // Avatar updated successfully
        // You can add any additional logic or feedback here
        setIsLoading(false);
      } catch (error) {
        // Handle error, display an error message, or retry
        console.error("Error updating avatar:", error);
        setIsLoading(false);
      }
    }
  };

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
              id="avatar-image"
              src={newAvatarUrl || userData.avatar || noAvatar}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <button
            id="plus-button"
            onClick={openModal}
            className="text-4xl text-holiblue p- absolute bottom-[-1rem] right-[-1rem]"
          >
            +
          </button>
          <ChangeAvatarModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </div>
      <div className="relative">
        <div className="p-5 absolute bottom-0 lg:left-[10%]">
          <h1 className="font-alli text-5xl md:text-[5rem]">Profile</h1>
        </div>
        <button
          id="save"
          className="absolute whitespace-nowrap left-4 top-1 lg:left-[10%] flex justify-center items-center gap-2 py-[5px] px-[10px] rounded-full text-holiblue text-[10px] border-[1.8px] border-holiblue font-ndo hover:scale-105 transition-all duration-800 cursor-pointer"
          type="submit"
          onClick={handleSaveProfile}
        >
          <BsCloudUpload size={15} className="rounded-full w-full h-full" />
          {isLoading ? <GridLoader className="h-1 w-1" /> : "Save changes"}
        </button>
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
