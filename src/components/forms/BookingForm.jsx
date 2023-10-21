// import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { API_BASE_URL } from "../../api/endpoints";
import { BookingCall } from "../../api/BookingCall";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { Loader } from "../ui/loader/Loader";
import { parseISO, isBefore, addDays } from "date-fns";

// import { useUser } from "../../context/UserContext";

export const BookingForm = ({ data, price, maxGuests }) => {
  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // const user = useUser();

  const { createBookingData, isLoading, hasError, postData } = BookingCall(
    `${API_BASE_URL}/bookings`,
    []
  );
  const { id } = useParams();

  const initialValues = {
    dateFrom: "",
    dateTo: "",
    guests: "",
    venueId: id,
  };

  const validationSchema = Yup.object().shape({
    dateFrom: Yup.date().required("Date can not be blank"),
    dateTo: Yup.date().required("Date can not be blank"),
    guests: Yup.number()
      .required("You can not book without number of guests")
      .min(1, "There must be at least 1 guest")
      .max(maxGuests, `Max number of guests is ${maxGuests}`)
      .test("max-guests", "Exceeds maximum number of guests", (value) => {
        return value <= maxGuests;
      }),
  });

  const handleDatePickers = ({ startDate, endDate }) => {
    formik.setFieldValue("dateFrom", startDate);
    formik.setFieldValue("dateTo", endDate);

    if (startDate && endDate) {
      const calculateTotalDays = Math.ceil(
        (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
      );
      setTotalDays(calculateTotalDays);
      const newTotalAmount = calculateTotalDays * price;
      setTotalPrice(newTotalAmount);
    }
  };

  const handleBooking = async (values) => {
    const bookingData = {
      dateFrom: values.dateFrom,
      dateTo: values.dateTo,
      guests: values.guests,
      venueId: values.venueId,
    };

    try {
      if (formik.isValid) {
        console.log("Booking Data:", values);
        const response = await postData(bookingData);
        console.log("Booking Response:", response);
      } else {
        console.log("Form validation failed.");
      }
    } catch (error) {
      console.log("Booking Error:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleBooking,
  });

  const disabledDates = data?.bookings?.flatMap((booking) => {
    const dateFrom = parseISO(booking.dateFrom);
    let currentDate = new Date(dateFrom);
    const dateTo = parseISO(booking.dateTo);

    const dates = [];

    while (
      isBefore(currentDate, dateTo) ||
      currentDate.getTime() === dateTo.getTime()
    ) {
      dates.push(new Date(currentDate));
      currentDate = addDays(currentDate, 1);
    }

    return dates;
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* Dates */}
        <div className="border border-zinc-600 p-3 rounded-xl flex flex-col gap-2">
          <h1 className="font-alli text-3xl">Dates :</h1>

          {/* date From */}
          <div>
            <DatePicker
              className="rounded-xl bg-black border-2 border-zinc-500 px-3 py-1 text-xs tracking-widest text-zinc-300"
              selected={formik.values.dateFrom}
              onChange={(date) => {
                formik.setFieldValue("dateFrom", date);
                handleDatePickers({
                  startDate: date,
                  endDate: formik.values.dateTo,
                });
              }}
              dateFormat="dd/mm/yyyy"
              placeholderText="Start Date"
              minDate={new Date()}
              isClearable={true}
              excludeDates={disabledDates}
            />
            {formik.errors.dateFrom && <p>{formik.errors.dateFrom}</p>}
          </div>

          {/* dateTo */}
          <div>
            <DatePicker
              className="rounded-xl bg-black border-2 border-zinc-500 px-3 py-1 text-xs tracking-widest text-zinc-300"
              selected={formik.values.dateTo}
              onChange={(date) => {
                formik.setFieldValue("dateTo", date);
                handleDatePickers({
                  startDate: formik.values.dateFrom,
                  endDate: date,
                });
              }}
              dateFormat="dd/mm/yyyy"
              placeholderText="End Date"
              minDate={new Date()}
              isClearable={true}
              excludeDates={disabledDates}
            />
            {formik.errors.dateTo && (
              <p className="text-holipink">{formik.errors.dateTo}</p>
            )}
          </div>
        </div>

        {/* Number of Guests */}
        <div className="border border-zinc-600 mt-3 p-3 rounded-xl flex flex-col gap-2">
          <h1 className="font-alli text-3xl">Guests :</h1>
          <div className="flex flex-col gap-4">
            <input
              type="number"
              name="guests"
              value={formik.values.guests}
              className="rounded-xl bg-black border-2 border-zinc-500 px-3 py-1 text-xs tracking-widest text-zinc-300 max-w-xs"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <div>
              {formik.errors.guests && (
                <p className="text-holipink">{formik.errors.guests}</p>
              )}
            </div>
          </div>
        </div>

        {/* days & price */}
        <div className="my-2">
          <div>
            <h2 className="text-md font-dm font-semibold text-zinc-400">
              Total Days:
            </h2>
            <p className="text-holiblue">{totalDays}</p>
          </div>
          <div className="text-md font-dm font-semibold text-zinc-400">
            <h2>Total Price:</h2>
            <p className="text-holiblue">{totalPrice}</p>
          </div>
        </div>

        {/* errors */}
        <div className="flex justify-center m-5 text-center">
          {createBookingData && (
            <div className="border-2 border-lime-400 rounded-xl py-4 px-6 shadow-md shadow-lime-700">
              <p>Your Booking was successful!</p>
              <p className="text-sm text-zinc-300 animate-pulse">
                You will find it in your profile..
              </p>
            </div>
          )}
          {isLoading && <Loader />}
          {hasError && <p className="text-holipink">Error: {formik.errors}</p>}
        </div>

        {/* submit btn */}
        <div>
          <button
            className="my-2 rounded-full px-4 py-1 border-2 text-black border-holiblue bg-holiblue hover:text-holiblue hover:bg-black hover:scale-105 tracking-widest font-dm text-md transition-all duration-800 cursor-pointer"
            type="submit"
          >
            Place Booking
          </button>
        </div>
      </form>
    </div>
  );
};
