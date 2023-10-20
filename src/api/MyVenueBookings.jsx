import { useEffect, useState } from "react";
import { API_BASE_URL } from "./endpoints";
import { ErrorDisplay } from "../components/ui/messages/ErrorDisplay";
import { Loader } from "../components/ui/loader/Loader";
import { MyVenueBookingsCard } from "../components/cards/MyVenueBookingsCard";

export function MyVenueBookingsCall() {
  const [myVenueData, setMyVenueData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      const userParsed = JSON.parse(localStorage.getItem("user"));
      const user = userParsed.name;
      console.log(user);
      const isUrl = `${API_BASE_URL}/profiles/${user}?_bookings=true&_owner=true`;

      try {
        setIsLoading(true);
        setHasError(false);
        const response = await fetch(isUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(
            `Could not return data from the API: Status: ${response.status}`
          );
        }

        console.log("RESPONSE FROM MY VENUE BOOKINGS", response);

        const data = await response.json();
        console.log("My Venue Bookings Data Call", data);
        const bookingArray = data.bookings;

       

        setMyVenueData(bookingArray);
        console.log(bookingArray);
        
      } catch (error) {
        console.error("Error:", error);
        setHasError(true);
        setErrorDisplay(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading || !myVenueData) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (hasError) {
    return (
      <div>
        <ErrorDisplay message={errorDisplay} />
      </div>
    );
  }

  if (myVenueData.length === 0) {
    return <div>No bookings available.</div>;
  }

  console.log("LAST LOG BEFORE MOUNT:", myVenueData);
  return (
    <div>
      {myVenueData.map((booking) => {
        console.log(booking);
        return <MyVenueBookingsCard booking={booking} key={booking.id} />;
      })}
    </div>
  );
}
