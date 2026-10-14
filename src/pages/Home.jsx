import Hero from "../components/Hero";
import BrandStatement from "../components/BrandStatement";
import ServicesSection from "../components/ServicesSection";
import StylistsSection from "../components/StylistsSection";
import EditorialSection from "../components/EditorialSection";
import LocationsSection from "../components/LocationsSection";
import EducationSection from "../components/EducationSection";
import NewGuestSection from "../components/NewGuestSection";
import ReviewSection from "../components/ReviewSection";
import BookingCTA from "../components/BookingCTA";
import Reveal from "../components/Reveal";

const Home = () => {
  return (
    <>
      {/* Hero enters as the page loads */}
      <Reveal y={12}>
        <Hero />
      </Reveal>

      <Reveal>
        <BrandStatement />
      </Reveal>

      <Reveal>
        <ServicesSection />
      </Reveal>

      <Reveal>
        <EditorialSection />
      </Reveal>

      <StylistsSection />

      <Reveal>
        <LocationsSection />
      </Reveal>

      <Reveal>
        <EducationSection />
      </Reveal>

      <Reveal>
        <NewGuestSection />
      </Reveal>

      <Reveal>
        <ReviewSection />
      </Reveal>

      <Reveal>
        <BookingCTA />
      </Reveal>
    </>
  );
};

export default Home;
