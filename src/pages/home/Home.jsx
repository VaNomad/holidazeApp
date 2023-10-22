import { VenueList } from "../venueList/VenueList";
import { Hero } from "./Hero";
// import { BsSearchHeart } from "react-icons/bs";
import { SearchBtn } from "../../components/ui/buttons/SearchBtn";

export const Home = () => {
  // const scrollToTop = () => {
  //   document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  // };

  return (
  <div
    id="top"
    className="bg-hero-pattern bg-fixed md:bg-center"
    style={{ backgroundSize: "cover", height: "100vh" }}
  >
    <Hero />
    <VenueList />
    <SearchBtn />
  </div>
);
};
