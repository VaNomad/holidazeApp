import { AiTwotoneStar } from "react-icons/ai";
import { VenuesCarousel } from "../carousel/VenuesCarousel";
// import { Link } from "react-router-dom";
import {BsPeople, BsWifi} from "react-icons/bs"
import {PiBowlFood} from "react-icons/pi"
import { GiHollowCat } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

export const SpecificCard = ({ venue }) => {
  // const { venues } = FetchAllVenues();
  const {
    id,
    name,
    media,
    price,
    maxGuests: {},
    rating,
    location: { address, city, country },
    meta: { wifi, parking, breakfast, pets },
    owner: { name: owner, email, avatar },
  } = venue;

  console.log("Venues Card Data:", venue);

  return (
    <div>
      <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        <h1>{name}</h1>
        <h5>
          {city}, {country}
        </h5>
        <h6>{address}</h6>
      </div>
      <VenuesCarousel media={media} name={name} />
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
        ></a>
      </div>
      <ul className="flex">
        <li className="flex justify-center gap-1">
          <BsPeople />
        </li>
        <li className="flex justify-center gap-1">
          <PiBowlFood />
        </li>
        <li className="flex justify-center gap-1">
          <BsWifi />
        </li>
        <li className="flex justify-center gap-1">
          <GiHollowCat />
        </li>
        <li className="flex justify-center gap-1">
          <CiParking1 />
        </li>
      </ul>
    </div>
  );
};
