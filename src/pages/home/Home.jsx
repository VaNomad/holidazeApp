import { VenueList } from "../venueList/VenueList";

export const Home = () => {
  return (
    <div>
      <h1 className="flex justify-center font-bold text-2xl">Home</h1>
      <VenueList />
    </div>
  );
};
