import { Api } from "../../api/Api";
import { API_BASE_URL } from "../../api/endpoints";
// import { GridLoader } from "react-spinners";
import { Loader } from "../../components/ui/loader/Loader";
import { ErrorDisplay } from "../../components/ui/messages/ErrorDisplay";
import { AllVenuesCard } from "../../components/cards/AllVenuesCard";

const query = "?sortOrder=desc&sort=created&_owner=true&_bookings=true;";
const isUrl = (`${API_BASE_URL}/venues/${query}`);

export const VenueList = () => {
  const { data, isLoading, hasError, errorDisplay } = Api(isUrl);

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
      venue.name.toLowerCase() || venue.location.country.toLowerCase()
    );
  });

  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="mt-6 font-alli text-[35px]">Popular Venues</h1>
      <div className="flex justify-center items-center max-w-md p-2 mx-auto">
        {filteredVenues.length === 0 ? (
          <div>
            <h1>No venues match your search, please try again!</h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 mx-auto">
            {filteredVenues.map((venue) => {
              return <AllVenuesCard key={venue.id} venue={venue} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
