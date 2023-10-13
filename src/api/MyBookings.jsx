import { useEffect, useState } from "react";
import { API_BASE_URL } from "./endpoints";
import { ErrorDisplay } from "../components/ui/messages/ErrorDisplay";
import { Loader } from "../components/ui/loader/Loader";
import { BookingsCard } from "../components/cards/BookingsCard";

export function MyBookings() {
  const [bookingData, setBookingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      const user = localStorage.getItem("username");
      console.log(user);
      const isUrl = `${API_BASE_URL}/profiles/${user}?_bookings=true&_venues=true;`;

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

        console.log(response);

        const data = await response.json();
        console.log(data);
        // console.log("bookingData:", bookingData);

        setBookingData(data);
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
        <ErrorDisplay message={errorDisplay.errorMessage} />
      </div>
    );
  }

  console.log("LAST LOG BEFORE MOUNT:", bookingData)
  return (
    <div>
      {
        bookingData.bookings.map((data) => {
          console.log(data);
          return <BookingsCard data={data} key={data.id} />;
        })
      }
    </div>
  );
}
