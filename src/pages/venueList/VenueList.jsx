import { Api } from "../../api/Api";
import { API_BASE_URL } from "../../api/endpoints";
// import { GridLoader } from "react-spinners";
import { Loader } from "../../components/ui/loader/Loader";
import { ErrorDisplay } from "../../components/ui/messages/ErrorDisplay";
import { AllVenuesCard } from "../../components/cards/AllVenuesCard";
import { SearchBar } from "../../components/search/Search";
import { useState } from "react";
// import hero from "../../assets/images/nickson.jpg";

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
    <div>
      <div className="flex flex-col items-center">
        <SearchBar onSearch={setSearch} />
        <div className="flex justify-center items-center max-w-6xl p-2 mx-auto z-40">
          {filteredVenues.length === 0 ? (
            <div>
              <h1 className="font-alli text-4xl text-holipink">
                No venues match your search, please try again!
              </h1>
            </div>
          ) : (
            <div className="container mx-auto md:max-w-3xl lg:max-w-6xl">
              <div className="container grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 sm:gap-3 lg:grid-cols-3 md:gap-5">
                {filteredVenues.map((venue) => {
                  return <AllVenuesCard key={venue.id} venue={venue} />;
                })}
              </div>
            </div>
          )}
        </div>
        {/* Link or button that takes you back to the top of this page */}
      </div>
    </div>
  );
};
