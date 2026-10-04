import { Link } from "react-router-dom";
import servicesHero from "../assets/images/C1_AritistInteractLex53049.jpg";

const colorServices = [
  {
    name: "Accent Highlight",
    description:
      "Strategically placed foils to add just enough highlight to accent your hair's movement. Think money piece or face framing.",
  },
  {
    name: "Balayage",
    description:
      "A freehand painting technique creating a custom highlight for a low-maintenance, lived-in look.",
  },
  {
    name: "Base Color / All Over Color",
    description:
      "For gray coverage, all-over color, or matching your roots to your current color. No foils or highlights included.",
  },
  {
    name: "Full Highlight",
    description:
      "A full-head highlight focusing on the front, crown, and underneath portions of the hair.",
  },
  {
    name: "Partial Highlight",
    description:
      "Focused around the part line and face for a more targeted highlight.",
  },
  {
    name: "Transformational Blonding",
    description:
      "For major blonding projects including babylights, lowlights, brown-to-blonde transformations, high-impact blonding, and significant new growth.",
  },
  {
    name: "Base Color + Full Highlight",
    description:
      "The combo for covering grays or deepening your natural color while adding or maintaining highlights.",
  },
  {
    name: "Base Color + Partial Highlight",
    description:
      "A smaller color and highlight combination for maintaining your color while adding brightness around the face and part.",
  },
];

const cutServices = [
  {
    name: "Blowout",
    description: "Shampoo, blowout and/or heat styling.",
  },
  {
    name: "Apprentice Blowout",
    description:
      "A shampoo and blowout performed by a growing stylist in the Local Honey Apprentice Program.",
  },
  {
    name: "Haircut",
    description:
      "Haircuts from mid-cheek length and longer, including precision bobs, long layers, face framing, and bangs.",
  },
  {
    name: "Curly Cut",
    description:
      "A cut focused on naturally curly and wavy hair, from tight curls to softer waves.",
  },
  {
    name: "Barber Type Haircut",
    description: "For clipper-over-comb cuts, fades, and over-the-ear styles.",
  },
  {
    name: "Transformation Haircut / New Client",
    description:
      "For dramatic changes in style or length. Includes additional consultation time for clients who are new to their stylist or unsure of what they want.",
  },
];

const salonServices = [
  "Bang Trim",
  "Bleach & Tone",
  "Brazilian Blowout",
  "Brow — Tint / Wax / Shape",
  "Consultation",
  "Keratin Treatment",
  "Updos",
  "Bridal",
  "Extensions",
];

const ServiceCategory = ({ number, title, services }) => {
  return (
    <section className="border-t border-[#111111]/15">
      <div className="grid lg:grid-cols-[0.3fr_1fr]">
        {/* Category heading */}
        <div className="border-b border-[#111111]/15 py-8 lg:border-b-0 lg:border-r lg:py-12">
          <div className="flex items-center justify-between lg:block">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#111111]/35">
              {number}
            </span>

            <h2 className="mt-0 text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:mt-5 lg:text-6xl">
              {title}
            </h2>
          </div>
        </div>

        {/* Services */}
        <div className="lg:pl-12">
          {services.map((service, index) => (
            <article
              key={service.name}
              className="group border-b border-[#111111]/15 py-8 last:border-b-0 md:py-10"
            >
              <div className="flex items-start justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="flex items-start gap-4">
                    <span className="pt-1 text-[9px] uppercase tracking-[0.2em] text-[#111111]/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-2xl font-medium tracking-[-0.035em] md:text-3xl">
                      {service.name}
                    </h3>
                  </div>

                  <p className="mt-4 pl-8 text-sm leading-7 text-[#111111]/55 md:text-base">
                    {service.description}
                  </p>
                </div>

                <span className="hidden pt-1 text-lg text-[#111111]/30 transition-transform duration-300 group-hover:translate-x-1 sm:block">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <main className="bg-[#F5F2EC] text-[#111111]">
      {/* HERO */}
      <section className="px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32 lg:px-14 lg:pb-36 lg:pt-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
            <div>
              <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#111111]/45">
                Local Honey Hair
              </p>

              <h1 className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-bold leading-[0.78] tracking-[-0.075em]">
                WE DO
                <br />
                HAIR.
              </h1>

              <p className="mt-10 max-w-xl text-base leading-7 text-[#111111]/60 md:text-lg md:leading-8">
                From precision cuts to lived-in color and complete
                transformations, our stylists create hair that feels like you.
              </p>
            </div>

            <div>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={servicesHero}
                  alt="Local Honey stylist"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-4 flex justify-between text-[9px] uppercase tracking-[0.2em] text-[#111111]/35">
                <span>Cut / Color / Craft</span>
                <span>01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE MENU */}
      <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-14 lg:pb-40">
        <div className="mx-auto max-w-[1600px]">
          {/* COLOR */}
          <ServiceCategory number="01" title="Color" services={colorServices} />

          {/* CUT */}
          <ServiceCategory number="02" title="Cut" services={cutServices} />

          {/* CALL THE SALON */}
          <section className="border-t border-[#111111]/15">
            <div className="grid lg:grid-cols-[0.3fr_1fr]">
              <div className="border-b border-[#111111]/15 py-8 lg:border-b-0 lg:border-r lg:py-12">
                <div className="flex items-center justify-between lg:block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#111111]/35">
                    03
                  </span>

                  <h2 className="mt-0 text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:mt-5 lg:text-6xl">
                    Call the
                    <br />
                    Salon
                  </h2>
                </div>
              </div>

              <div className="lg:pl-12">
                <div className="grid sm:grid-cols-2">
                  {salonServices.map((service, index) => (
                    <div
                      key={service}
                      className="flex items-center justify-between border-b border-[#111111]/15 py-7 pr-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#111111]/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-lg tracking-[-0.02em]">
                          {service}
                        </span>
                      </div>

                      <span className="text-[#111111]/30">→</span>
                    </div>
                  ))}
                </div>

                <p className="mt-8 max-w-xl text-sm leading-7 text-[#111111]/50">
                  Some services require a consultation or additional information
                  before booking. Contact your Local Honey salon for details and
                  availability.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="bg-[#111111] px-6 py-20 text-[#F5F2EC] md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
              Before You Book
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] sm:text-5xl md:text-6xl">
              A few things
              <br />
              to know.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border-t border-white/15 pt-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                Pricing
              </p>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Prices shown by Local Honey are starting-level prices and vary
                depending on the stylist. Your stylist can provide a more
                specific estimate during your consultation.
              </p>
            </div>

            <div className="border-t border-white/15 pt-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                Service Charge
              </p>

              <p className="mt-4 text-sm leading-7 text-white/60">
                A 12% service charge is applied to all services and is not
                included in the starting prices shown during booking.
              </p>
            </div>

            <div className="border-t border-white/15 pt-5 sm:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                Booking
              </p>

              <p className="mt-4 text-sm leading-7 text-white/60">
                A valid credit card is required to book appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#D8A45D] px-6 py-24 text-[#111111] md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#111111]/50">
            Ready?
          </p>

          <h2 className="mt-6 text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.8] tracking-[-0.075em]">
            LET'S MAKE
            <br />
            SOMETHING.
          </h2>

          <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-[#111111]/60 md:text-base">
            Find your stylist and book the service that's right for you.
          </p>

          <Link
            to="/book"
            className="mt-9 inline-flex items-center gap-5 bg-[#111111] px-8 py-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5F2EC] transition-colors duration-300 hover:bg-[#333333]"
          >
            Book an Appointment
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
