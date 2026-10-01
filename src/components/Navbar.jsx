import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "../assets/logo/LOCAL_HONEY_WORDS_WHITE+ON+TRANSPARENT.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Stylists", href: "/team" },
    { name: "Locations", href: "/locations" },
    { name: "Education", href: "/education" },
  ];

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-10 lg:px-14">
        {/* Logo */}
        <a href="/" className="block">
          <img
            src={logoImage}
            alt="Local Honey Hair"
            className="w-32 md:w-36"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-60"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#book"
            className="border border-white px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-[#111111] px-6 py-8 lg:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.15em] text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="w-fit border border-white px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white"
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
