import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "./endpoints";

export const ApiId = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData(url) {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch(url);

        if (!response) {
          throw new Error("Could not return data from the API");
        }

        const data = await response.json();

        setData(data);
      } catch (error) {
        console.log("Api Catch Error", error);
        setHasError(true);
        setErrorDisplay(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(`${API_BASE_URL}/venues/${id}`);
  }, [id]);

  return { data, isLoading, hasError, errorDisplay };
};
