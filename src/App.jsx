import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
// import { SignUpForm } from "./components/forms/SignUpForm";
import { VenueDetails } from "./pages/venueDetails/VenueDetails";
import { VenueList } from "./pages/venueList/VenueList";
import { Error404 } from "./pages/404/Error404";
import { Layout } from "./layout/Layout";
import { AddVenue } from "./components/forms/AddVenue";
import { Profile } from "./pages/profile/Profile";

function App() {
  return (
    <div className="bg-blackish min-h-screen text-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Home />} />
          {/* <Route path="/sign-up" element={<SignUpForm />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-venue" element={<AddVenue />} />
          <Route path="/venues/:id" element={<VenueDetails />} />
          <Route path="/venues" element={<VenueList />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
