import { AiTwotoneStar } from "react-icons/ai";
import { VenuesCarousel } from "../carousel/VenuesCarousel";
import { Link } from "react-router-dom";

export const AllVenuesCard = ({ venue }) => {
  // const { venues } = FetchAllVenues();
  const { id, name, price, maxGuests, rating, location } = venue;

  console.log("Venues Card Data:", venue);

  return (
    <div>
      <VenuesCarousel />
      <Link to={`/venues/${id}`}>
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <p>{name}</p>
            <p>{location.address}</p>
          </h5>
        </a>
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
          <a
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            href="#"
          >
            <p>{maxGuests}</p>
          </a>
        </div>
      </Link>
    </div>
  );
};
