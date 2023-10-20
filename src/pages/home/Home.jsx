import { VenueList } from "../venueList/VenueList";
import { Hero } from "./Hero";
import { BsSearchHeart } from "react-icons/bs";

export const Home = () => {
  const scrollToTop = () => {
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="top">
      <Hero />
      <VenueList />
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={scrollToTop}
          className="border-[3px] border-black bg-holipink hover:bg-black text-black hover:text-holipink font-bold p-2 rounded-full hover:scale-105 transition-all duration-300"
        >
          <BsSearchHeart size={20} />
        </button>
      </div>
    </div>
  );
};
