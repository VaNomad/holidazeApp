// import { MyBookings } from "../../api/MyBookings";
// import { VenuesCarousel } from "../carousel/VenuesCarousel";
import { BtnFull } from "../ui/buttons/BtnFull";

export const BookingsCard = ({ data }) => {
  return (
    <div className="rounded-2xl p-2">
      <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {data ? (
          <div className="card container mx-auto p-3 ">
            <div>
              <img
                src={data.avatar}
                alt="User Avatar"
                className="w-[20px] h-[20px] rounded-full object-cover"
              />
            </div>
            <h2>{data.name}</h2>
            <p>{data.email}</p>
            {data.bookings && (
              <div>
                <div>
                  <p>Guests: {data.booking[0].guests}</p>
                  <div>
                    <img
                      src={data.booking[0].venue.media[0]}
                      alt=""
                      className="w-[20px] h-[20px] rounded-full object-cover"
                    />
                  </div>
                  <h3>Location Data:</h3>
                  <p>Address: {data.bookings[0].venue.location.address}</p>
                  <p>City: {data.bookings[0].venue.location.city}</p>
                  <p>Zip: {data.bookings[0].venue.location.zip}</p>
                </div>
                <BtnFull />
              </div>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
