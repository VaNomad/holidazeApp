import { useState, useEffect } from "react";
import { API_BASE_URL } from "./endpoints";
import { ErrorDisplay } from "../components/ui/messages/ErrorDisplay";
import { Loader } from "../components/ui/loader/Loader";

export const CreateVenue = ({url, createData}) => {
  const [createVenueData, setCreateVenueData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(null);

  useEffect(() => {
    const postData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const userParsed = JSON.parse(localStorage.getItem("user"));
      const user = userParsed.name;
      console.log(user);
      const isUrl = `${API_BASE_URL}/venues`;
      try {
        const response = await fetch(isUrl, {
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
        setCreateVenueData(data);
        setIsLoading(false)
      } catch (error) {
        setHasError(true);
        setErrorDisplay(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    postData();
  }, [url, createData])

  if (isLoading) {
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

  console.log("LAST LOG BEFORE MOUNT:", createVenueData);
  return { createVenueData, isLoading, hasError, errorDisplay};
};
