
import { Link } from "react-router-dom";

const locations = [
  {
    number: "01",
    name: "Atlanta",
    subtitle: "Georgia",
    address: "714 Moreland Avenue SE, Suite A",
    city: "Atlanta, GA 30316",
    phone: "4049631607",
    phoneDisplay: "404.963.1607",
    hours: [
      ["Monday", "Closed"],
      ["Tuesday – Friday", "8 AM – 8 PM"],
      ["Saturday", "9 AM – 6 PM"],
      ["Sunday", "10 AM – 5 PM"],
    ],
    description:
      "Our original Atlanta salon, rooted in a vibrant neighborhood full of independent shops, local culture, and creative energy.",
    image: "/images/locations/atlanta.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Local+Honey+Hair+714+Moreland+Avenue+SE+Atlanta+GA+30316",
  },
  {
    number: "02",
    name: "East Nashville",
    subtitle: "Nashville, Tennessee",
    address: "519 Gallatin Avenue",
    city: "Nashville, TN 37206",
    phone: "6159151354",
    phoneDisplay: "615.915.1354",
    hours: [
      ["Monday", "8 AM – 6 PM"],
      ["Tuesday – Friday", "8 AM – 8 PM"],
      ["Saturday", "9 AM – 6 PM"],
      ["Sunday", "10 AM – 5 PM"],
    ],
    description:
      "Our largest location, surrounded by neighborhood favorites, independent boutiques, music venues, and coffee shops.",
    image: "/images/locations/east-nashville.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Local+Honey+Hair+519+Gallatin+Avenue+Nashville+TN+37206",
  },
  {
    number: "03",
    name: "8th Avenue",
    subtitle: "Nashville, Tennessee",
    address: "2106 8th Avenue South",
    city: "Nashville, TN 37204",
    phone: "6154995879",
    phoneDisplay: "615.499.5879",
    hours: [
      ["Monday – Friday", "8 AM – 8 PM"],
      ["Saturday", "9 AM – 6 PM"],
      ["Sunday", "10 AM – 5 PM"],
    ],
    description:
      "A bright, intimate salon in one of Nashville's walkable neighborhoods, perfect for making a little time for yourself.",
    image: "/images/locations/8th-avenue.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Local+Honey+Hair+2106+8th+Avenue+South+Nashville+TN+37204",
  },
];

function LocationSection({ location, reverse }) {
  return (
    <section
      id={`location-${location.number}`}
      className="border-t border-black/15 py-16 md:py-24"
    >
      <div
        className={`grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Location image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#E7E1D7]">
          <img
            src={location.image}
            alt={`${location.name} Local Honey Hair salon`}
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <span className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.2em] text-white drop-shadow">
            Local Honey Hair · {location.number}
          </span>
        </div>

        {/* Location details */}
        <div className="flex h-full flex-col pt-2 lg:py-3">
          <div className="mb-8">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-50">
              Location {location.number}
            </p>

            <h2 className="text-5xl font-medium leading-[0.92] tracking-[-0.055em] md:text-7xl">
              {location.name}
              <span className="mt-3 block text-xl font-normal tracking-normal md:text-2xl">
                {location.subtitle}
              </span>
            </h2>
          </div>

          <p className="mb-10 max-w-lg text-lg leading-8 opacity-70">
            {location.description}
          </p>

          <div className="border-t border-black/15 py-6">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] opacity-50">
              Find us
            </p>
            <p className="text-base leading-7">
              {location.address}
              <br />
              {location.city}
            </p>

            <a
              href={`tel:${location.phone}`}
              className="mt-3 inline-block text-sm underline underline-offset-4"
            >
              {location.phoneDisplay}
            </a>
          </div>

          <div className="border-t border-black/15 py-6">
            <p className="mb-5 text-xs uppercase tracking-[0.18em] opacity-50">
              Opening hours
            </p>

            <div className="space-y-3">
              {location.hours.map(([day, time]) => (
                <div
                  key={day}
                  className="flex justify-between gap-4 text-sm"
                >
                  <span className="opacity-65">{day}</span>
                  <span className="text-right">{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <a
              href={location.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-black bg-black px-6 py-4 text-xs uppercase tracking-[0.15em] text-[#F5F2EC] transition hover:bg-transparent hover:text-black"
            >
              Get Directions ↗
            </a>

            <Link
              to="/book"
              className="inline-flex items-center justify-center border border-black px-6 py-4 text-xs uppercase tracking-[0.15em] transition hover:bg-black hover:text-[#F5F2EC]"
            >
              Book Now ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Locations() {
  return (
    <main className="bg-[#F5F2EC] text-[#111111]">
      {/* HERO */}
      <header className="px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-8 text-xs uppercase tracking-[0.25em] opacity-50">
            Three spaces. One community.
          </p>

          <h1 className="text-[15vw] font-medium leading-[0.8] tracking-[-0.075em] md:text-[11vw]">
            FIND YOUR
            <br />
            HONEY.
          </h1>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-xl text-xl leading-8 md:text-2xl">
              Different neighborhoods, different personalities, the same
              love for great hair. Find the Local Honey closest to you.
            </p>

            <nav
              aria-label="Jump to a location"
              className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end"
            >
              {locations.map((location) => (
                <a
                  key={location.number}
                  href={`#location-${location.number}`}
                  className="border-b border-black/30 pb-2 text-xs uppercase tracking-[0.15em] transition hover:border-black"
                >
                  {location.name} ↓
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* LOCATIONS */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {locations.map((location, index) => (
          <LocationSection
            key={location.number}
            location={location}
            reverse={index === 1}
          />
        ))}
      </div>

      {/* FINAL CTA */}
      <section className="bg-[#D8A45D] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-8 text-xs uppercase tracking-[0.2em]">
            Your chair is waiting
          </p>

          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="max-w-4xl text-6xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">
              GOOD HAIR.
              <br />
              GOOD ENERGY.
            </h2>

            <Link
              to="/book"
              className="inline-flex w-fit border border-black px-7 py-4 text-xs uppercase tracking-[0.18em] transition hover:bg-black hover:text-[#F5F2EC]"
            >
              Book Your Visit ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}