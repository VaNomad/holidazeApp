import { AiTwotoneStar } from "react-icons/ai";
import { VenuesCarousel } from "../carousel/VenuesCarousel";
import { Link } from "react-router-dom";

export const AllVenuesCard = ({ venue }) => {
  // const { venues } = FetchAllVenues();
  const { id, name, media, price, rating, location: {country, city} } = venue;

  return (
    <div>
      <VenuesCarousel media={media} name={name} />
      <Link to={`/venues/${id}`}>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <p>{name}</p>
          <p>{ country }{city}</p>
        </h5>
        <div className="mb-5 mt-2.5 flex items-center">
          <AiTwotoneStar className="text-black" />
          <AiTwotoneStar className="text-black" />
          <AiTwotoneStar className="text-black" />
          <AiTwotoneStar className="text-black" />
          <AiTwotoneStar className="text-black" />
          <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            <p>{rating}</p>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {price}
          </span>
        </div>
      </Link>
    </div>
  );
};
