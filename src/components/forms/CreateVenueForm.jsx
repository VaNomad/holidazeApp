import { useForm, Controller} from 'react-hook-form';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateVenue } from '../../api/CreateVenueCall';
import { useState } from 'react';

export const CreateVenueForm = () => {
  const [createVenueError, setCreateVenueError] = useState(null);
  const navigate = useNavigate();
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

      <div className='flex gap-3'>
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

      {createVenueError && <p className="text-red-500">{createVenueError}</p>}
    </form>
  );
}

