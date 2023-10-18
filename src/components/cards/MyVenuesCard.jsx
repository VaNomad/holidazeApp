// import { MyBookings } from "../../api/MyBookings";
import { VenuesCarousel } from "../carousel/VenuesCarousel";
import { UpdateVenueForm } from "../forms/UpdateVenueForm";
import { ConfirmDelete } from "../forms/DeleteVenueForm";
import { BsPeople, BsWifi } from "react-icons/bs";
import { PiBowlFood } from "react-icons/pi";
import { GiHollowCat } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";
import { IoPricetagsOutline} from "react-icons/io5";

// import { BtnFull } from "../ui/buttons/BtnFull";
// import { useUser } from "../../context/UserContext";
// import { CreateVenueForm } from "../forms/CreateVenueForm";
// import { Link } from "react-router-dom";
// import {TbArrowRight} from "react-icons/tb"

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
              <div className="flex items-center gap-4">
                <div>
                  <UpdateVenueForm />
                </div>
                <div>
                  <ConfirmDelete />
                </div>
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
                <div className="font-dm tracking-wider px-3 mb-4">
                  <h3 className="font-alli font-thin text-3xl text-zinc-400 py-2">
                    Location Data:
                  </h3>
                  <div>
                    <div className="flex items-center justify-between">
                      <p>Max number of guests: </p>
                      <p>{maxGuests}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Venue Created: </p>
                      <p>{venueCreated}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <p>Continent: </p>
                      <p>{continent}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Country: </p>
                      <p>{country}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Address: </p>
                      <p>{address}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>City: </p>
                      <p>{city}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Zip: </p>
                      <p>{zip}</p>
                    </div>
                  </div>
                </div>
                <ul className="flex flex-col text-white uppercase text-xs font-thin divide-y-[1px] divide-zinc-600 border border-zinc-600 rounded-xl p-2 gap-1">
                  <li className="grid grid-cols-3">
                    <BsPeople size={15} />
                    <h2>max guests</h2>
                    <div className="flex justify-end items-center">{maxGuests}</div>
                  </li>
                  <li className="grid grid-cols-3">
                    <PiBowlFood size={22} />
                    <h2 className="flex items-center">Breakfast</h2>
                    <div className="flex justify-end items-center">
                      {breakfast ? (
                        <GiCheckMark color="#70C376" />
                      ) : (
                        <GiCrossMark color="#C37070" />
                      )}
                    </div>
                  </li>
                  <li className="grid grid-cols-3">
                    <BsWifi size={18} />
                    <h2 className="flex items-center">Wifi</h2>
                    <div className="flex justify-end items-center">
                      {wifi ? (
                        <GiCheckMark color="#70C376" />
                      ) : (
                        <GiCrossMark color="#C37070" />
                      )}
                    </div>
                  </li>
                  <li className="grid grid-cols-3">
                    <GiHollowCat size={22} />
                    <h2 className="flex items-center">Pets allowed</h2>
                    <div className="flex justify-end items-center">
                      {pets ? (
                        <GiCheckMark color="#70C376" />
                      ) : (
                        <GiCrossMark color="#C37070" />
                      )}
                    </div>
                  </li>
                  <li className="grid grid-cols-3">
                    <CiParking1 size={22} />
                    <h2 className="flex items-center">Parking on site</h2>
                    <div className="flex justify-end items-center">
                      {parking ? (
                        <GiCheckMark color="#70C376" />
                      ) : (
                        <GiCrossMark color="#C37070" />
                      )}
                    </div>
                  </li>
                  <li className="grid grid-cols-3">
                    <IoPricetagsOutline size={22} />
                    <h2 className="flex items-center">Price per night</h2>
                    <div className="flex justify-end items-center">
                      {price ? (<div>{price}</div>) : (<div>0</div>)}
                    </div>
                  </li>
                  <li className="grid grid-cols-3">
                    <h2 className="flex items-center">Rating</h2>
                    <div className="ml-3 mr-2 rounded-full px-3 text-white text-sm border-2 border-[#FCB5FF]">
                      {rating ? (
                        <div>{rating} / 5</div>
                      ) : (
                        <div className="text-[8px] font-dm uppercase">
                          No rating
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
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
