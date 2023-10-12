import { useEffect, useState } from "react";
import { API_BASE_URL } from "./endpoints";
import { useUser } from "../context/UserContext";

export function MyBookings() {
  const { user } = useUser();
  const accessToken = user.accessToken;
  const [bookingData, setBookingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(null);
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      const query = "?sortOrder=desc&sort=created&_owner=true&_bookings=true;";
      const isUrl = `${API_BASE_URL}/profiles/${user.name}${query}`;
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      };

      const requestOptions = {
        method: "GET",
        headers: headers,
      };

      try {
        setIsLoading(true);
        setHasError(false);
        const response = await fetch(isUrl, requestOptions);

        if (!response.ok) {
          throw new Error(
            `Could not return data from the API: Status: ${response.status}`
          );
        }

        console.log(response);

        const data = await response.json();
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
  }, [user.name, accessToken]);

  return { bookingData, isLoading, hasError, errorDisplay };
}
