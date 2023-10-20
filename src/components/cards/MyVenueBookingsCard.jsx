import { VenuesCarousel } from "../carousel/VenuesCarousel";
import {
  BsClockHistory,
  BsCalendar2Date,
  BsCalendar2DateFill,
  BsPeople,
} from "react-icons/bs";

export const MyVenueBookingsCard = ({ booking }) => {
  
  const { id, created, dateFrom, dateTo, guests, venue: {name, media} } = booking
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const arrival = new Date(dateFrom).toLocaleDateString(undefined, options);
  const departure = new Date(dateTo).toLocaleDateString(undefined, options);

  return (
    <div className="rounded-2xl p-2">
      <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {booking ? (
          <div className="card container mx-auto p-3">
            <h3 className="font-alli text-3xl">{name}</h3>
            <div className="flex flex-col text-sm font-thin font-dm pb-2">
              <div className="py-2">
                <VenuesCarousel media={media} name={name} />
              </div>
              <div>
                <h1>{id}</h1>
                <h2>
                  <span className="font-semibold tracking-widest text-xs me-2">
                    Venue Id:{" "}
                  </span>{" "}
                  { id }
                </h2>
              </div>
            </div>
            <div>
              <div className="font-semibold text-xs">
                <div>
                  <h3 className="font-alli font-thin text-3xl text-zinc-400 py-2">
                    Booking Data:
                  </h3>
                  <ul className="flex flex-col text-white uppercase text-xs font-thin divide-y-[1px] divide-zinc-600 border border-zinc-600 rounded-xl p-2 gap-1">
                    <li className="grid grid-cols-3">
                      <BsClockHistory size={15} />
                      <h2>Booking Date:</h2>
                      <div className="flex justify-end items-center">
                        {created}
                      </div>
                    </li>
                    <li className="grid grid-cols-3">
                      <BsPeople size={22} />
                      <h2 className="flex items-center">Guests:</h2>
                      <div className="flex justify-end items-center">
                        {guests}
                      </div>
                    </li>
                    <li className="grid grid-cols-3">
                      <BsCalendar2Date size={18} />
                      <h2 className="flex items-center">Arrival:</h2>
                      <div className="flex justify-end items-center">
                        {arrival}
                      </div>
                    </li>
                    <li className="grid grid-cols-3">
                      <BsCalendar2DateFill size={22} />
                      <h2 className="flex items-center">Departure:</h2>
                      <div className="flex justify-end items-center">
                        {departure}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-[40vh]">
            <h2 className="font-alli text-3xl text-center">
              No one has booked your venues
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};
