import { useState } from "react";

export const BookingCall = (url) => {
  const [createBookingData, setCreateBookingData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postData = async (createData) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      setLoading(true)
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
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { createBookingData, loading, error, postData };
};
