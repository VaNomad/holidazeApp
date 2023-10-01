import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "./endpoints";
import { SpecificCard } from "../components/cards/SpecificCard";
import { ErrorDisplay } from "../components/ui/messages/ErrorDisplay";
import { Loader } from "../components/ui/loader/Loader";

export const ApiId = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(null);
  let { id } = useParams();
  console.log(id)

  useEffect(() => {
    async function fetchData(url) {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch(url);
        console.log(response);

        if (!response) {
          throw new Error("Could not return data from the API");
        }

        const data = await response.json();
        console.log(data)

        setData(data);
      } catch (error) {
        console.log("Api Catch Error", error);
        setHasError(true);
        setErrorDisplay(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(`${API_BASE_URL}/venues/${id}?_owner=true&booking=true`);
    
  }, [id]);

  if (isLoading || !data) {
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

  return (
    <div>
      <SpecificCard key={data.id} data={data} />
    </div>
  )
  
};
