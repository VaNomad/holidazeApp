// import { AiTwotoneStar } from "react-icons/ai";
import { VenuesCarousel } from "../carousel/VenuesCarousel";
import {BsPeople, BsWifi, BsKey} from "react-icons/bs"
import {PiBowlFood} from "react-icons/pi"
import { GiHollowCat } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import { BookingForm } from "../forms/BookingForm";

// import noAvatar from "../../assets/vectors/hLogoGreen.png"
import { BtnFull } from "../ui/buttons/BtnFull";
import { useUser } from "../../context/UserContext";
// import { useContext } from "react";
import { Link } from "react-router-dom";

export const SpecificCard = ({ data }) => {
  const { isAuthenticated } = useUser();
  console.log(data)
  const {
    id,
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
    <div className="rounded-2xl p-5 mt-12 flex flex-col gap-2">
      <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        <h1 className="font-alli font-thin text-[40px] flex flex-wrap">
          {name}
        </h1>
      </div>
      <div className="flex justify-between rounded-full text-black gap-4">
        <div className="flex justify-between items-center underline-2 text-white h-[30px] my-auto w-[70%]">
          <div className="flex items-center me-2">
            <BsKey className="mx-2" size={25} /> {owner}
            <h2 className="font-dm uppercase font-medium text-sm">owner</h2>
          </div>
          <p className="flex font-dm font-thin text-xs justify-center">
            {email}
          </p>
        </div>
        <div className="rounded-full border border-holipink w-[40px] h-[40px] ">
          <img
            className="w-full h-full rounded-full object-cover"
            src={avatar}
            alt=""
          />
        </div>
      </div>

      <VenuesCarousel media={media} name={name} />

      <div className="p-2 bg-zinc-900 rounded-xl mt-3">
        <h2 className="text-sm font-semibold text-zinc-300 mb-2">
          Description:{" "}
        </h2>
        <p className="font-dm font-thin text-xs text-zinc-400">{description}</p>
      </div>

      <ul className="flex flex-col text-white uppercase text-xs font-thin divide-y-[1px] divide-zinc-600 border border-zinc-600 rounded-xl p-2 gap-1">
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

      <div className="text-xl mt-1 p-2 bg-zinc-900 text-zinc-400 rounded-xl">
        <h2 className="font-dm font-semibold text-zinc-300 text-xs mb-1">
          Location
        </h2>
        <div className="flex">
          <p className="font-dm font-thin">{country},</p>
          &nbsp;
          <p className="font-dm font-thin">{city}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-dm font-thin text-[20px]">{address}</p>
          <div className="flex">
            <div className="flex items-center justify-end text-lg font-dm tracking-wider font-semibold text-gray-900 dark:text-white">
              <p>$ &nbsp; </p>
              <p>{price}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-1">
          <div className="mb-2 mt-2.5 flex items-center">
            <h2 className="text-sm font-semibold text-zinc-300">Rating: </h2>
            <span className="ml-3 mr-2 rounded-full px-3 text-white text-sm border-2 border-[#FCB5FF]">
              {rating ? (
                <p>{rating} / 5</p>
              ) : (
                <p className="text-[8px] font-dm uppercase">No rating</p>
              )}
            </span>
            <span>
              {rating > 0 && rating < 1 ? (
                <p>Not so good</p>
              ) : rating >= 1 && rating < 2 ? (
                <p>Ok</p>
              ) : rating >= 2 && rating < 3 ? (
                <p>Good</p>
              ) : rating >= 3 && rating < 4 ? (
                <p>Very good</p>
              ) : rating >= 4 && rating <= 5 ? (
                <p>Excellent!</p>
              ) : null}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <BtnFull size={22} />
      </div>

      {!isAuthenticated ? (
        <>
          <div className=" container mx-auto flex justify-center flex-col items-center text-2xl py-4 my-4">
            <h3 className="text-blue font-semibold "></h3>
            <Link
              type="button"
              className="my-8 mx-2 bg-none border-2 border-holipink text-white font-alli font-bold hover:bg-holipink hover:text-black hover:scale-105 transition-all duration-300"
              to="/login"
            >
              Login To Reserve <FiLogIn size={20} />
            </Link>
          </div>
        </>
      ) : (
        <div className="my-5">
          <p className="text-black font-semibold text-xl p-2 font-dm">
            Check Availability{" "}
          </p>
          <BookingForm
            data={data}
            venueId={id}
            maxGuests={maxGuests}
            price={price}
          />
        </div>
      )}
    </div>
  );
};


