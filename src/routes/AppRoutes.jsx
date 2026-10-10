import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Policies from "../pages/Policies";
import Stylists from "../pages/Stylists";
import Locations from "../pages/Locations";
import Education from "../pages/Education";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/stylists" element={<Stylists />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/education" element={<Education />} />
    </Routes>
  );
};

export default AppRoutes;
