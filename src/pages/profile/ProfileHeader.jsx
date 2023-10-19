import header from "../../assets/images/maldives1.jpg";
import { useState } from "react";
import noAvatar from "../../assets/vectors/hLogoGreen.png";
import { ChangeAvatarModal } from "../../components/ui/modals/ChangeAvatarModal";
import { useUser } from "../../context/UserContext";
import "react-tabs/style/react-tabs.css";

export const ProfileHeader = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { user } = useUser();

  console.log("User in Profile:", user);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  console.log("User:", user);
  console.log(useUser());

  return (
    <div>
      <div>
        <img
          src={header}
          alt="profile header"
          className="h-[250px] mb-3 w-full object-cover object-bottom md:object-center"
        />
      </div>
      <div className="absolute top-[15%] md:top-[11%] right-[25%] md:right-[25%] flex flex-col">
        <div className="h-[150px] md:h-[200px] w-[150px] md:w-[200px] border-4 border-zinc-700 bg-black rounded-full">
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
          onClick={openModal}
          className="text-5xl text-holiblue absolute top-[7.5rem] left-[8.5rem] md:top-[11rem] md:left-[11rem]"
        >
          +
        </button>
        <ChangeAvatarModal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};
