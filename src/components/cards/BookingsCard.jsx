// import { MyBookings } from "../../api/MyBookings";
import { VenuesCarousel } from "../carousel/VenuesCarousel";
import { BtnFull } from "../ui/buttons/BtnFull";

export const BookingsCard = ({ data }) => {

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
  } = data.venue;

  return (
    <div className="rounded-2xl p-2">
      <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {data ? (
          <div className="card container mx-auto p-3 ">
            <VenuesCarousel media={media} name={name} />
            <h2>{name}</h2>
            <div>
              <div>
                <p>Max number of guests: {maxGuests}</p>
                <div>
                  <img
                    src={media}
                    alt=""
                    className="w-[20px] h-[20px] rounded-full object-cover"
                  />
                </div>
                <div>
                  <h5>Description:</h5>
                  <p>{description}</p>
                </div>
                <div>
                  <h3>Location Data:</h3>
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
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
