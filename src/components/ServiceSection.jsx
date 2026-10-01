import serviceImage from "../assets/images/image-asset2.jpeg";

const services = [
  {
    number: "01",
    title: "Cut",
    description:
      "From precision bobs and long layers to curly cuts, fades, bangs, and complete transformations.",
  },
  {
    number: "02",
    title: "Color",
    description:
      "Custom color, balayage, highlights, blonding, and everything in between.",
  },
  {
    number: "03",
    title: "Style",
    description:
      "Blowouts, heat styling, special occasions, and services designed to finish the look.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#111111] text-[#F5F2EC]">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:mb-24 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/40">
              What We Do
            </p>

            <h2 className="max-w-4xl text-[clamp(3.5rem,7vw,7.5rem)] font-bold leading-[0.85] tracking-[-0.065em]">
              HAIR,
              <br />
              BUT MAKE
              <br />
              IT YOURS.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/55 md:text-base">
            Every head of hair is different. Our stylists work with you to
            create something that feels completely your own.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-24">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={serviceImage}
                alt="Local Honey stylist working with a client"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-white/30">
              The craft behind the chair
            </p>
          </div>

          {/* Services */}
          <div className="order-1 lg:order-2">
            {services.map((service) => (
              <a
                href="/services"
                key={service.number}
                className="group block border-t border-white/15 py-8 md:py-10"
              >
                <div className="grid gap-5 md:grid-cols-[80px_1fr_auto] md:items-start">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    {service.number}
                  </span>

                  <div>
                    <h3 className="text-4xl font-medium tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2 md:text-5xl lg:text-6xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-white/50 md:text-base">
                      {service.description}
                    </p>
                  </div>

                  <span className="hidden text-xl text-white/40 transition-transform duration-300 group-hover:translate-x-2 md:block">
                    →
                  </span>
                </div>
              </a>
            ))}

            {/* CTA */}
            <div className="border-t border-white/15 pt-8">
              <a
                href="/services"
                className="group inline-flex items-center gap-5 bg-[#F5F2EC] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#111111] transition-colors duration-300 hover:bg-white"
              >
                Explore All Services
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
