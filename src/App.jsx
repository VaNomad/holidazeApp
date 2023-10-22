import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { VenueDetails } from "./pages/venueDetails/VenueDetails";
import { VenueList } from "./pages/venueList/VenueList";
import { Error404 } from "./pages/404/Error404";
import { Layout } from "./layout/Layout";
import { ProfileIndex } from "./pages/profile/ProfileIndex";

function App() {
  return (
    <div className="bg-blackish text-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Home />} />
          <Route path="/profile" element={<ProfileIndex />} />
          <Route path="/venues/:id" element={<VenueDetails />} />
          <Route path="/venues" element={<VenueList />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
