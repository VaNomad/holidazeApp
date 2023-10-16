// import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { API_BASE_URL } from "../../api/endpoints";
import { BookingCall } from "../../api/BookingCall";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup"



export const BookingForm = ({ price, maxGuests}) => {
  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
  
  const handleDates = ({ startDate, endDate }) => {
    formik.setFieldValue("dateFrom", startDate);
    formik.setFieldValue("dateTo", endDate);

    // Calculate the total amount based on selected dates and price
    if (startDate && endDate) {
      const daysDifference = Math.ceil(
        (endDate - startDate) / (1000 * 60 * 60 * 24)
      );

      setTotalDays(daysDifference);

      const newTotalAmount = daysDifference * price;
      setTotalPrice(newTotalAmount);
    }
  };

  // const calculateTotalPrice = (startDate, endDate, pricePerNight) => {
  //   const start = new Date(startDate).toLocaleDateString();
  //   const end = new Date(endDate).toLocaleDateString();
  //   const timeDiff = end - start;
  //   const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  //   const totalPrice = numberOfNights * pricePerNight;
  //   return totalPrice;
  // };

  // const calculateTotalDays = (startDate, endDate) => {
  //   const start = new Date(startDate).toLocaleDateString();
  //   const end = new Date(endDate).toLocaleDateString();
  //   const timeDiff = end - start;
  //   const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  //   return totalDays;
  // };

  const handleBooking = async (postData) => {
    try {
      console.log("Booking Data:", postData);
      const response = BookingCall(postData);
      console.log("Booking Response:", response);
    } catch (error) {
      console.log("Booking Error:", error);
    }
  };

  // const {values, handleBlur, handleChange, handleSubmit, errors} = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: validationSchema,
  //   onSubmit: handleBooking,
  // });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleBooking,
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
                handleDates({
                  startDate: date,
                  endDate: formik.values.dateTo,
                });
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="Start Date"
              minDate={new Date()}
              isClearable={true}
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
                handleDates({
                  startDate: formik.values.dateFrom,
                  endDate: date,
                });
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="End Date"
              minDate={new Date()}
              isClearable={true}
            />
            {formik.errors.dateTo && <p>{formik.errors.dateTo}</p>}
          </div>
        </div>

        {/* Number of Guests */}
        <div className="border border-zinc-600 mt-3 p-3 rounded-xl flex flex-col gap-2">
          <h1 className="font-alli text-3xl">Guests :</h1>
          <div className="flex justify-between items-center gap-4">
            <input
              type="number"
              name="guests"
              value={formik.values.guests}
              className="rounded-xl bg-black border-2 border-zinc-500 px-3 py-1 text-xs tracking-widest text-zinc-300 w-full"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.errors.guests && <p>{formik.errors.guests}</p>}
            
          </div>
        </div>

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

        <button
          className="my-2 rounded-full px-4 py-1 border-2 text-black border-holiblue bg-holiblue hover:text-holiblue hover:bg-black hover:scale-105 tracking-widest font-dm text-md transition-all duration-800 cursor-pointer"
          type="submit"
        >
          Place Booking
        </button>
      </form>
    </div>
  );
};
