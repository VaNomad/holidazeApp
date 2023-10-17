import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateVenue } from "../../api/CreateVenueCall";
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

  const { createVenueData, isLoading, hasError, postData } = CreateVenue(
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
                <div>
                  <button type="button" onClick={addMedia} className="">
                    Add Image
                  </button>
                </div>
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

        </form>
      </div>
    </div>
  );
};
