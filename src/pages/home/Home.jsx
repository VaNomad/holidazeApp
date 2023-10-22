import { VenueList } from "../venueList/VenueList";
import { Hero } from "./Hero";
import { SearchBtn } from "../../components/ui/buttons/SearchBtn";

export const Home = () => {

  return (
  <div
    id="top"
  >
    <Hero />
    <VenueList />
    <SearchBtn />
  </div>
);
};
