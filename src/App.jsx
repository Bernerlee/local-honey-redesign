import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
