import { VenuesCarousel } from "../carousel/VenuesCarousel";
import {
  BsCalendar2Date,
  BsPeople,
  BsFillCalendar2DateFill,
} from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { FaCity, FaMapPin } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Loader } from "../ui/loader/Loader";

export const BookingsCard = ({ data }) => {

  const {
    // created: venueCreated,
    // dateFrom,
    // dateTo,
    // guests,
    location: { address, city, country },
    // maxGuests,
    // media,
    // meta: { breakfast, parking, pets, wifi },
    // name,
    // price,
    // rating,
  } = data.venue;

  // const { location: { address, city, continent, country }, media } = data.venue;
  
  const {
    // id,
    // created,
    dateFrom,
    dateTo,
    guests,
    venue: { name, media },
  } = data;

  const options = { day: "2-digit", month: "short", year: "numeric" };
  const arrival = new Date(dateFrom).toLocaleDateString(undefined, options);
  const departure = new Date(dateTo).toLocaleDateString(undefined, options);

  return (
    <div className="rounded-2xl">
      <div className="tracking-wide">
        {data ? (
          <div className="card container mx-auto p-2 backdrop-blur-lg rounded-3xl text-xs">
            <VenuesCarousel media={media} name={name} />
            <h3 className="font-alli font-thin text-3xl text-zinc-100 py-2">
              Your Booking Details:
            </h3>
            <div className="flex flex-wrap gap-1">
              <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                <IoHome size={18} className="text-holiblue" />
                <p className="overflow-x-scroll">{name}</p>
              </div>
              <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                <BsPeople size={18} className="text-holiblue" />
                <p>{guests}</p>
              </div>
              <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                <GiWorld size={18} className="text-holiblue" />
                <p>{country}</p>
              </div>
              <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                <FaCity size={18} className="text-holiblue" />
                <p>{city}</p>
              </div>
              <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                <FaMapPin size={18} className="text-holiblue" />
                <p>{address}</p>
              </div>
              <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                <BsCalendar2Date size={18} className="text-holiblue" />
                <p>{arrival}</p>
              </div>
              <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                <BsFillCalendar2DateFill size={18} className="text-holiblue" />
                <p>{departure}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};
