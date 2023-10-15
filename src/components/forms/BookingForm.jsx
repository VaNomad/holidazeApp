import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { BookingCall } from "../../api/BookingCall";
import { useNavigate } from "react-router-dom";
import {
  calculateTotalDays,
  calculateTotalPrice,
} from "../../utils/Calculations";

export const BookingForm = () => {
  const [bookingError, setBookingError] = useState(null);
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const handleBooking = async (data) => {
    try {
      console.log("Booking Data:", data);
      const response = await BookingCall(data);
      console.log("Booking Response:", response);

      if (response.ok) {
        setTimeout(() => {
          navigate("/venues/:id");
          reset();
        }, 1000);
      }

      setBookingError(null);
    } catch (error) {
      console.log("Booking Error:", error);
      setBookingError("Booking Failed. Check dates selected");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleBooking)}>
        {/* Dates */}
        <div className="border border-zinc-600 p-3 rounded-xl flex flex-col gap-2">
          <h1 className="font-alli text-3xl">Dates :</h1>

          {/* dateFrom */}
          <div>
            <label htmlFor="date" className="font-dm text-sm font-thin">
              Start Date
            </label>
            <Controller
              name="dateFrom"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  className="rounded-xl bg-black border-2 border-zinc-500 px-3 py-1 text-xs tracking-widest text-zinc-300"
                  {...field}
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                />
              )}
            />
            {errors.date && <span>Date is required</span>}
          </div>

          {/* dateTo */}
          <div>
            <label htmlFor="date" className="font-dm text-sm font-thin">
              End Date
            </label>
            <Controller
              name="dateTo"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  className="rounded-xl bg-black border-2 border-zinc-500 px-3 py-1 text-xs tracking-widest text-zinc-300"
                  {...field}
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                />
              )}
            />
            {errors.date && <span>Date is required</span>}
          </div>
        </div>

        {/* Number of Guests */}
        <div className="border border-zinc-600 mt-3 p-3 rounded-xl flex flex-col gap-2">
          <h1 className="font-alli text-3xl">Guests :</h1>
          <Controller
            name="guests"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <div className="flex justify-between items-center gap-4">
                <input
                  {...field}
                  type="number"
                  className="rounded-xl bg-black border-2 border-zinc-500 px-3 py-1 text-xs tracking-widest text-zinc-300 w-full"
                />
                <button
                  onClick={() => field.onChange(field.value - 1)}
                  className="px-3 border rounded-full h-full w-[40%]"
                >
                  -
                </button>
                <button
                  onClick={() => field.onChange(field.value + 1)}
                  className="px-3 border rounded-full h-full w-[40%]"
                >
                  +
                </button>
              </div>
            )}
          />
          {errors.guests && <span>Number of Guests is required</span>}
        </div>

        <div className="my-2">
          <h2 className="text-md font-dm font-semibold text-zinc-400">
            Total Days:{" "}
            <span className="text-holiblue">{calculateTotalDays}</span>
          </h2>
          <h2 className="text-md font-dm font-semibold text-zinc-400">
            <span>
              Total Amount:{" "}
              <span className="text-holiblue">{calculateTotalPrice}</span>
            </span>
          </h2>
        </div>

        <button
          className="my-2 rounded-full px-4 py-1 border-2 text-black border-holiblue bg-holiblue hover:text-holiblue hover:bg-black hover:scale-105 tracking-widest font-dm text-md transition-all duration-800 cursor-pointer"
          type="submit"
          value="Place Booking"
          onClick={handleSubmit}
        >
          Place Booking
        </button>
        {bookingError && <p className="text-red-500">{bookingError}</p>}
      </form>
    </div>
  );
};
