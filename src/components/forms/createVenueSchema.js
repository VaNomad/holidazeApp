import * as Yup from "yup";

export const createVenueSchema = Yup.object().shape({
  "id": "string",
  "name": "string",
  "description": "string",
  "media": ["string"],
  "price": 0,
  "maxGuests": 0,
  "rating": 0,
  "created": "string",
  "updated": "string",
  "meta": Yup.object().shape({
    
    "wifi": true,
    "parking": true,
    "breakfast": true,
    "pets": true
  
  }),
  location: Yup.object().shape({
    "address": "string",
    "city": "string",
    "zip": "string",
    "country": "string",
    "continent": "string",
    "lat": 0,
    "lng": 0
  }),
});