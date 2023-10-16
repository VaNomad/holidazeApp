import { useState } from "react";

export const BookingCall = (url) => {
  const [createBookingData, setCreateBookingData] = useState(null);
  const [hasError, setHasError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const postData = async (createData) => {
    const accessToken = localStorage.getItem("accessToken");
    const userParsed = JSON.parse(localStorage.getItem("user"));
    const user = userParsed.name;
    console.log(user)
    try {
      setIsLoading(true)
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(createData),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Error sending data", response);
      }

      const data = await response.json();
      console.log(data);
      setCreateBookingData(data);
    } catch (error) {
      setHasError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createBookingData, isLoading, hasError, postData };
};
