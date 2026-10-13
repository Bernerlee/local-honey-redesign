import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import educationImage from "../assets/images/education/edu.png";
import salonEducationImage from "../assets/images/education/Education.png";

const preparationSteps = [
  {
    number: "01",
    title: "Find your service",
    description:
      "Explore our services and choose the appointment that best fits your hair goals. If you're unsure, contact the salon before booking.",
    link: "/services",
    linkText: "Explore services",
  },
  {
    number: "02",
    title: "Meet your stylist",
    description:
      "Get to know our team and find a stylist whose work and specialties align with the look you're hoping to achieve.",
    link: "/stylists",
    linkText: "Meet the team",
  },
  {
    number: "03",
    title: "Choose your location",
    description:
      "Visit us in Atlanta, East Nashville, or on 8th Avenue in Nashville. Find the location and details that work best for you.",
    link: "/locations",
    linkText: "Explore locations",
  },
];

export default function NewGuests() {
  return (
    <main className="bg-[#F5F2EC] text-[#111111]">
      {/* HERO */}
      <section className="px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-6 text-xs uppercase tracking-[0.24em] text-black/60">
            Your first visit starts here
          </p>

          <h1 className="max-w-6xl text-[clamp(3.5rem,10vw,9rem)] font-medium uppercase leading-[0.88] tracking-[-0.075em]">
            NEW HERE?
            <br />
            <span className="text-[#D8A45D]">WELCOME.</span>
          </h1>

          <div className="mt-10 grid gap-8 border-t border-black/20 pt-6 md:grid-cols-2 md:items-end lg:mt-14">
            <p className="max-w-xl text-xl leading-relaxed sm:text-2xl">
              Great hair starts with a good conversation. Let's find the
              service, stylist, and location that feel right for you.
            </p>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 bg-[#111111] px-6 py-4 text-sm text-white transition hover:bg-[#D8A45D] hover:text-black"
              >
                Explore services
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/locations"
                className="inline-flex items-center gap-3 border border-black/30 px-6 py-4 text-sm transition hover:bg-black hover:text-white"
              >
                Find us
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-2 md:items-center lg:gap-20">
          <div className="overflow-hidden">
            <img
              src={educationImage}
              alt="A stylist working carefully with a client's hair"
              className="aspect-[4/5] w-full object-cover object-center"
              loading="lazy"
            />
          </div>

          <div className="max-w-xl md:py-10">
            <p className="mb-5 text-xs uppercase tracking-[0.22em] text-black/55">
              A little about us
            </p>

            <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              YOUR HAIR.
              <br />
              YOUR VISION.
              <br />
              <span className="text-[#D8A45D]">OUR CRAFT.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-7 text-black/70 sm:text-lg">
              <p>
                At Local Honey, hair is personal. We want you to feel
                comfortable sharing what you love about your hair, what you'd
                like to change, and how you want it to feel every day.
              </p>

              <p>
                Whether you're ready for a fresh cut, considering a color
                transformation, or simply looking for your new salon home,
                taking a moment to explore your options is a great place to
                start.
              </p>
            </div>

            <Link
              to="/stylists"
              className="mt-8 inline-flex items-center gap-3 border-b border-black pb-2 text-sm"
            >
              Get to know our stylists
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW TO GET STARTED */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-black/55">
                Start here
              </p>

              <h2 className="max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                A FEW THINGS
                <br />
                BEFORE YOU BOOK.
              </h2>
            </div>

            <p className="max-w-sm text-base leading-7 text-black/65">
              A little preparation can help you feel confident about your first
              appointment.
            </p>
          </div>

          <div className="border-t border-black/20">
            {preparationSteps.map((step) => (
              <article
                key={step.number}
                className="grid gap-4 border-b border-black/20 py-8 sm:py-10 md:grid-cols-[80px_1fr_1fr_auto] md:items-start md:gap-8"
              >
                <span className="text-sm text-[#A77736]">{step.number}</span>

                <h3 className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
                  {step.title}
                </h3>

                <p className="max-w-lg text-base leading-7 text-black/65">
                  {step.description}
                </p>

                <Link
                  to={step.link}
                  className="inline-flex w-fit items-center gap-2 border-b border-black/40 pb-1 text-sm hover:border-black"
                >
                  {step.linkText}
                  <ArrowUpRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION / EXPECTATIONS */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-2 md:items-center lg:gap-20">
          <div className="order-2 max-w-xl md:order-1">
            <p className="mb-5 text-xs uppercase tracking-[0.22em] text-black/55">
              Come as you are
            </p>

            <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">
              LET'S TALK
              <br />
              ABOUT YOUR HAIR.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-7 text-black/70 sm:text-lg">
              <p>
                Bring inspiration photos, questions, and ideas. Think about your
                everyday routine, the styles you love, and how much time you
                want to spend maintaining your hair.
              </p>

              <p>
                For major changes or services you're unsure about, contact your
                chosen location before booking so you can get guidance on the
                right next step.
              </p>
            </div>

            <Link
              to="/policies"
              className="mt-8 inline-flex items-center gap-3 border-b border-black pb-2 text-sm"
            >
              Read our salon policies
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="order-1 overflow-hidden md:order-2">
            <img
              src={salonEducationImage}
              alt="Local Honey's salon team learning and sharing hairdressing techniques"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#111111] px-5 py-20 text-[#F5F2EC] sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-6 text-xs uppercase tracking-[0.22em] text-white/55">
            Your next chapter
          </p>

          <h2 className="max-w-5xl text-5xl font-medium uppercase leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-9xl">
            LET'S MAKE
            <br />
            SOMETHING
            <br />
            <span className="text-[#D8A45D]">HAPPEN.</span>
          </h2>

          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/25 pt-6 sm:flex-row sm:items-end">
            <p className="max-w-md text-base leading-7 text-white/65 sm:text-lg">
              Found a service and stylist that feel right? Explore our locations
              and take the next step toward your first visit.
            </p>

            <Link
              to="/locations"
              className="inline-flex w-fit items-center gap-4 bg-[#F5F2EC] px-6 py-4 text-sm text-black transition hover:bg-[#D8A45D]"
            >
              Find your Local Honey
              <ArrowDownRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
