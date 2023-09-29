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
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <ErrorDisplay />
      ) : (
        <div>
          <SpecificCard venue={data} />
        </div>
      )}
    </div>
  );
};
