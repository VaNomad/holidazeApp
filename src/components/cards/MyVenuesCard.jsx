// import { MyBookings } from "../../api/MyBookings";
import { VenuesCarousel } from "../carousel/VenuesCarousel";
// import { BtnFull } from "../ui/buttons/BtnFull";
// import { useUser } from "../../context/UserContext";
// import { CreateVenueForm } from "../forms/CreateVenueForm";
// import { Link } from "react-router-dom";
import {TbArrowRight} from "react-icons/tb"

export const MyVenuesCard = ({ data }) => {
  // const { user, isAuthenticated } = useUser();
  const {
    created: venueCreated,
    id: venueId,
    location: { address, city, continent, country, zip },
    maxGuests,
    media,
    meta: { breakfast, parking, pets, wifi },
    name,
    price,
    rating,
  } = data;

  return (
    <div className="rounded-2xl p-2">
      <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {data ? (
          <div className="card container mx-auto p-3">
            <h3 className="font-alli text-3xl">{name}</h3>
            <div className="flex flex-col text-sm font-thin font-dm pb-2">
              <div className="py-2">
                <VenuesCarousel media={media} name={name} />
              </div>
              <div>
                <h2>
                  <span className="font-semibold tracking-widest text-xs me-2">
                    Venue Id:{" "}
                  </span>{" "}
                  {venueId}
                </h2>
              </div>
            </div>
            <div>
              <div className="font-semibold text-xs">
                <div>
                  <h3 className="font-alli text-3xl">Location Data:</h3>
                  <p>Max number of guests: {maxGuests}</p>
                  <p>Venue Created: {venueCreated}</p>
                  <p>Continent: {continent}</p>
                  <p>Country: {country}</p>
                  <p>Address: {address}</p>
                  <p>City: {city}</p>
                  <p>Zip: {zip}</p>
                </div>
                <div>
                  <h3>Services:</h3>
                  <p>Breakfast: {breakfast}</p>
                  <p>Parking: {parking}</p>
                  <p>Pets allowed: {pets}</p>
                  <p>Wifi: {wifi}</p>
                  <p>Price pr night: {price}</p>
                  <p>Rating {rating} </p>
                </div>
              </div>
              <button className="flex items-center justify-between rounded-full bg-holipink py-2 px-6 my-4 text-black tracking-widest font-dm text-[18px]">
                Add New Venue
                <TbArrowRight className="ms-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-[40vh]">
            <h2 className="font-alli text-3xl text-center">
              You have no venues rented out
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};
