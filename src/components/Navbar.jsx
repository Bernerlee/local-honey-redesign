import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "../assets/logo/LOCAL_HONEY_WORDS_WHITE+ON+TRANSPARENT.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Stylists", href: "/team" },
    { name: "Locations", href: "/locations" },
    { name: "Education", href: "/education" },
  ];

  return (
    <header className="relative z-50 bg-[#111111]">
      <nav className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-14">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src={logoImage}
            alt="Local Honey Hair"
            className="w-36 md:w-40"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.12em] text-white transition-opacity duration-300 hover:opacity-50"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="#book"
            className="ml-2 border border-white px-6 py-3 text-[13px] font-medium uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-white hover:text-[#111111]"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-[#111111] px-6 pb-8 lg:hidden">
          <div className="flex flex-col gap-6 border-t border-white/10 pt-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-[0.15em] text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="w-fit border border-white px-6 py-3 text-sm uppercase tracking-[0.15em] text-white"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
