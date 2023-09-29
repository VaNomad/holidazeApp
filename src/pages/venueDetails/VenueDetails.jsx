import { Api } from "../../api/Api";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/ui/loader/Loader";
import { ErrorDisplay } from "../../components/ui/messages/ErrorDisplay";
import { SpecificCard } from "../../components/cards/SpecificCard";

export const VenueDetails = () => {
  const { venueId } = useParams();
  const { data, isLoading, hasError } = Api(venueId)

  return (
    <div>
      <h1 className="flex justify-center mb-[100px] mt-4 font-bold text-2xl">
        Venue Details
      </h1>
      <div>
        {isLoading ? (
          <Loader />
        ) : hasError ? (
          <ErrorDisplay />
        ) : data ? (
          <SpecificCard />
        )}
      </div>
    </div>
  );
};
