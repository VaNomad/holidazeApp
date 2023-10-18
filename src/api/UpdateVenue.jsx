import { useState } from "react";

export const UpdateVenueCall = (url) => {
  const [updateVenueData, setUpdateVenueData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const putData = async (updateData) => {
    const accessToken = localStorage.getItem("accessToken");
    const userParsed = JSON.parse(localStorage.getItem("user"));
    const user = userParsed.name;
    console.log(user);
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(updateData),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Error sending update data", response);
      }

      const data = await response.json();
      console.log(data);
      setUpdateVenueData(data);
    } catch (error) {
      setHasError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { updateVenueData, isLoading, hasError, putData };
};
