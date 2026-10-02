import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import ServicesSection from "./components/ServiceSection";
import EditorialSection from "./components/EditorialSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <ServicesSection />
        <EditorialSection />
      </main>
    </>
  );
}

export default App;
