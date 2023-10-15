import { useState, useEffect } from "react";
import { ErrorDisplay } from "../components/ui/messages/ErrorDisplay";
import { Loader } from "../components/ui/loader/Loader";
import { CreateVenueCard } from "../components/cards/CreateVenueCard";

export const CreateVenue = ({url, createData}) => {
  const [createVenueData, setCreateVenueData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(null);

  useEffect(() => {
    const postData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      try {
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
        setCreateVenueData(data);
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

  return (
    <div>
      <CreateVenueCard key={createVenueData.id} data={createVenueData} />
    </div>
  );
};
