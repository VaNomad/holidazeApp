// import { AiTwotoneStar } from "react-icons/ai";
import { VenuesCarousel } from "../carousel/VenuesCarousel";
import {BsPeople, BsWifi, BsKey} from "react-icons/bs"
import {PiBowlFood} from "react-icons/pi"
import { GiHollowCat } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";
import {TbArrowRight} from "react-icons/tb"

export const SpecificCard = ({ data }) => {
  console.log(data)
  const {
    name,
    media,
    price,
    maxGuests,
    rating,
    description,
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
        <h1 className="font-dm font-thin text-[20px] uppercase flex flex-wrap p-1">
          {name}
        </h1>
        <div className="flex justify-between font-ndo text-[20px] p-1">
          <div className="flex">
            <p className="">{country},</p>
            &nbsp;
            <p>{city}</p>
          </div>
          <div className="flex">
            <div className="flex items-center justify-end text-lg font-dm tracking-wider font-semibold text-gray-900 dark:text-white">
              <p>$ &nbsp; </p>
              <p>{price}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-1">
          <div className="mb-2 mt-2.5 flex items-center">
            <h2 className="uppercase text-sm">Rating: </h2>
            <span className="ml-3 mr-2 rounded-full py-0.5 px-3 text-black text-sm bg-[#FCB5FF]">
              {rating ? (
                <p>{rating} / 5</p>
              ) : (
                <p className="text-[8px] font-dm uppercase">No rating</p>
              )}
            </span>
          </div>
        </div>
      </div>
      <ul className="flex flex-col text-white uppercase text-xs gap-2 border border-[#70BAC3] m-1 px-14 py-10 rounded-xl">
        <li className="grid grid-cols-3">
          <BsPeople size={15} />
          <h2>max guests</h2>
          <p className="flex justify-end items-center">{maxGuests}</p>
        </li>
        <li className="grid grid-cols-3">
          <PiBowlFood size={22} />
          <h2 className="flex items-center">Breakfast</h2>
          <p className="flex justify-end items-center">
            {breakfast ? (
              <GiCheckMark color="#70C376" />
            ) : (
              <GiCrossMark color="#C37070" />
            )}
          </p>
        </li>
        <li className="grid grid-cols-3">
          <BsWifi size={18} />
          <h2 className="flex items-center">Wifi</h2>
          <p className="flex justify-end items-center">
            {wifi ? (
              <GiCheckMark color="#70C376" />
            ) : (
              <GiCrossMark color="#C37070" />
            )}
          </p>
        </li>
        <li className="grid grid-cols-3">
          <GiHollowCat size={22} />
          <h2 className="flex items-center">Pets allowed</h2>
          <p className="flex justify-end items-center">
            {pets ? (
              <GiCheckMark color="#70C376" />
            ) : (
              <GiCrossMark color="#C37070" />
            )}
          </p>
        </li>
        <li className="grid grid-cols-3">
          <CiParking1 size={22} />
          <h2 className="flex items-center">Parking on site</h2>
          <p className="flex justify-end items-center">
            {parking ? (
              <GiCheckMark color="#70C376" />
            ) : (
              <GiCrossMark color="#C37070" />
            )}
          </p>
        </li>
      </ul>
      <div className="p-2 bg-zinc-900 rounded-xl mt-3">
        <h2 className="uppercase text-sm font-thin text-zinc-300 mb-2">
          Description:{" "}
        </h2>
        {description}
      </div>
      <div className="flex justify-end">
        <button className="flex items-center rounded-full bg-holipink py-2 px-6 text-black tracking-widest font-dm text-[18px]">
          Check Availability
          <TbArrowRight size={22} className="ms-4" />
        </button>
      </div>
    </div>
  );
};


