import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import ServicesSection from "./components/ServiceSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <ServicesSection />
      </main>
    </>
  );
}

export default App;
