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
      <div>
        <label htmlFor="name">Name:</label>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input {...field} type="text" />}
        />
        {errors.name && <span>Name is required</span>}
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <textarea {...field} rows="4" />}
        />
        {errors.description && <span>Description is required</span>}
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <Controller
          name="price"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input {...field} type="number" step="0.01" />}
        />
        {errors.price && <span>Price is required</span>}
      </div>

      <div>
        <label htmlFor="maxGuests">Max Guests:</label>
        <Controller
          name="maxGuests"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input {...field} type="number" />}
        />
        {errors.maxGuests && <span>Max Guests is required</span>}
      </div>

      <div>
        <label htmlFor="continent">Continent:</label>
        <Controller
          name="continent"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>

      <div>
        <label htmlFor="country">Country:</label>
        <Controller
          name="country"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <Controller
          name="address"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>

      <div>
        <label htmlFor="city">City:</label>
        <Controller
          name="city"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>

      <div>
        <label htmlFor="zip">Zip:</label>
        <Controller
          name="zip"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>

      <div>
        <label>Features:</label>
        <div>
          <Controller
            name="wifi"
            control={control}
            render={({ field }) => (
              <>
                <input {...field} type="checkbox" />
                <label htmlFor="wifi">Wifi</label>
              </>
            )}
          />
        </div>
        <div>
          <Controller
            name="parking"
            control={control}
            render={({ field }) => (
              <>
                <input {...field} type="checkbox" />
                <label htmlFor="parking">Parking</label>
              </>
            )}
          />
        </div>
        <div>
          <Controller
            name="breakfast"
            control={control}
            render={({ field }) => (
              <>
                <input {...field} type="checkbox" />
                <label htmlFor="breakfast">Breakfast</label>
              </>
            )}
          />
        </div>
        <div>
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

      <div>
        <label htmlFor="images">Images:</label>
        <Controller
          name="images"
          control={control}
          render={({ field }) => <input {...field} type="file" multiple />}
        />
      </div>

      <button type="submit">Submit</button>
      {createVenueError && <p className="text-red-500">{createVenueError}</p>}
    </form>
  );
}

