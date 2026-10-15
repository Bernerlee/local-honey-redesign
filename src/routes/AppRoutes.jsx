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
    </Routes>
  );
};

export default AppRoutes;
