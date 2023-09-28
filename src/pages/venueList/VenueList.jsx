import { Api } from "../../api/Api";
import { API_BASE_URL } from "../../api/endpoints";
import { GridLoader } from "react-spinners";
import { ErrorDisplay } from "../../components/ui/messages/ErrorDisplay";
import { AllVenuesCard } from "../../components/cards/AllVenuesCard";

const query = "?sortOrder=desc&sort=created&_owner=true&_bookings=true&limit=10;";
const isUrl = (`${API_BASE_URL}/venues/${query}`);

export const VenueList = () => {
  const { data, isLoading, hasError, errorDisplay } = Api(isUrl);

  if (isLoading) {
    return (
      <div>
        <GridLoader size={50} color="purple" />
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
    <div>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        Venue List
      </h1>
      <div className="flex justify-center items-center max-w-md p-5 mx-auto">
        {filteredVenues.length === 0 ? (
          <div>
            <h1>No venues match your search, please try again!</h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 mx-auto">
            {filteredVenues.map((venue) => {
              return <AllVenuesCard key={venue.id} venue={venue} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
