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
  const booked = new Date(created).toLocaleDateString(undefined, options);
  const arrival = new Date(dateFrom).toLocaleDateString(undefined, options);
  const departure = new Date(dateTo).toLocaleDateString(undefined, options);

  return (
    <div className="rounded-2xl p-2">
      <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {booking ? (
          <div className="card container mx-auto p-3 border border-holipink rounded-xl">
            <h3 className="font-alli text-4xl font-thin">{name}</h3>
            <div className="flex flex-col text-sm font-thin font-dm pb-2">
              <div className="py-2">
                <VenuesCarousel media={media} name={name} />
              </div>
              <div>
                <h2>
                  <span className="font-semibold tracking-widest text-xs text-holiblue me-2">
                    Venue Id:{" "}
                  </span>{" "}
                  {id}
                </h2>
              </div>
            </div>
            <div>
              <div className="font-semibold text-xs">
                <div>
                  <h3 className="font-alli font-thin text-3xl text-zinc-400 py-2">
                    Booking Data:
                  </h3>
                  <div className="flex flex-col text-white text-[10px] sm:text-[14px] md:text-[18px] font-thin divide-y-[1px] divide-zinc-600 border border-zinc-600 rounded-xl px-2">
                    <div className="flex justify-between px-1 py-2">
                      <div className="flex">
                        <BsClockHistory size={15} />
                        <h2 className="ps-10">Booked :</h2>
                      </div>
                      <div>{booked}</div>
                    </div>
                    <div className="flex justify-between px-1 py-2">
                      <div className="flex">
                        <BsPeople size={15} />
                        <h2 className="ps-10">Guests :</h2>
                      </div>
                      <div>{guests}</div>
                    </div>
                    <div className="flex justify-between px-1 py-2">
                      <div className="flex">
                        <BsCalendar2Date size={15} />
                        <h2 className="ps-10">Arrival :</h2>
                      </div>
                      <div>{arrival}</div>
                    </div>
                    <div className="flex justify-between px-1 py-2">
                      <div className="flex">
                        <BsCalendar2DateFill size={15} />
                        <h2 className="ps-10">Departure :</h2>
                      </div>
                      <div>{departure}</div>
                    </div>
                  </div>
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
