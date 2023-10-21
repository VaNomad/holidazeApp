import { AiTwotoneStar } from "react-icons/ai";
import { VenuesCarousel } from "../carousel/VenuesCarousel";
import { Link } from "react-router-dom";

export const AllVenuesCard = ({ venue }) => {
  const { id, name, media, price, rating, location: {country, city} } = venue;

  return (
    <div className="container mx-auto backdrop-blur-md rounded-2xl p-2 hover:scale-95 hover:backdrop-blur-sm transition-all duration-600">
      <VenuesCarousel media={media} name={name} />
      <Link to={`/venues/${id}`}>
        <div className="p-2 mt-1">
          <h1 className="font-dm text-lg uppercase flex flex-wrap">
            {name}
          </h1>
          <div className="flex font-alli text-3xl">
            <p className="">{country},</p>
            &nbsp;
            <p>{city}</p>
          </div>
        </div>
        <div className="flex justify-between px-2">
          <div className="mb-2 flex items-center">
            <AiTwotoneStar className="text-holiblue" />
            <span className="ml-3 mr-2 rounded-full px-2 py-0.5 text-xs border border-[#FCB5FF]">
              {rating ? (
                <p>{rating}</p>
              ) : (
                <p className="text-[8px] font-dm uppercase">No rating</p>
              )}
            </span>
          </div>
          <div className="flex items-center justify-end text-lg font-dm tracking-wider font-semibold text-zinc-800>">
            <p>$ &nbsp; </p>
            <p>{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
