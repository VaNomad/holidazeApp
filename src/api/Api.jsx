import { useState, useEffect } from "react";

export const Api = (url) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorDisplay, setErrorDisplay] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch(url);
        console.log(response);

        if (!response) {
          throw new Error("Could not return data from the API");
        }

        const data = await response.json();
        console.log(data);

        setData(data);
      } catch (error) {
        console.log("Api Catch Error", error);
        setHasError(true);
        setErrorDisplay(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url])

  return {data, isLoading, hasError, errorDisplay}
}