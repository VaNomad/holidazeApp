
import { useUser } from "../../context/UserContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Profile } from "./Profile";
import { MyBookings } from "../../api/MyBookings";
import { MyVenues } from "../../api/MyVenues";
import { ProfileHeader } from "./ProfileHeader";
import { CreateVenueForm } from "../../components/forms/CreateVenueForm";

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
            <Tab>Add Venue</Tab>
          </TabList>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <h2>Your bookings</h2>
            <MyBookings />
          </TabPanel>
          <TabPanel>
            <MyVenues />
          </TabPanel>
          <TabPanel>
            <CreateVenueForm />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
