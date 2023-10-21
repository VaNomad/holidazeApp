import * as Yup from "yup";

export const initialVenueValues = {
  name: "",
  description: "",
  media: [],
  price: 1,
  maxGuests: 1,
  meta: {
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
  },
  location: {
    address: "",
    city: "",
    zip: "",
    country: "",
    continent: "",
  },
};

export const createVenueSchema = Yup.object().shape({
  name: Yup.string()
    .required("You have to fill out this field")
    .min(3, "Your name must be at least 3 characters")
    .max(50, "Your name can not be longer that 50 characters"),
  description: Yup.string()
    .required("You have to fill out this field")
    .min(10, "Write at least one sentence with 10 characters about your place")
    .max(1000, "There is a limit of 1000 characters for your description"),
  media: Yup.array()
    .of(
      Yup.string()
        .url("Invalid URL")
        .required("You have to add at least one image")
    )
    .test(
      "atLeastOneImage",
      "You must add at least one image",
      function (mediaArray) {
        return mediaArray.some((media) => !!media);
      }
    ),
  price: Yup.number()
    .required("You must add at least one digit")
    .min(1, "You have to add a digit"),
  maxGuests: Yup.number()
    .required("You must add at least one digit")
    .min(1, "You have to add a digit"),
  meta: Yup.object().shape({
    wifi: Yup.boolean().required("Required"),
    parking: Yup.boolean().required("Required"),
    breakfast: Yup.boolean().required("Required"),
    pets: Yup.boolean().required("Required"),
  }),
  location: Yup.object().shape({
    address: Yup.string()
      .required("You must add an address")
      .min(5, "At least 5 characters are required")
      .max(50, "Your address can not be longer than 50 characters"),
    city: Yup.string()
      .required("You must add a city")
      .min(3, "You need to type 3 characters")
      .max(30, "City has a limit of 30 characters"),
    zip: Yup.string()
      .required("A zip code is required")
      .min(3, "Zip must be at least 3 characters")
      .max(30, "Zip code can be a maximum of 30 characters"),
    country: Yup.string()
      .required("You must provide the country of your venue")
      .min(3, "The country must have at least 3 characters")
      .max(30, "Country has a limit of 30 characters"),
    continent: Yup.string()
      .required("You must add a continent")
      .min(2, "The continent must be at least 2 characters")
      .max(30, "Continent has a limit of 30 characters"),
  }),
});

