
import { useUser } from "../../context/UserContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Profile } from "./Profile";
import { MyBookings } from "../../api/MyBookings";
import { MyVenues } from "../../api/MyVenues";
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
            <Tab>Venues</Tab>
            <Tab>+</Tab>
          </TabList>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <p>Your bookings</p>
            <MyBookings />
          </TabPanel>
          <TabPanel>
            <p>Your Venues</p>
          </TabPanel>
          <TabPanel>
            <p>Add a new Venue</p>
            <MyVenues />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
