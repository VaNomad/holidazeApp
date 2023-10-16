// import { useEffect, useState } from "react";
// import { Loader } from "../components/ui/loader/Loader";
// import { ErrorDisplay } from "../components/ui/messages/ErrorDisplay";

// export const BookingCall = (url) => {
//   const [createBookingData, setCreateBookingData] = useState(null);
//   const [hasError, setHasError] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [errorDisplay, setErrorDisplay] = useState(null);

//   useEffect(() => {
//     const postData = async () => {
//       const accessToken = localStorage.getItem("accessToken");
//       try {
//         setIsLoading(true);
//         const response = await fetch(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//           body: JSON.stringify(createBookingData),
//         });
//         console.log(response);
//         if (!response.ok) {
//           throw new Error(`Error sending data, status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);
//         setCreateBookingData(data);
//       } catch (error) {
//         setHasError(true);
//         setErrorDisplay(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     postData();
//   }, [url, createBookingData]);

//   if (isLoading) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }

//   if (hasError) {
//     return (
//       <div>
//         <ErrorDisplay message={errorDisplay} />
//       </div>
//     );
//   }

//   // You can return a function to trigger postData if needed
//   return { createBookingData, isLoading, hasError, postData: postData };
// };
