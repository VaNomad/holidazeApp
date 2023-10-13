
import { useUser } from "../../context/UserContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Profile } from "./Profile";
import { MyBookings } from "../../api/MyBookings";
import { ProfileHeader } from "./ProfileHeader";

export const ProfileIndex = () => {
  const { user } = useUser();
  
  console.log("User in Profile:", user);
  console.log("User:", user);
  console.log(useUser());

  return (
    <div className="bg-black">
      <ProfileHeader />
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
            <p>Your bookings</p>
            <MyBookings />
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
