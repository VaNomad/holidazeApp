import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UpdateVenueCall } from "../../api/UpdateVenue";
import { Loader } from "../ui/loader/Loader";
import { API_BASE_URL } from "../../api/endpoints";
import { CiParking1 } from "react-icons/ci";
import { PiBowlFood } from "react-icons/pi";
import { BsWifi, BsPen } from "react-icons/bs";
import { GiHollowCat } from "react-icons/gi";
import { useFormik } from "formik";
import { createVenueSchema } from "./createVenueSchema";
// import { ConfirmDelete } from "./ConfirmDelete";

export const UpdateVenueForm = ({ data }) => {
  const { id } = data;
  const [mediaArray, setMediaArray] = useState(data?.media || []);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { updateVenueData, isLoading, hasError, putData } = UpdateVenueCall(
    `${API_BASE_URL}/venues/${id}`,
    []
  );

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const addMedia = () => {
    setMediaArray([...mediaArray, ""]);
  };

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
    initialValues: {
      name: data?.name || "",
      description: data?.description || "",
      media: mediaArray,
      price: data?.price || 1,
      maxGuests: data?.maxGuests || 1,
      meta: {
        wifi: data?.meta.wifi || false,
        parking: data?.meta.parking || false,
        breakfast: data?.meta.breakfast || false,
        pets: data?.meta.pets || false,
      },
      location: {
        address: data?.location.address || "",
        city: data?.location.city || "",
        zip: data?.location.zip || "",
        country: data?.location.country || "",
        continent: data?.location.continent || "",
      },
    },
    // initialValues: initialValues,
    validationSchema: createVenueSchema,
    onSubmit: async (values) => {
      const updateData = {
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
      console.log(updateData);
      try {
        console.log("Venue Id Data:", values);
        await putData(updateData);
        console.log("Update Id Data Response:", updateData);
        console.log("Update Id Data Response:", putData);
        toggleModal();

        console.log("Updating your Venue was a Success!", updateData);
      } catch (error) {
        console.log("Update Venue Error:", error);
      }
    },
  });

  useEffect(() => {
    if (updateVenueData) {
      setTimeout(() => {
        setIsOpen(false);
        navigate("/profile");
        window.location.reload();
      }, 2000);
    }
  });

  return (
    <div>
      <button
        onClick={toggleModal}
        className="flex whitespace-nowrap items-center bg-holiblue border-2 border-holiblue text-black rounded-full px-2 py-1 my-2 hover:bg-black hover:text-holiblue transition-all duration-600 ease-in-out"
      >
        <div className="flex items-center group gap-2">
          <p className="hidden group-hover:flex font-semibold">edit listing</p>
          <BsPen size={20} />
        </div>
      </button>
      {isOpen && (
        <div>
          <form onSubmit={formik.handleSubmit}>
            {/* Venue Name & Price */}
            <div>
              <h1 className="font-alli text-3xl ">List your Venue</h1>
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
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-holired">
                    <p>{formik.errors.name}</p>
                  </div>
                ) : null}
              </div>
              <div className="p-4 rounded-xl flex flex-col gap-2">
                <label
                  htmlFor="price"
                  className="font-dm text-holiblue tracking-widest"
                >
                  Price per Night
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Rent price per night"
                  className="w-full px-3 py-1 bg-zinc-900 border-2 border-zinc-600 rounded-xl text-zinc-400 sm:text-sm"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price ? (
                  <div className="text-holired">
                    <p>{formik.errors.price}</p>
                  </div>
                ) : null}
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
                    <div key={`media-${index}`}>
                      <div>
                        <input
                          type="url"
                          name={`media-${index}`}
                          className="w-full mt-1 px-3 py-1 border-2 border-zinc-600 bg-zinc-900 rounded-xl sm:text-sm text-zinc-400"
                          placeholder="Venue Image Url"
                          value={media}
                          onChange={(e) => mediaChange(e, index)}
                        />
                        {formik.touched.media && formik.errors.media ? (
                          <div className="text-holired">
                            <p>{formik.errors.media}</p>
                          </div>
                        ) : null}
                      </div>
                      <div>
                        {media && (
                          <img
                            src={media}
                            alt="Uploaded"
                            className="flex gap-2 h-20 w-20 object-cover rounded-xl font-dm tracking-widest text-xs text-holigreen"
                          />
                        )}
                      </div>
                      <div>
                        {index >= 0 && media && (
                          <button
                            className="text-holired bg-zinc-800 border-2 border-holired hover:bg-holired hover:text-black px-4 py-1 font-dm font-bold rounded-full text-xs text-center transition-all duration-200"
                            onClick={() => deleteMedia(index)}
                          >
                            Delete Image
                          </button>
                        )}
                      </div>
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
                  className="w-full mt-1 px-3 py-1 border-2 border-zinc-600 bg-zinc-900 rounded-xl sm:text-sm"
                  id="description"
                  name="description"
                  rows="3"
                  placeholder="Describe your venue and services"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className="text-holired">
                    <p>{formik.errors.description}</p>
                  </div>
                ) : null}
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
                {formik.touched.continent && formik.errors.continent ? (
                  <div className="text-holired">
                    <p>{formik.errors.continent}</p>
                  </div>
                ) : null}
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
                {formik.touched.country && formik.errors.country ? (
                  <div className="text-holired">
                    <p>{formik.errors.country}</p>
                  </div>
                ) : null}
              </div>
              <div className="flex justify-between">
                <label
                  htmlFor="city"
                  className="font-dm tracking-widest text-holiblue"
                >
                  City
                </label>
                <input
                  className="rounded-xl bg-zinc-900 border-2 border-zinc-500 px-3 py-1 text-xs tracking-widest text-zinc-300 max-w-xs"
                  type="text"
                  id="city"
                  name="location.city"
                  placeholder="Venue City"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.location.city}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-holired">
                    <p>{formik.errors.city}</p>
                  </div>
                ) : null}
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
                  id="address"
                  name="location.address"
                  placeholder="Venue Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.location.address}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-holired">
                    <p>{formik.errors.address}</p>
                  </div>
                ) : null}
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
                {formik.touched.zip && formik.errors.zip ? (
                  <div className="text-holired">
                    <p>{formik.errors.zip}</p>
                  </div>
                ) : null}
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
                    {formik.touched.wifi && formik.errors.wifi ? (
                      <div className="text-holired">
                        <p>{formik.errors.wifi}</p>
                      </div>
                    ) : null}
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
                    {formik.touched.parking && formik.errors.parking ? (
                      <div className="text-holired">
                        <p>{formik.errors.parking}</p>
                      </div>
                    ) : null}
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
                    {formik.touched.breakfast && formik.errors.breakfast ? (
                      <div className="text-holired">
                        <p>{formik.errors.breakfast}</p>
                      </div>
                    ) : null}
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
                    {formik.touched.pets && formik.errors.pets ? (
                      <div className="text-holired">
                        <p>{formik.errors.pets}</p>
                      </div>
                    ) : null}
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
              {updateVenueData && (
                <div className="border-2 border-lime-400 rounded-xl py-4 px-6 shadow-md shadow-lime-700">
                  <p>Your Listing was a success!</p>
                  <p className="text-sm text-zinc-300 animate-pulse">
                    You will find it in your profile..
                  </p>
                </div>
              )}
              {isLoading && <Loader />}
              {hasError && (
                <p className="text-holired">Error: {formik.errors}</p>
              )}
            </div>

            <div className="flex justify-center items-center  py-6">
              {/* <ConfirmDelete venue={id} /> */}
              <div>
                <button
                  type="submit"
                  className="text-holiblue bg-zinc-800 border-2 border-holiblue hover:bg-holiblue hover:text-black px-8 py-2 font-dm font-bold rounded-full text-sm text-center transition-all duration-200"
                >
                  Update
                </button>
              </div>
              <div>
                <button
                  className="text-holiPink bg-zinc-800 border-2 border-holipink hover:bg-holipink hover:text-black px-8 py-2 font-dm font-bold rounded-full text-sm text-center transition-all duration-200"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  Close Form
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
