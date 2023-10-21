// import { MyBookings } from "../../api/MyBookings";
import { VenuesCarousel } from "../carousel/VenuesCarousel";

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
  const options = { day: "2-digit", month: "long", year: "numeric" };
  // const booked = new Date(created).toLocaleDateString(undefined, options);
  const arrival = new Date(dateFrom).toLocaleDateString(undefined, options);
  const departure = new Date(dateTo).toLocaleDateString(undefined, options);

  return (
    <div className="rounded-2xl p-2">
      <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {data ? (
          <div className="card container mx-auto p-3 ">
            <VenuesCarousel media={media} name={name} />
            <h2>{name}</h2>
            <div>
              <div>
                {/* <p>Max number of guests: {maxGuests}</p> */}
                <div>
                  <img
                    src={media}
                    alt=""
                    className="w-[20px] h-[20px] rounded-full object-cover"
                  />
                </div>
                <div>
                  <h5>Name:</h5>
                  <p>{name}</p>
                </div>
                <div>
                  <h3>Location Data:</h3>
                  <p>Arrival: {arrival}</p>
                  <p>Departure: {departure}</p>
                  <p>Guests: {guests}</p>
                  {/* <p>Country: {venueCreated}</p> */}
                  {/* <p>Country: {continent}</p> */}
                  <p>Country: {country}</p>
                  <p>Address: {address}</p>
                  <p>City: {city}</p>
                  {/* <p>Zip: {zip}</p> */}
                </div>
                <div>
                  <h3>Services:</h3>
                  {/* <p>Breakfast: {breakfast}</p> */}
                  {/* <p>Parking: {parking}</p> */}
                  {/* <p>Pets allowed: {pets}</p> */}
                  {/* <p>Wifi: {wifi}</p> */}
                  {/* <p>Price pr night: {price}</p> */}
                  {/* <p>Rating {rating} </p> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div><Loader /></div>
        )}
      </div>
    </div>
  );
};
