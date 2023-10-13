// import { MyBookings } from "../../api/MyBookings";
// import { VenuesCarousel } from "../carousel/VenuesCarousel";
import { BtnFull } from "../ui/buttons/BtnFull";

export const BookingsCard = ({ data }) => {
  const {
    dateFrom,
    dateTo,
    guests,
  } = data;

  console.log("Location:", location);
  console.log("dateFrom:", dateFrom);
  console.log("dateTo:", dateTo);
  console.log("dateTo:", dateTo);
  console.log("guests:", guests);
  console.log(data);

  return (
    <div className="rounded-2xl p-2">
      <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        <h1 className="font-dm font-thin text-[20px] uppercase flex flex-wrap p-1">
          {name}
        </h1>
      </div>
      <div>
        <img
          src={media}
          alt="venue image"
          className="object-cover border-2 mx-auto rounded-2xl h-52"
        />
      </div>
      {/* <VenuesCarousel media={media} name={name} /> */}

      <div className="text-xl mt-1 p-2 bg-zinc-800 rounded-xl">
        <div>
          <h3>Your Stay</h3>
        </div>
        <div>
          <div>
            <h5>From</h5>
            <p>{dateFrom}</p>
          </div>
          <div>
            <h5>To</h5>
            <p>{dateTo}</p>
          </div>
        </div>
        <div>
          <h5>Guests</h5>
          <p>{guests}</p>
        </div>
        <div>
          <h5>Location</h5>
          <div>
            <p>{location.country}</p>
            <p>{location.city}</p>
            <p>{location.address}</p>
          </div>
        </div>
        <div>
          <h5>Price</h5>
          <p>{price}</p>
        </div>
        <div>
          <BtnFull size={10} />
        </div>
      </div>
    </div>
  );
};
