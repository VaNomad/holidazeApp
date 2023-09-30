import { AiTwotoneStar } from "react-icons/ai";
import { VenuesCarousel } from "../carousel/VenuesCarousel";
import { Link } from "react-router-dom";

export const AllVenuesCard = ({ venue }) => {
  const { id, name, media, price, rating, location: {country, city} } = venue;

  return (
    <div className="bg-zinc-900 rounded-2xl p-2 hover:scale-95 hover:bg-zinc-800 transition-all duration-600">
      <VenuesCarousel media={media} name={name} />
      <Link to={`/venues/${id}`}>
        <div className="text-xl mt-1">
          <h1 className="font-dm font-thin text-[20px] uppercase flex flex-wrap">
            {name}
          </h1>
          <div className="flex font-ndo text-[20px]">
            <p className="">{country},</p>
            &nbsp;
            <p>{city}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mb-2 mt-2.5 flex items-center">
            <AiTwotoneStar className="text-yellow-400" />
            <span className="ml-3 mr-2 rounded-full px-2 py-0.5 text-xs text-white border border-[#FCB5FF]">
              { rating ? (
                <p>{rating}</p>
              ) : (
                  <p className="text-[8px] font-dm uppercase">No rating</p>
              )}
            </span>
          </div>
          <div className="flex items-center justify-end text-lg font-dm tracking-wider font-semibold text-gray-900 dark:text-white">
            <p>$ &nbsp; </p>
            <p>{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
