import Hero from "../components/Hero";
import BrandStatement from "../components/BrandStatement";
import ServicesSection from "../components/ServicesSection";
import StylistsSection from "../components/StylistsSection";
import EditorialSection from "../components/EditorialSection";
import LocationsSection from "../components/LocationsSection";
import EducationSection from "../components/EducationSection";
import NewGuestSection from "../components/NewGuestSection";
import ReviewSection from "../components/ReviewSection";

const Home = () => {
  return (
    <>
      <Hero />
      <BrandStatement />
      <ServicesSection />
      <StylistsSection />
      <LocationsSection />
      <EducationSection />
      <NewGuestSection />
      <ReviewSection />

      <EditorialSection />
    </>
  );
};

export default Home;
