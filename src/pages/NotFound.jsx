import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-[75vh] bg-[#F5F2EC] text-[#111111]">
      {/* 404 Hero */}
      <section className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
        {/* Decorative number */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[clamp(15rem,35vw,32rem)] leading-none text-[#111111]/[0.035]"
        >
          404
        </span>

        <div className="relative z-10 flex max-w-3xl flex-col items-center">
          {/* Eyebrow */}
          <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.35em] text-[#D8A45D] sm:text-xs">
            Local Honey Hair
          </p>

          {/* Main heading */}
          <h1 className="font-serif text-4xl uppercase leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
            Oops! Wrong
            <br />
            <span className="italic text-[#D8A45D]">turn.</span>
          </h1>

          <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#111111]/50 sm:text-xs">
            Error 404 — Page Not Found
          </p>

          <div className="my-8 h-px w-16 bg-[#D8A45D]" />

          {/* Description */}
          <p className="max-w-md text-sm leading-7 text-[#111111]/65 sm:text-base">
            Looks like this page needs a little trim. The page you’re looking
            for may have moved or no longer exists. Let’s get you back to the
            good stuff.
          </p>

          {/* Primary action */}
          <Link
            to="/"
            className="group mt-10 inline-flex items-center gap-4 bg-[#111111] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F5F2EC] transition-colors duration-300 hover:bg-[#D8A45D] hover:text-[#111111] sm:text-xs"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Homepage
          </Link>

          {/* Secondary navigation */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-9">
            <Link
              to="/services"
              className="group inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-[#111111]/60 transition-colors hover:text-[#D8A45D]"
            >
              Services
              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <span className="h-1 w-1 rounded-full bg-[#D8A45D]" />

            <Link
              to="/stylists"
              className="group inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-[#111111]/60 transition-colors hover:text-[#D8A45D]"
            >
              Meet Our Stylists
              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <span className="h-1 w-1 rounded-full bg-[#D8A45D]" />

            <Link
              to="/locations"
              className="group inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-[#111111]/60 transition-colors hover:text-[#D8A45D]"
            >
              Locations
              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
