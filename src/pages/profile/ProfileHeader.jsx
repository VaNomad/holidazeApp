import { useState } from "react";
import noAvatar from "../../assets/vectors/hLogoGreen.png";
import { ChangeAvatarModal } from "../../components/ui/modals/ChangeAvatarModal";
import { useUser } from "../../context/UserContext";
import "react-tabs/style/react-tabs.css";
import {FaPlus} from "react-icons/fa6"

export const ProfileHeader = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { user } = useUser();

  console.log("User in Profile:", user);

  const toggleModal = () => setModalOpen(!isModalOpen);

  console.log("User:", user);
  console.log(useUser());

  return (
    <div>
      <div className="h-[250px] md:h-[300px] w-full bg-transparent">
      </div>
      <div className="absolute top-[14%] md:top-[14%] right-[25%] md:right-[25%] flex flex-col">
        <div className="h-[150px] md:h-[200px] w-[150px] md:w-[200px] border-4 border-zinc-800 rounded-full">
          {user && (
            <img
              id="avatar-image"
              src={user.avatar || noAvatar}
              alt="avatar"
              className="w-full h-full object-cover rounded-full"
            />
          )}
        </div>
        <button
          id="plus-button"
          onClick={toggleModal}
          className="p-1 text-3xl text-holiblue absolute top-[6.5rem] left-[9rem] md:top-[11rem] md:left-[11rem] bg-zinc-800 rounded-full"
        >
          <FaPlus />
        </button>
        <ChangeAvatarModal isOpen={isModalOpen} closeModal={toggleModal} />
      </div>
    </div>
  );
};
