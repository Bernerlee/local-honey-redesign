import atlantaImage from "../assets/images/ATL+photo.jpg";
import eastNashvilleImage from "../assets/images/EAST+INTERIOR+2.jpg";
import eighthAveImage from "../assets/images/DSCF3256+2.jpeg";

const locations = [
  {
    name: "Atlanta",
    address: "714 Moreland Ave SE",
    city: "Atlanta, GA",
    image: atlantaImage,
  },
  {
    name: "East Nashville",
    address: "519 Gallatin Ave",
    city: "Nashville, TN",
    image: eastNashvilleImage,
  },
  {
    name: "8th Ave",
    address: "2106 8th Ave South",
    city: "Nashville, TN",
    image: eighthAveImage,
  },
];

const LocationsSection = () => {
  return (
    <section className="bg-[#111111] text-[#F5F2EC]">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
              Find Us
            </p>

            <h2 className="max-w-5xl text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.85] tracking-[-0.065em]">
              FIND YOUR
              <br />
              LOCAL HONEY.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/55 md:text-base">
            Three spaces. One community. Find the Local Honey closest to you and
            come as you are.
          </p>
        </div>

        {/* Locations */}
        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-3 md:gap-6">
          {locations.map((location, index) => (
            <article key={location.name} className="group">
              {/* Image */}
              <a href="/locations" className="block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={location.image}
                    alt={`${location.name} Local Honey salon`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </a>

              {/* Location information */}
              <div className="mt-5 border-t border-white/15 pt-5">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-white/35">
                      0{index + 1}
                    </p>

                    <h3 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                      {location.name}
                    </h3>

                    <p className="mt-3 text-sm text-white/50">
                      {location.address}
                      <br />
                      {location.city}
                    </p>
                  </div>

                  <a
                    href="/locations"
                    className="mt-1 text-lg text-white/40 transition-transform duration-300 group-hover:translate-x-1"
                    aria-label={`View ${location.name} location`}
                  >
                    →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border-t border-white/15 pt-8 md:mt-20">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <p className="text-sm text-white/40">
              Visit us in Atlanta or Nashville.
            </p>

            <a
              href="/locations"
              className="group inline-flex w-fit items-center gap-5 border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-white hover:text-[#111111]"
            >
              Explore Locations
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
