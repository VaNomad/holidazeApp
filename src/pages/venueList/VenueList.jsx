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
    <div className="mt-10 flex flex-col items-center bg-black">
      <div className="fixed text-center bg-black z-30 w-screen mt-3">
        <h1 className="font-alli text-[40px] decoration-holipink underline-offset-8">
          Popular Venues
        </h1>
      </div>
      <div className="flex justify-center items-center max-w-md p-2 mx-auto mt-16 z-40">
        {filteredVenues.length === 0 ? (
          <div>
            <h1>No venues match your search, please try again!</h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 mx-auto bg-black">
            {filteredVenues.map((venue) => {
              return <AllVenuesCard key={venue.id} venue={venue} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
