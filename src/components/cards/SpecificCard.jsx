import { AiTwotoneStar } from "react-icons/ai";
import { VenuesCarousel } from "../carousel/VenuesCarousel";
import {BsPeople, BsWifi, BsKey} from "react-icons/bs"
import {PiBowlFood} from "react-icons/pi"
import { GiHollowCat } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";

export const SpecificCard = ({ data }) => {
  console.log(data)
  const {
    name,
    media,
    price,
    maxGuests,
    rating,
    location: { address, city, country },
    meta: { wifi, parking, breakfast, pets },
    owner: { owner, email, avatar },
  } = data;
  console.log("Location:", location)

  return (
    <div className="rounded-2xl p-2">
      <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        <h1>{name}</h1>
        <h5>
          {city}, {country}
        </h5>
        <h6>{address}</h6>
      </div>
      <div>
        <BsKey /> {owner}
        {email}
        {avatar}
      </div>
      <VenuesCarousel media={media} name={name} />
      <div className="text-xl mt-1">
        <h1 className="font-dm font-thin text-[20px] uppercase flex flex-wrap">
          {name}
        </h1>
        <div className="flex font-ndo text-[20px]">
          <p className="">{country},</p>
          &nbsp;
          <p>{city}</p>
        </div>
        <div className="flex justify-between">
          <div className="mb-2 mt-2.5 flex items-center">
            <AiTwotoneStar className="text-yellow-400" />
            <span className="ml-3 mr-2 rounded-full px-2 py-0.5 text-xs text-white border border-[#FCB5FF]">
              {rating ? (
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
      </div>
      <ul className="flex flex-col text-white uppercase text-xs gap-2 border border-[#70BAC3] m-1 px-14 py-10 rounded-xl">
        <li className="flex  justify-between items-center">
          <BsPeople size={15} /> {maxGuests}
        </li>
        <li className="flex justify-between items-center">
          <PiBowlFood size={22} />{" "}
          {breakfast ? (
            <GiCheckMark color="#70C376" />
          ) : (
            <GiCrossMark color="#C37070" />
          )}
        </li>
        <li className="flex justify-between items-center">
          <BsWifi size={18} />{" "}
          {wifi ? (
            <GiCheckMark color="#70C376" />
          ) : (
            <GiCrossMark color="#C37070" />
          )}
        </li>
        <li className="flex justify-between items-center">
          <GiHollowCat size={22} />{" "}
          {pets ? (
            <GiCheckMark color="#70C376" />
          ) : (
            <GiCrossMark color="#C37070" />
          )}
        </li>
        <li className="flex justify-between items-center">
          <CiParking1 size={22} />{" "}
          {parking ? (
            <GiCheckMark color="#70C376" />
          ) : (
            <GiCrossMark color="#C37070" />
          )}
        </li>
      </ul>
    </div>
  );
};


