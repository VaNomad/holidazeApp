import { VenueList } from "../venueList/VenueList";
import { Hero } from "./Hero";
import { SearchBtn } from "../../components/ui/buttons/SearchBtn";

export const Home = () => {

  return (
  <div
    id="top"
    className="bg-hero-pattern bg-fixed md:bg-center bg-cover"
  >
    <Hero />
    <VenueList />
    <SearchBtn />
  </div>
);
};
