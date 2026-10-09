import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Policies from "../pages/Policies";
import Stylists from "../pages/Stylists";
import Locations from "../pages/Locations";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/stylists" element={<Stylists />} />
      <Route path="/locations" element={<Locations />} />
    </Routes>
  );
};

export default AppRoutes;
