import { Link } from "react-router-dom";
import { ArrowDown, ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";

const locations = [
  {
    number: "01",
    name: "Atlanta",
    city: "Atlanta, Georgia",
    address: "714 Moreland Ave SE, Suite A",
    phone: "404.963.1607",
    description: "Your neighborhood spot for great hair and good energy.",
    bookingUrl: "https://localhoneyatlanta.phorest.me/book/",
  },
  {
    number: "02",
    name: "8th Avenue",
    city: "Nashville, Tennessee",
    address: "2106 8th Avenue South",
    phone: "615.499.5879",
    description: "Find your people, your style, and your next great hair day.",
    bookingUrl: "https://localhoney8th.phorest.me/book/",
  },
  {
    number: "03",
    name: "East Nashville",
    city: "Nashville, Tennessee",
    address: "519 Gallatin Ave",
    phone: "615.915.1354",
    description:
      "Creative hair, thoughtful service, and a place to feel at home.",
    bookingUrl: "https://localhoneyeast.phorest.me/book/",
  },
];

const Book = () => {
  return (
    <main className="bg-[#F5F2EC] text-[#111111]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32 lg:px-14 lg:pb-36 lg:pt-40">
          <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-[#111111]/50">
            Your next appointment starts here
          </p>

          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <h1 className="max-w-5xl text-[clamp(4rem,11vw,10.5rem)] font-bold leading-[0.78] tracking-[-0.085em]">
              YOUR NEXT
              <br />
              GOOD HAIR
              <br />
              DAY<span className="text-[#D8A45D]">.</span>
            </h1>

            <div className="max-w-sm lg:justify-self-end">
              <p className="text-base leading-8 text-[#111111]/65 md:text-lg">
                Great hair starts with the right person. Choose your Local Honey
                location below and book your next appointment.
              </p>

              <a
                href="#choose-location"
                className="mt-8 inline-flex items-center gap-4 border-b border-[#111111]/30 pb-3 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:border-[#D8A45D]"
              >
                Choose your location
                <ArrowDown size={16} />
              </a>
            </div>
          </div>

          <div className="mt-20 border-t border-[#111111]/15 pt-5 md:mt-28">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#111111]/50">
                Three locations. One Local Honey feeling.
              </p>
              <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#111111]/40 sm:block">
                Scroll to explore
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Location selection */}
      <section id="choose-location" className="bg-[#111111] text-[#F5F2EC]">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
          <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#F5F2EC]/45">
                Find your salon
              </p>

              <h2 className="text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.85] tracking-[-0.065em]">
                WHERE WILL
                <br />
                WE SEE YOU?
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-[#F5F2EC]/60">
              Select the location you want to visit. Each salon has its own
              booking page, team, and availability.
            </p>
          </div>

          <div className="grid gap-0 md:grid-cols-3">
            {locations.map((location, index) => (
              <article
                key={location.number}
                className={`group flex flex-col border-t border-[#F5F2EC]/20 py-8 md:min-h-[390px] md:px-7 md:py-10 ${
                  index === 0
                    ? "md:border-l-0 md:pl-0"
                    : "md:border-l md:border-l-[#F5F2EC]/20"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[10px] tracking-[0.2em] text-[#F5F2EC]/40">
                    {location.number}
                  </span>
                  <MapPin
                    size={18}
                    strokeWidth={1.25}
                    className="text-[#D8A45D]"
                  />
                </div>

                <div className="mt-12 flex-1">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#F5F2EC]/45">
                    {location.city}
                  </p>

                  <h3 className="text-3xl font-medium tracking-[-0.045em] md:text-4xl">
                    {location.name}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#F5F2EC]/60">
                    {location.description}
                  </p>

                  <p className="mt-6 text-xs leading-6 text-[#F5F2EC]/50">
                    {location.address}
                  </p>

                  <a
                    href={`tel:${location.phone.replaceAll(".", "")}`}
                    className="mt-1 inline-block text-xs text-[#F5F2EC]/50 transition-colors hover:text-[#D8A45D]"
                  >
                    {location.phone}
                  </a>
                </div>

                <a
                  href={location.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 flex items-center justify-between border border-[#F5F2EC]/30 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:border-[#D8A45D] hover:bg-[#D8A45D] hover:text-[#111111]"
                >
                  Book this location
                  <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-xs leading-6 text-[#F5F2EC]/45">
            Booking opens in a new tab through our location-specific appointment
            systems.
          </p>
        </div>
      </section>

      {/* Helpful links */}
      <section>
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#111111]/45">
            A little preparation
          </p>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <h2 className="text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.85] tracking-[-0.065em]">
              GOOD HAIR
              <br />
              STARTS HERE.
            </h2>

            <p className="max-w-lg text-sm leading-8 text-[#111111]/60 md:text-base">
              Not sure which service to choose or which stylist is right for
              you? Explore our services, get to know the team, and review our
              salon policies before your visit.
            </p>
          </div>

          <div className="mt-14 border-t border-[#111111]/20">
            {[
              {
                title: "Explore Services",
                description: "Find the service that fits your hair goals.",
                to: "/services",
              },
              {
                title: "Meet the Stylists",
                description: "Get to know the people behind the chair.",
                to: "/stylists",
              },
              {
                title: "Read Our Policies",
                description: "Everything you need to know before visiting.",
                to: "/policies",
              },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex flex-col justify-between gap-4 border-b border-[#111111]/20 py-6 transition-colors duration-300 hover:bg-[#EBE6DC] sm:flex-row sm:items-center sm:px-4"
              >
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.03em] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#111111]/55">
                    {item.description}
                  </p>
                </div>

                <ArrowDownRight
                  size={22}
                  strokeWidth={1.25}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </Link>
            ))}
          </div>

          <div className="mt-20 bg-[#D8A45D] px-6 py-12 md:px-12 md:py-16">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#111111]/60">
              We can't wait to see you
            </p>

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="max-w-3xl text-4xl font-bold leading-[0.95] tracking-[-0.06em] md:text-6xl">
                YOUR CHAIR
                <br />
                IS WAITING.
              </h2>

              <a
                href="#choose-location"
                className="inline-flex w-fit items-center gap-5 bg-[#111111] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F2EC] transition-colors duration-300 hover:bg-[#333333]"
              >
                Choose a Location
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Book;
