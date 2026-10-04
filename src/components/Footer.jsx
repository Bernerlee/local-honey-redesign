import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#F5F2EC]">
      {/* Main footer CTA */}
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
        <div className="border-b border-white/15 pb-20 md:pb-28">
          <p className="mb-6 text-center text-[10px] uppercase tracking-[0.3em] text-white/40">
            Local Honey Hair
          </p>

          <h2 className="text-center text-[clamp(4rem,10vw,10rem)] font-bold leading-[0.78] tracking-[-0.075em]">
            COME AS
            <br />
            YOU ARE.
          </h2>

          <div className="mt-10 flex justify-center">
            <Link
              to="/book"
              className="group inline-flex items-center gap-5 bg-[#F5F2EC] px-8 py-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#111111] transition-colors duration-300 hover:bg-white"
            >
              Book an Appointment
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid gap-12 py-16 md:grid-cols-3 md:py-20">
          {/* Explore */}
          <div>
            <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-white/35">
              Explore
            </p>

            <nav className="flex flex-col gap-3">
              <Link
                to="/services"
                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/stylists"
                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
              >
                Stylists
              </Link>

              <Link
                to="/locations"
                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
              >
                Locations
              </Link>

              <Link
                to="/education"
                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
              >
                Education
              </Link>

              <Link
                to="/new-guests"
                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
              >
                New Guests
              </Link>
            </nav>
          </div>

          {/* Visit */}
          <div>
            <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-white/35">
              Visit
            </p>

            <div className="flex flex-col gap-5 text-sm text-white/60">
              <div>
                <p className="mb-1 text-white/80">Atlanta</p>
                <p>714 Moreland Ave SE</p>
                <p>Atlanta, GA</p>
              </div>

              <div>
                <p className="mb-1 text-white/80">East Nashville</p>
                <p>519 Gallatin Ave</p>
                <p>Nashville, TN</p>
              </div>

              <div>
                <p className="mb-1 text-white/80">8th Ave</p>
                <p>2106 8th Ave South</p>
                <p>Nashville, TN</p>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-white/35">
              Connect
            </p>

            <nav className="flex flex-col gap-3">
              <a
                href="#"
                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
              >
                Instagram
              </a>

              <a
                href="#"
                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
              >
                Contact
              </a>

              <Link
                to="/policies"
                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
              >
                Policies
              </Link>

              <Link
                to="/careers"
                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
              >
                Careers
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-4 border-t border-white/15 pt-6 text-[9px] uppercase tracking-[0.2em] text-white/30 sm:flex-row">
          <span>© 2026 Local Honey Hair</span>

          <span>#YOUAREOK</span>

          <span>Atlanta · Nashville</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
