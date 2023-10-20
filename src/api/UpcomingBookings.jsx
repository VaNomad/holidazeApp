import { useEffect, useState } from "react";
import { API_BASE_URL } from "./endpoints";
import { ErrorDisplay } from "../components/ui/messages/ErrorDisplay";
import { Loader } from "../components/ui/loader/Loader";

export function UpcomingBookingsCall() {
  const [bookingData, setBookingData] = useState([]);
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
      const isUrl = `${API_BASE_URL}/profiles/${user}/venues?_bookings=true&_owner=true`;

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

        console.log("RESPONSE FROM MY UPCOMING BOOKINGS", response);

        const data = await response.json();
        console.log("Upcoming Data Call", data);
        const upcomingBooking = data[1].bookings;

       

        setBookingData(upcomingBooking);
        console.log(upcomingBooking);
        setIsLoading(false);
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

  if (isLoading || !bookingData) {
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

  if (bookingData.length === 0) {
    return <div>No bookings available.</div>;
  }

  console.log("LAST LOG BEFORE MOUNT:", bookingData);
  return (
    <div>
      {/* {{bookingData.bookings.map((data) => {
        console.log(data);
        return (
          <div>{data.id}</div>
        )
      })}} */}
      {/* {data.id} */}
    </div>
  );
}
