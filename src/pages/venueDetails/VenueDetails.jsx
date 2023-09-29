import { ApiId } from "../../api/Api_ID";
import { API_BASE_URL } from "../../api/endpoints";
import { GridLoader } from "react-spinners";
import { ErrorDisplay } from "../../components/ui/messages/ErrorDisplay";
import { SpecificCard } from "../../components/cards/SpecificCard";

const isUrl = `${API_BASE_URL}/venues/${id}`;

export const VenueDetails = ({venue}) => {
  const { data, isLoading, hasError, errorDisplay } = ApiId(isUrl);

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

  return (
    <div>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        Venue List
      </h1>
      <div className="flex justify-center items-center max-w-md p-5 mx-auto">
        {data.length === 0 ? (
          <div>
            <h1>venue does not exist</h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 mx-auto">
            return <SpecificCard key={venue.id} venue={venue} />;
          </div>
        )}
      </div>
    </div>
  );
};
