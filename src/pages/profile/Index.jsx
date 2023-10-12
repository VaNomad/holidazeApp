import header from "../../assets/images/maldives1.jpg";

// import { AiOutlineUser, AiOutlineMail, AiOutlineCamera } from "react-icons/ai";
// import { BsKey } from "react-icons/bs";
// import { GiCheckMark, GiCrossMark } from "react-icons/gi";
import { useState } from "react";
import noAvatar from "../../assets/vectors/hLogoGreen.png";
import { ChangeAvatarModal } from "../../components/ui/modals/ChangeAvatarModal";
import { useUser } from "../../context/UserContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Profile } from "./Profile";

export const ProfileIndex = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { user } = useUser();
  // const { imageUrl } = useUser();
  console.log("User in Profile:", user);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  console.log("User:", user);
  console.log(useUser());

  return (
    <div className="bg-black">
      <div>
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
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Profile</Tab>
            <Tab>Bookings</Tab>
            <Tab>+</Tab>
            <Tab>Venues</Tab>
          </TabList>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <p>All your bookings</p>
          </TabPanel>
          <TabPanel>
            <p>Add Venue</p>
          </TabPanel>
          <TabPanel>Your Venues</TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
