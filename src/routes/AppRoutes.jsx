import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Policies from "../pages/Policies";
import Stylists from "../pages/Stylists";
import Locations from "../pages/Locations";
import Education from "../pages/Education";
import NewGuests from "../pages/NewGuests";
import Careers from "../pages/Careers";
import Book from "../pages/Book";
import Reviews from "../pages/Reviews";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/stylists" element={<Stylists />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/education" element={<Education />} />
      <Route path="/new-guests" element={<NewGuests />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/book" element={<Book />} />
      <Route path="/reviews" element={<Reviews />} />

      {/* NotFoundPage */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
