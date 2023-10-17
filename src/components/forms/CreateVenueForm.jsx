import { useForm, Controller} from 'react-hook-form';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CreateVenue } from '../../api/CreateVenueCall';
import { Loader } from '../ui/loader/Loader';
import { API_BASE_URL } from '../../api/endpoints';
import { CiParking1 } from "react-icons/ci";
import { PiBowlFood } from "react-icons/pi";
import { BsPeople, BsWifi, BsKey } from "react-icons/bs";
import { GiHollowCat } from "react-icons/gi";

export const CreateVenueForm = () => {
  const [createVenueError, setCreateVenueError] = useState(null);
  const navigate = useNavigate();

  const { createVenueData, isLoading, hasError, postData } = CreateVenueCall(
    `${API_BASE_URL}/venues`,
    []
  );
  const { id } = useParams();

  // const {
  //   reset,
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  const onSubmit = (data) => {
    try {
      console.log("Create Venue Data:", data);
      const response = CreateVenue(data);
      console.log("Create Venue Response:", response);

      if (response.ok) {
        setTimeout(() => {
          navigate("/profile");
          reset();
        }, 1000);
      }

      setCreateVenueError(null);
    } catch (error) {
      console.log("Booking Error:", error);
      setCreateVenueError("Booking Failed. Check dates selected");
    }
  };

  return (
    <div>
      {/* formik form */}
      <div>
        <h1 className="font-alli text-3xl">List a Venue</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* Venue Name & Price */}
          <div>
            <div className="border border-zinc-600 p-3 rounded-xl flex flex-col gap-2">
              <label htmlFor="name" className="">
                Venue Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Venue Name"
                className="w-full px-3 py-1 bg-zinc-700 rounded-xl sm:text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            <div className="border border-zinc-600 p-3 rounded-xl flex flex-col gap-2">
              <label htmlFor="price" className="">
                Price per Night
              </label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Rent price per night"
                className="w-full px-3 py-1 bg-zinc-700 rounded-xl sm:text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
            </div>
          </div>

          {/* Venue Images */}
          <div>
            <div>
              <div>
                <label htmlFor="media" className="">
                  Add images
                </label>
                {mediaArray.map((media, index) => (
                  <div key={index}>
                    <input
                      type="url"
                      name={`media-${index}`}
                      className="px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Image URL"
                      value={media}
                      onChange={(e) => handleMedia(e, index)}
                    />
                    {media && (
                      <img
                        src={media}
                        alt={`Uploaded Image ${index}`}
                        className="flex gap-2 h-20 w-20 object-cover rounded-xl"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Venue Description */}
          <div className="border border-zinc-600 p-3 rounded-xl flex flex-col gap-2">
            <div>
              <label htmlFor="description" className="">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                placeholder="Describe your venue and services"
                className="w-full px-3 py-1 bg-zinc-700 rounded-xl sm:text-sm"
              />
            </div>
          </div>

          {/* Venue Location */}
          <div className="border border-zinc-600 p-3 rounded-xl flex flex-col gap-2">
            <div>
              <label htmlFor="continent" className="">
                Continent
              </label>
              <input
                type="text"
                id="continent"
                name="location.continent"
                placeholder="Venue Continent"
                className=""
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location.continent}
              />
            </div>
            <div>
              <label htmlFor="country" className="">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="location.country"
                placeholder="Venue Country"
                className=""
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location.country}
              />
            </div>
            <div>
              <label htmlFor="address" className="">
                Address
              </label>
              <input
                type="text"
                id="city"
                name="location.address"
                placeholder="Venue Address"
                className=""
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location.city}
              />
            </div>
            <div>
              <label htmlFor="zip" className="">
                Zip
              </label>
              <input
                type="text"
                id="zip"
                name="location.zip"
                placeholder="Venue Zip"
                className=""
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location.zip}
              />
            </div>
          </div>

          {/* Residence Features */}
          <div className="p-2">
            <h2 className="font-alli text-3xl">Residence Facilities</h2>
            <div
              aria-labelledby="checkbox-group"
              className="flex justify-around"
            >
              <div className="flex gap-2">
                <label htmlFor="wifi">
                  <BsWifi size={18} />
                </label>
                <input
                  className="text-holipink border-2 border-holiblue"
                  type="checkbox"
                  name="meta.wifi"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.meta.wifi}
                />
              </div>
              <div className="flex gap-2">
                <label htmlFor="parking">
                  <CiParking1 size={22} />
                </label>
                <input
                  className="text-holipink border-2 border-holiblue"
                  type="checkbox"
                  name="meta.parking"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.meta.parking}
                />
              </div>
              <div className="flex gap-2">
                <label htmlFor="breakfast">
                  <PiBowlFood size={22} />
                </label>
                <input
                  className="text-holipink border-2 border-holiblue"
                  type="checkbox"
                  name="meta.breakfast"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.meta.breakfast}
                />
              </div>
              <div className="flex gap-2">
                <label htmlFor="pets">
                  <GiHollowCat size={22} />
                </label>
                <input
                  className="text-holipink border-2 border-holiblue"
                  type="checkbox"
                  name="meta.pets"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.meta.pets}
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* react-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="rounded-md px-2 py-1 bg-zinc-700 m-2"
              />
            )}
          />
          {errors.name && <span>Name is required</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="description">Description:</label>
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <textarea
                {...field}
                rows="4"
                className="rounded-md px-2 py-1 bg-zinc-700 m-2"
              />
            )}
          />
          {errors.description && <span>Description is required</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="price">Price:</label>
          <Controller
            name="price"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                className="rounded-md px-2 py-1 bg-zinc-700 m-2"
              />
            )}
          />
          {errors.price && <span>Price is required</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="maxGuests">Max Guests:</label>
          <Controller
            name="maxGuests"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="rounded-md px-2 py-1 bg-zinc-700 m-2"
              />
            )}
          />
          {errors.maxGuests && <span>Max Guests is required</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="continent">Continent:</label>
          <Controller
            name="continent"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="rounded-md px-2 py-1 bg-zinc-700 m-2"
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="country">Country:</label>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="rounded-md px-2 py-1 bg-zinc-700 m-2"
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address">Address:</label>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="rounded-md px-2 py-1 bg-zinc-700 m-2"
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="city">City:</label>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="rounded-md px-2 py-1 bg-zinc-700 m-2"
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="zip">Zip:</label>
          <Controller
            name="zip"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="rounded-md px-2 py-1 bg-zinc-700 m-2"
              />
            )}
          />
        </div>

        <div className="flex flex-col sm:flex-row my-2">
          <label className="font-alli text-4xl py-2 mt-2">Services:</label>
          <div className="p-2">
            <Controller
              name="wifi"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    type="checkbox"
                    className="h-4 w-4 text-holiblue border-holiblue rounded focus:ring-1 focus:ring-holiblue bg-zinc-600"
                  />
                  <label htmlFor="wifi">Wifi</label>
                </>
              )}
            />
          </div>
          <div className="p-2">
            <Controller
              name="parking"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    type="checkbox"
                    className="h-4 w-4 text-holiblue border-holiblue rounded focus:ring-2 focus:ring-holiblue"
                  />
                  <label htmlFor="parking">Parking</label>
                </>
              )}
            />
          </div>
          <div className="p-2">
            <Controller
              name="breakfast"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    type="checkbox"
                    className="h-4 w-4 text-holiblue border-holiblue rounded focus:ring-2 focus:ring-holiblue"
                  />
                  <label htmlFor="breakfast">Breakfast</label>
                </>
              )}
            />
          </div>
          <div className="p-2">
            <Controller
              name="pets"
              control={control}
              render={({ field }) => (
                <>
                  <input {...field} type="checkbox" />
                  <label htmlFor="pets">Pets</label>
                </>
              )}
            />
          </div>
        </div>

        <div className="my-2 flex flex-col gap-2">
          <label htmlFor="images" className="font-alli text-3xl">
            Add Images:
          </label>
          <Controller
            name="images"
            control={control}
            render={({ field }) => <input {...field} type="file" multiple />}
          />
        </div>

        <div className="flex gap-3">
          <button
            className="my-2 rounded-full px-4 py-1 border-2 text-black border-holiblue bg-holiblue hover:text-holiblue hover:bg-black hover:scale-105 tracking-widest font-dm text-md transition-all duration-800 cursor-pointer"
            type="submit"
            value="Place Booking"
            onClick={handleSubmit}
          >
            Edit Venue
          </button>
          <button
            className="my-2 rounded-full px-4 py-1 border-2 text-black border-holipink bg-holipink hover:text-holipink hover:bg-black hover:scale-105 tracking-widest font-dm text-md transition-all duration-800 cursor-pointer"
            type="submit"
            value="Place Booking"
            onClick={handleSubmit}
          >
            Delete Venue
          </button>
        </div>

        {/* errors */}
        <div className="flex justify-center m-5 text-center">
          {createVenueData && (
            <div className="border-2 border-lime-400 rounded-xl py-4 px-6 shadow-md shadow-lime-700">
              <p>Your Booking was successful!</p>
              <p className="text-sm text-zinc-300 animate-pulse">
                You will find it in your profile..
              </p>
            </div>
          )}
          {isLoading && <Loader />}
          {hasError && <p className="text-holipink">Error: {errors}</p>}
        </div>

        {createVenueError && <p className="text-red-500">{createVenueError}</p>}
      </form>
    </div>
  );
}

