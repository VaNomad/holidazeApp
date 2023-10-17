import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateVenueCall } from "../../api/CreateVenueCall";
import { Loader } from "../ui/loader/Loader";
import { API_BASE_URL } from "../../api/endpoints";
import { CiParking1 } from "react-icons/ci";
import { PiBowlFood } from "react-icons/pi";
import { BsWifi } from "react-icons/bs";
import { GiHollowCat } from "react-icons/gi";
import { useFormik } from "formik";
import { initialVenueValues, createVenueSchema } from "./createVenueSchema";

export const CreateVenueForm = () => {
  // const [createVenueError, setCreateVenueError] = useState(null);
  const [mediaArray, setMediaArray] = useState([]);
  const navigate = useNavigate();

  const { createVenueData, isLoading, hasError, postData } = CreateVenueCall(
    `${API_BASE_URL}/venues`,
    []
  );

  const addMedia = () => {
    if (mediaArray.length > 0 && mediaArray[mediaArray.length - 1] !== "") {
      setMediaArray([...mediaArray, ""]);
    }
  };

  // const handleMedia = (e, index) => {
  //   setMediaArray(
  //     mediaArray.map((value, i) => (i === index ? e.target.value : value))
  //   );
  // };

  const mediaChange = (e, index) => {
    setMediaArray((mediaArray) => {
      const handledMedia = [...mediaArray];
      handledMedia[index] = e.target.value;
      return handledMedia;
    });
  };

  const deleteMedia = (index) => {
    setMediaArray(mediaArray.filter((_, i) => i !== index));
  };

  const formik = useFormik({
    initialValues: initialVenueValues,
    validationSchema: createVenueSchema,
    onSubmit: async (values, action) => {
      const venueData = {
        name: values.name,
        description: values.description,
        media: mediaArray.filter(Boolean),
        price: values.price,
        maxGuests: values.maxGuests,
        meta: {
          wifi: values.meta.wifi,
          parking: values.meta.parking,
          breakfast: values.meta.breakfast,
          pets: values.meta.pets,
        },
        location: {
          address: values.location.address,
          city: values.location.city,
          zip: values.location.zip,
          country: values.location.country,
          continent: values.location.continent,
        },
      };

      try {
        if (formik.isValid) {
          console.log("Create Venue Data:", values);
          const response = await postData(venueData);
          console.log("Booking Response:", response);

          setTimeout(() => {
            navigate("/add-venue");
            action.resetForm();
          }, 2000);

          console.log("Listing Success!", venueData);
        } else {
          console.log("Form validation failed.");
        }
      } catch (error) {
        console.log("Create Venue Error:", error);
      }
    },
  });

  // const {
  //   reset,
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   try {
  //     console.log("Create Venue Data:", data);
  //     const response = CreateVenue(data);
  //     console.log("Create Venue Response:", response);

  //     if (response.ok) {
  //       setTimeout(() => {
  //         navigate("/profile");
  //       }, 2000);
  //     }

  //     setCreateVenueError(null);
  //   } catch (error) {
  //     console.log("Booking Error:", error);
  //     setCreateVenueError("Booking Failed. Check dates selected");
  //   }
  // };

  return (
    <div>
      <div>

        <form onSubmit={formik.handleSubmit}>
          {/* Venue Name & Price */}
          <div>
            <div className="p-4 rounded-xl flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-dm text-holiblue tracking-widest"
              >
                Venue Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Venue Name"
                className="w-full px-3 py-1 bg-zinc-900 border-2 border-zinc-600 rounded-xl text-zinc-400 sm:text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            <div className="p-4 rounded-xl flex flex-col gap-2">
              <label
                htmlFor="price"
                className="font-dm text-holiblue tracking-widest"
              >
                Price per Night
              </label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Rent price per night"
                className="w-full px-3 py-1 bg-zinc-900 border-2 border-zinc-600 rounded-xl text-zinc-400 sm:text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
            </div>
          </div>

          {/* Venue Images */}
          <div>
            <div>
              <div className="p-4">
                <label
                  htmlFor="media"
                  className="font-dm text-holiblue tracking-widest"
                >
                  Add Venue Images
                </label>
                {mediaArray.map((media, index) => (
                  <div key={index}>
                    <input
                      type="url"
                      name={`media-${index}`}
                      className="p-2 w-full rounded-xl sm:text-sm"
                      placeholder="Venue Image Url"
                      value={media}
                      onChange={(e) => mediaChange(e, index)}
                    />
                    {media && (
                      <img
                        src={media}
                        alt={`Uploaded Image ${index}`}
                        className="flex gap-2 h-20 w-20 object-cover rounded-xl"
                      />
                    )}
                    {index > 0 && (
                      <button className="" onClick={() => deleteMedia(index)}>
                        Delete Image
                      </button>
                    )}
                  </div>
                ))}
                <div className="p-4 mt-3">
                  <button
                    type="button"
                    onClick={addMedia}
                    className="text-holiblue bg-zinc-800 border-2 border-holiblue hover:bg-holiblue hover:text-black px-8 py-2 font-dm font-bold rounded-full text-sm text-center transition-all duration-200"
                  >
                    Add Image
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Venue Description */}
          <div className="p-4 rounded-xl flex flex-col gap-2">
            <div>
              <label
                htmlFor="description"
                className="font-dm tracking-widest text-holiblue"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                placeholder="Describe your venue and services"
                className="w-full mt-1 px-3 py-1 border-2 border-zinc-600 bg-zinc-900 rounded-xl sm:text-sm"
              />
            </div>
          </div>

          {/* Venue Location */}
          <div className="p-4 rounded-xl flex flex-col gap-2">
            <div className="flex justify-between">
              <label
                htmlFor="continent"
                className="font-dm tracking-widest text-holiblue"
              >
                Continent
              </label>
              <input
                className="rounded-xl bg-zinc-900 border-2 border-zinc-500 px-3 py-1 text-xs tracking-widest text-zinc-300"
                type="text"
                id="continent"
                name="location.continent"
                placeholder="Venue Continent"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location.continent}
              />
            </div>
            <div className="flex justify-between">
              <label
                htmlFor="country"
                className="font-dm tracking-widest text-holiblue"
              >
                Country
              </label>
              <input
                className="rounded-xl bg-zinc-900 border-2 border-zinc-500 px-3 py-1 text-xs tracking-widest text-zinc-300 max-w-xs"
                type="text"
                id="country"
                name="location.country"
                placeholder="Venue Country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location.country}
              />
            </div>
            <div className="flex justify-between">
              <label
                htmlFor="address"
                className="font-dm tracking-widest text-holiblue"
              >
                Address
              </label>
              <input
                className="rounded-xl border-2 border-zinc-500 px-3 py-1 text-xs tracking-widest text-zinc-300 bg-zinc-900"
                type="text"
                id="city"
                name="location.address"
                placeholder="Venue Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location.city}
              />
            </div>
            <div className="flex justify-between">
              <label
                htmlFor="zip"
                className="font-dm tracking-widest text-holiblue"
              >
                Zip
              </label>
              <input
                className="rounded-xl bg-zinc-900 border-2 border-zinc-500 px-3 py-1 text-xs tracking-widest text-zinc-300 max-w-xs"
                type="text"
                id="zip"
                name="location.zip"
                placeholder="Venue Zip"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location.zip}
              />
            </div>
          </div>

          {/* Residence Features */}
          <div className="p-2">
            <h2 className="font-alli text-3xl py-3 mb-2">
              Residence Facilities
            </h2>
            <div
              aria-labelledby="checkbox-group"
              className="flex justify-around"
            >
              <div className="flex flex-col gap-2">
                <div className="flex justify-start gap-3">
                  <label htmlFor="wifi">
                    <BsWifi size={22} className="text-holiblue" />
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
                <div>
                  <h2 className="text-xs font-dm text-zinc-500">Has Wifi</h2>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-start gap-3">
                  <label htmlFor="parking">
                    <CiParking1 size={22} className="text-holiblue" />
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
                <div>
                  <h2 className="text-xs font-dm text-zinc-500">Parking</h2>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-start gap-3">
                  <label htmlFor="breakfast">
                    <PiBowlFood size={22} className="text-holiblue" />
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
                <div>
                  <h2 className="text-xs font-dm text-zinc-500">Breakfast</h2>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-start gap-3">
                  <label htmlFor="pets">
                    <GiHollowCat size={22} className="text-holiblue" />
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
                <div>
                  <h2 className="text-xs font-dm text-zinc-500">
                    Pets allowed
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* errors */}
          <div className="flex justify-center m-5 text-center">
            {createVenueData && (
              <div className="border-2 border-lime-400 rounded-xl py-4 px-6 shadow-md shadow-lime-700">
                <p>Your Listing was a success!</p>
                <p className="text-sm text-zinc-300 animate-pulse">
                  You will find it in your profile..
                </p>
              </div>
            )}
            {isLoading && <Loader />}
            {hasError && (
              <p className="text-holipink">Error: {formik.errors}</p>
            )}
          </div>

          <button
            type="submit"
            className="text-holiblue bg-zinc-800 border-2 border-holiblue hover:bg-holiblue hover:text-black px-8 py-2 font-dm font-bold rounded-full text-sm text-center transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
