import { Api } from "../../api/Api";
import { API_BASE_URL } from "../../api/endpoints";
// import { GridLoader } from "react-spinners";
import { Loader } from "../../components/ui/loader/Loader";
import { ErrorDisplay } from "../../components/ui/messages/ErrorDisplay";
import { AllVenuesCard } from "../../components/cards/AllVenuesCard";
import { SearchBar } from "../../components/search/Search";
import { useState } from "react";

const query = "?sortOrder=desc&sort=created&_owner=true&_bookings=true;";
const isUrl = `${API_BASE_URL}/venues/${query}`;

export const VenueList = () => {
  const { data, isLoading, hasError, errorDisplay } = Api(isUrl);
  const [search, setSearch] = useState("");

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
        <ErrorDisplay message={errorDisplay.errorMessage} />
      </div>
    );
  }

  const filteredVenues = data.filter((venue) => {
    return (
      venue.name.toLowerCase().includes(search.toLowerCase()) ||
      venue.location.country.toLowerCase().includes(search.toLocaleLowerCase())
    );
  });

  return (
    <>
      <div id="top"></div>
      <div className="flex flex-col items-center bg-black">
        <SearchBar onSearch={setSearch} />
        <div className="flex justify-center items-center max-w-md p-2 mx-auto z-40">
          {filteredVenues.length === 0 ? (
            <div>
              <h1 className="font-alli text-4xl text-holipink">
                No venues match your search, please try again!
              </h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3 mx-auto bg-black">
              {filteredVenues.map((venue) => {
                return <AllVenuesCard key={venue.id} venue={venue} />;
              })}
            </div>
          )}
        </div>
        {/* Link or button that takes you back to the top of this page */}
      </div>
    </>
  );
};
