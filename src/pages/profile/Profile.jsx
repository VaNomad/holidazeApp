// import { CurrentStorage } from "../../utils/CurrentStorage";
// import header from "../../assets/images/maldives1.jpg";
// import { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineCamera } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";
// import noAvatar from "../../assets/vectors/hLogoGreen.png";
// import { ChangeAvatarModal } from "../../components/ui/modals/ChangeAvatarModal";
import { useUser } from "../../context/UserContext"; 
// import { CurrentStorage } from "../../utils/CurrentStorage";

export const Profile = () => {
  // const userData = CurrentStorage();
  // const [isModalOpen, setModalOpen] = useState(false);
  const { user } = useUser();
  // const { imageUrl } = useUser();
  // console.log("User in Profile:", user);
  
  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);
  // console.log("User:", user)
  // console.log(useUser())

  return (
    <div className="bg-black">
      {/* <div>
        <div>
          <img
            src={header}
            alt="profile header"
            className="h-[400px] w-full object-cover object-bottom"
          />
        </div>
        <div className="absolute top-[25%] md:top-[18%] right-[25%] md:right-[30%] flex flex-col">
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
            className="text-4xl text-holiblue p- absolute bottom-[-1rem] right-[-1rem]"
          >
            +
          </button>
          <ChangeAvatarModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-evenly h-[40vh]">
        <div className="relative ps-14 pe-5 py-1 border-[2px] border-holipink rounded-full w-[80%] sm:max-w-[30rem]">
          <div className="absolute top-0 left-[-1px]">
            <AiOutlineUser
              size={32}
              className="text-black bg-holipink rounded-full p-1"
            />
          </div>
          {/* {user && <p>{user.name}</p>} */}
          <p className="whitespace-nowrap">{user.name}</p>
        </div>
        <div className="relative ps-14 pe-5 py-1 border-[2px] border-holipink rounded-full w-[80%] sm:max-w-[30rem]">
          <div className="absolute top-0 left-0">
            <AiOutlineMail
              size={32}
              className="text-black bg-holipink rounded-full p-1"
            />
          </div>
          <p className="whitespace-nowrap">{user.email}</p>
        </div>
        <div className="relative ps-14 pe-5 py-1 border-[2px] border-holipink rounded-full w-[80%] sm:max-w-[30rem]">
          <div className="absolute top-0 left-0">
            <AiOutlineCamera
              size={32}
              className="text-black bg-holipink rounded-full p-1"
            />
          </div>
          <p className="whitespace-nowrap overflow-hidden">{user.avatar}</p>
        </div>
        <div className="relative ps-14 pe-5 py-1 border-[2px] border-holipink rounded-full w-[80%] sm:max-w-[30rem]">
          <div className="absolute top-0 left-0">
            <BsKey
              size={32}
              className="text-black bg-holipink rounded-full p-1"
            />
          </div>
          <p className="whitespace-nowrap flex items-center justify-between">
            Venue Manager:{" "}
            {user.venueManager ? (
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
