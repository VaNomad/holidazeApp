import { VenueList } from "../venueList/VenueList";
// import { AllVenuesCard } from "../../components/card/AllVenuesCard";
// import { FetchAllVenues } from "../../api/calls/FetchAllVenues";
// import { VenuesCard } from "../../components/card/VenuesCard";
// import { VenuesCarousel} from "../../components/carousel/venuesCarousel"


export const Home = () => {
  // console.log("Venues Card", AllVenuesCard)
  // console.log("VenuesCarousel", Carousel)
  return (
    <div>
      <h1 className="flex justify-center font-bold text-2xl">Home</h1>
      {/* <AllVenuesCard /> */ }
      <VenueList />
      {/* <VenuesCarousel /> */}
    </div>
  );
};
