import { useForm, control, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";
import { BookingCall } from "../../api/BookingCall";
import { useNavigate, useParams } from "react-router-dom";
import { calculateTotalDays, calculateTotalPrice } from "../../utils/Calculations";

export const BookingForm = ({data}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [bookingError, setBookingError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const initialValues = {
    dateFrom: "",
    dateTo: "",
    guests: "",
    venueId: id,
  };

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const toggleCheckbox = (event) => {
    setIsChecked(event.target.checked);
    console.log("isChecked:", event.target.checked);
  };

  const handleBooking = async (data) => {
    try {
      console.log("Booking Data:", data);
      const response = await BookingCall(data);
      console.log("Booking Response:", response);
     

      if (response.userData && response.accessToken) {
        navigate("/profile");
      }

      setTimeout(() => {
        // loginUser(userData, accessToken);
        navigate("/venues/:id");
        reset();
      }, 1000);

      setBookingError(null);
    } catch (error) {
      console.log("Booking Error:", error);
      setBookingError("Booking Failed. Check dates selected");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleBooking)}
        className="flex flex-col gap-10 w-full p-5"
      >
        <input
          className="h-14 rounded-md p-3 bg-zinc-700"
          {...register("Arrival Date", {
            required: "The start date of your stay is required",
            pattern: {
              message: "Click on an available date please",
            },
          })}
          placeholder="Name"
          onBlur={() => {
            trigger("name");
          }}
        />
        <input
          className="h-14 rounded-md p-3 bg-zinc-700"
          {...register("email", {
            required: "E-mail is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Must be a valid stud.noroff.no E-mail",
            },
          })}
          placeholder="E-mail"
          onBlur={() => {
            trigger("email");
          }}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          className="h-14 rounded-md p-3 bg-zinc-700"
          {...register("password", {
            required: "A password is required",
            pattern: {
              value:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
              message:
                "Password must be 8 - 16 characters, have 1 lowercase & 1 uppercase letter, one number and 1 special character",
            },
          })}
          placeholder="Password"
          onBlur={() => {
            trigger("password");
          }}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <input
          className="h-14 rounded-md p-3 bg-zinc-700"
          {...register("avatar", {
            required: "An avatar image is required",
            pattern: {
              value:
                /^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/,
              message: "Avatar link must be a valid url",
            },
          })}
          placeholder="Avatar"
          onBlur={() => {
            trigger("avatar");
          }}
        />
        {errors.avatar && (
          <p className="text-red-500">{errors.avatar.message}</p>
        )}

        <label className="flex items-center space-x-5 justify-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheckbox}
            className="h-5 w-5 text-holiblue border-holiblue rounded focus:ring-2 focus:ring-holiblue"
          />
          <span className="font-ndo text-md">I have a venue for rent</span>
        </label>

        <input
          className="h-16 rounded-full bg-zinc-800 border border-holiblue hover:bg-holiblue hover:text-black hover:scale-105 uppercase font-medium tracking-widest font-dm text-xl transition-all duration-800 cursor-pointer"
          type="submit"
          value="Create Account"
        />

        <div>
          <p className="font-semibold">Total Days: {calculateTotalDays}</p>
          <p>
            <span className="text-lg font-bold text-blue">
              Total Amount: ${calculateTotalPrice}
            </span>
          </p>
        </div>

        {bookingError && <p className="text-red-500">{bookingError}</p>}
      </form>

      <form onSubmit={handleSubmit(handleBooking)}>
        <div>
          <label htmlFor="date">Date:</label>
          <Controller
            name="date"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value}
                onChange={(date) => field.onChange(date)}
              />
            )}
          />
          {errors.date && <span>Date is required</span>}
        </div>

        <div>
          <label htmlFor="guests">Number of Guests:</label>
          <Controller
            name="guests"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <div>
                <button onClick={() => field.onChange(field.value - 1)}>
                  -
                </button>
                <input {...field} type="number" />
                <button onClick={() => field.onChange(field.value + 1)}>
                  +
                </button>
              </div>
            )}
          />
          {errors.guests && <span>Number of Guests is required</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
