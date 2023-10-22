import { VenuesCarousel } from "../carousel/VenuesCarousel";
import { UpdateVenueForm } from "../forms/UpdateVenueForm";
import { ConfirmDelete } from "../forms/DeleteVenueForm";
import { BsPeople, BsWifi, BsMailbox } from "react-icons/bs";
import { PiBowlFood, PiHashStraightBold } from "react-icons/pi";
import { CiParking1 } from "react-icons/ci";
import { GiCheckMark, GiCrossMark, GiWorld, GiHollowCat } from "react-icons/gi";
import { IoPricetagsOutline, IoHome } from "react-icons/io5";
import { FaCity, FaMapPin } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { GoHistory } from "react-icons/go";

export const MyVenuesCard = ({ data }) => {
  const {
    created: venueCreated,
    id: venueId,
    location: { address, city, country, zip },
    maxGuests,
    media,
    meta: { breakfast, parking, pets, wifi },
    name,
    price,
    rating,
  } = data;

  const options = { day: "2-digit", month: "short", year: "numeric" };
  const posted = new Date(venueCreated).toLocaleDateString(undefined, options);

  return (
    <div className="rounded-2xl p-2">
      <div className="card container mx-auto p-2 backdrop-blur-sm rounded-3xl text-xs">
        {data ? (
          <div className="card container mx-auto px-4">
            <h3 className="font-alli text-3xl pb-2">{name}</h3>
            <div className="flex flex-col text-sm font-thin font-dm">
              <div>
                <VenuesCarousel media={media} name={name} />
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <UpdateVenueForm data={data} />
                </div>
                <div>
                  <ConfirmDelete data={data} id={venueId} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-5 bg-zinc-700 rounded-full px-3 py-1 whitespace-nowrap">
                  <PiHashStraightBold size={18} className="text-holipink" />
                  <p className=" overflow-scroll">{venueId}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="font-dm text-xs py-2">

                {/* Location Details */}
                <div className="card container mx-auto px-3 pb-3 my-2  rounded-3xl text-xs">
                  <h3 className="font-alli font-thin text-3xl text-zinc-100 pb-2">
                    Location Details:
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                      <GoHistory size={18} className="text-holiblue" />
                      <p className="">{posted}</p>
                    </div>
                    <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                      <IoHome size={18} className="text-holiblue" />
                      <p className="">{name}</p>
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
                      <p>
                        {address}, {zip}
                      </p>
                    </div>
                    <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                      <BsMailbox size={18} className="text-holiblue" />
                      <p>{zip}</p>
                    </div>
                  </div>
                </div>

                {/* Venue Features */}
                <div className="card container mx-auto px-3 pb-3 mt-2 rounded-3xl text-xs">
                  <h3 className="font-alli font-thin text-3xl text-zinc-400 pb-2">
                    Venue Features:
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                      <BsPeople size={18} className="text-holiblue" />
                      <p>{maxGuests}</p>
                    </div>
                    <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                      <PiBowlFood size={18} className="text-holiblue" />
                      <div className="flex justify-end items-center">
                        {breakfast ? (
                          <GiCheckMark color="#70C376" />
                        ) : (
                          <GiCrossMark color="#C37070" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                      <BsWifi size={18} className="text-holiblue" />
                      <div className="flex justify-end items-center">
                        {wifi ? (
                          <GiCheckMark color="#70C376" />
                        ) : (
                          <GiCrossMark color="#C37070" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                      <GiHollowCat size={18} className="text-holiblue" />
                      <div className="flex justify-end items-center">
                        {pets ? (
                          <GiCheckMark color="#70C376" />
                        ) : (
                          <GiCrossMark color="#C37070" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                      <CiParking1 size={18} className="text-holiblue" />
                      <div className="flex justify-end items-center">
                        {parking ? (
                          <GiCheckMark color="#70C376" />
                        ) : (
                          <GiCrossMark color="#C37070" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                      <IoPricetagsOutline size={18} className="text-holiblue" />
                      <div className="flex justify-end items-center">
                        {price ? <div>{price}</div> : <div>0</div>}
                      </div>
                    </div>
                    <div className="flex items-center gap-5 bg-blackish rounded-full px-3 py-1 whitespace-nowrap overflow-x-scroll">
                      <AiFillStar size={18} className="text-holiblue" />
                      <div className="flex justify-end items-center">
                        {rating ? (
                          <div>{rating} / 5</div>
                        ) : (
                          <div className="text-[8px] font-dm uppercase">
                            No rating
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
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
