// import { MyBookings } from "../../api/MyBookings";
// import { VenuesCarousel } from "../carousel/VenuesCarousel";
import { BtnFull } from "../ui/buttons/BtnFull";
import { useUser } from "../../context/UserContext";
import { CreateVenueForm } from "../forms/CreateVenueForm";
import { Link } from "react-router-dom";
import {FiArrowRight} from "react-icons/fi"

export const MyVenuesCard = ({ data }) => {
  const { user, isAuthenticated } = useUser();
  const {
    created: venueCreated,
    description,
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
            <h3 className="font-alli text-3xl">Venue name</h3>
            <div className="flex text-sm font-thin font-dm">
              <div className="p-2">
                <img
                  src={media}
                  alt="User Avatar"
                  className="w-[20px] h-[20px] rounded-full object-cover"
                />
              </div>
              <div>
                <h2>{name}</h2>
                <p>{venueId}</p>
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
              <BtnFull />
            </div>
          </div>
        ) : (
          <p>You are not renting out any venues</p>
        )}
      </div>
      <div>
        {isAuthenticated && user.venueManager ? (
          <div className="my-5">
            <h2 className="text-white font-semibold p-2 font-alli text-4xl">
              Add a venue{" "}
            </h2>
            <CreateVenueForm
              data={data}
              name={name}
              description={description}
              price={price}
              maxGuests={maxGuests}
              // venueId={id}
              continent={continent}
              country={country}
              address={address}
              city={city}
              zip={zip}
              wifi={wifi}
              parking={parking}
              breakfast={breakfast}
              pets={pets}
              media={media}
            />
          </div>
        ) : (
          <div>
            <div className=" container mx-auto flex justify-center flex-col items-center text-2xl py-4 my-4">
              <h3 className="text-blue font-semibold "></h3>
              <Link
                type="button"
                className="my-8 mx-2 bg-none border-2 border-holipink rounded-full p-2 text-white font-alli font-bold hover:bg-holipink hover:text-black hover:scale-105 transition-all duration-300"
                to="/profile"
              >
                List Venue <FiArrowRight size={20} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
