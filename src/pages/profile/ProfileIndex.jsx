
import { useUser } from "../../context/UserContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Profile } from "./Profile";
import { MyBookings } from "../../api/MyBookings";
import { MyVenues } from "../../api/MyVenues";
import { ProfileHeader } from "./ProfileHeader";
import { CreateVenueForm } from "../../components/forms/CreateVenueForm";
import { MyVenueBookingsCall } from "../../api/MyVenueBookings";
import { TabsBtn } from "../../components/ui/buttons/TabsBtn";

export const ProfileIndex = () => {
  const { user } = useUser();

  console.log("User in Profile:", user);
  console.log("User:", user);
  console.log(useUser());

  return (
    <div id="top" className="bg-cover bg-hero-pattern bg-fixed md:bg-center">
      <ProfileHeader />
      <div className="flex justify-center py-4">
        <Tabs className="backdrop-blur-sm rounded-3xl m-8 md:m-10 lg:m-14">
          <TabList className="flex flex-wrap font-thin text-[22px] px-2 rounded-b2xl">
            <Tab className="mx-1 px-2 py-1 border-x-1 border-t-1 border-x-zinc-500 border-t-zinc-500 rounded-t-md cursor-pointer">
              <span className="font-semibold">my</span>Profile
            </Tab>
            <Tab className="mx-1  px-2 py-1 border-x border-t border-x-zinc-500 border-t-zinc-500 rounded-t-md cursor-pointer">
              <span className="font-semibold">my</span>Bookings
            </Tab>
            {user.venueManager && (
              <Tab className="mx-1  px-2 py-1 border-x border-t border-x-zinc-500 border-t-zinc-500 rounded-t-md cursor-pointer">
                <span className="font-semibold">my</span>Homes
              </Tab>
            )}
            {user.venueManager && (
              <Tab className="mx-1  px-2 py-1 border-x border-t border-x-zinc-500 border-t-zinc-500 rounded-t-md cursor-pointer">
                <span className="font-semibold">add</span>Home
              </Tab>
            )}
            {user.venueManager && (
              <Tab className="mx-1  px-2 py-1 border-x border-t border-x-zinc-500 border-t-zinc-500 rounded-t-md cursor-pointer">
                <span className="font-semibold">to</span>Host
              </Tab>
            )}
          </TabList>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <MyBookings />
          </TabPanel>
          <TabPanel>
            <MyVenues />
          </TabPanel>
          <TabPanel>
            <CreateVenueForm />
          </TabPanel>
          <TabPanel>
            <MyVenueBookingsCall />
          </TabPanel>
        </Tabs>
      </div>
      <TabsBtn />
    </div>
  );
};
