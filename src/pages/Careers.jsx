import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import careersHero from "../assets/images/careers/careers-hero.jpg";
import educationImage from "../assets/images/education/Education.png";

const opportunities = [
  {
    number: "01",
    title: "Stylists",
    description:
      "Bring your perspective, creativity, and craft to a community that cares about great hair and the people behind it.",
  },
  {
    number: "02",
    title: "Apprentices",
    description:
      "Build your foundation, develop your skills, and explore a career in hair through Local Honey's apprenticeship program.",
  },
  {
    number: "03",
    title: "Front Desk Coordinators",
    description:
      "Help create a thoughtful, welcoming experience for guests and support the people who make the salon run.",
  },
  {
    number: "04",
    title: "Potential Team Leaders",
    description:
      "Bring your leadership, collaborative spirit, and passion for helping a creative team grow.",
  },
];

const values = [
  {
    number: "01",
    title: "Creativity",
    description:
      "Make space for ideas, individual expression, and the ongoing pursuit of your craft.",
  },
  {
    number: "02",
    title: "Community",
    description:
      "Be part of a team built around connection, collaboration, and sharing what we know.",
  },
  {
    number: "03",
    title: "Confidence",
    description:
      "Keep learning, build your skills, and bring your own perspective to the work.",
  },
];

export default function Careers() {
  const applicationUrl = "https://localhoneyhair.com/careers";

  return (
    <main className="bg-[#F5F2EC] text-[#111111]">
      {/* HERO */}
      <section className="px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-6 text-xs uppercase tracking-[0.24em] text-black/60">
            Careers at Local Honey
          </p>

          <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-medium uppercase leading-[0.86] tracking-[-0.075em]">
            MAKE YOUR
            <br />
            NEXT <span className="text-[#D8A45D]">MOVE.</span>
          </h1>

          <div className="mt-10 grid gap-8 border-t border-black/20 pt-6 md:grid-cols-2 md:items-end lg:mt-14">
            <p className="max-w-xl text-xl leading-relaxed sm:text-2xl">
              Good work starts with good people. Find your place in a community
              that values creativity, connection, and the craft of hair.
            </p>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={applicationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#111111] px-6 py-4 text-sm text-white transition hover:bg-[#D8A45D] hover:text-black"
              >
                Join our team
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#opportunities"
                className="inline-flex items-center gap-3 border border-black/30 px-6 py-4 text-sm transition hover:bg-black hover:text-white"
              >
                Explore opportunities
                <ArrowDownRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTRAIT */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <img
              src={careersHero}
              alt="Editorial portrait celebrating individuality and personal style"
              className="max-h-[850px] w-full object-cover object-center"
              loading="eager"
            />

            <div className="flex flex-col justify-between gap-10 py-3 md:pb-3 md:pl-8 lg:pl-16">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.22em] text-black/55">
                  More than a job
                </p>

                <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:text-7xl">
                  FIND YOUR
                  <br />
                  PEOPLE.
                  <br />
                  <span className="text-[#D8A45D]">FIND YOUR PLACE.</span>
                </h2>
              </div>

              <div className="max-w-lg space-y-5 text-base leading-7 text-black/70 sm:text-lg">
                <p>
                  Local Honey is a place for people who care about their work,
                  value the people around them, and want to keep growing.
                </p>

                <p>
                  Whether you're behind the chair, learning your craft, or
                  helping guests feel at home, there's more than one way to
                  contribute to a great salon experience.
                </p>

                <p>
                  Curious about joining us? Tell us a little about yourself and
                  what you'd like to bring to the team.
                </p>
              </div>

              <a
                href={applicationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-sm"
              >
                Let's start a conversation
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="mb-5 text-xs uppercase tracking-[0.22em] text-black/55">
              What we believe in
            </p>

            <h2 className="text-4xl font-medium uppercase leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              GOOD PEOPLE.
              <br />
              <span className="text-[#D8A45D]">GOOD ENERGY.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-black/65 sm:text-lg">
              Creativity, community, and confidence are central to the Local
              Honey spirit. They shape how we approach our craft and how we show
              up for one another.
            </p>
          </div>

          <div className="grid gap-0 border-t border-black/20 md:grid-cols-3 md:divide-x md:divide-black/20">
            {values.map((value) => (
              <article
                key={value.number}
                className="border-b border-black/20 py-8 md:border-b-0 md:px-7 md:py-10 first:md:pl-0 last:md:pr-0"
              >
                <span className="text-sm text-[#A77736]">{value.number}</span>

                <h3 className="mt-8 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
                  {value.title}
                </h3>

                <p className="mt-4 max-w-sm text-base leading-7 text-black/65">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section
        id="opportunities"
        className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.22em] text-black/55">
                Find your path
              </p>

              <h2 className="text-4xl font-medium uppercase leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                WHERE DO
                <br />
                YOU FIT IN?
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-black/65 sm:text-lg">
              We're always interested in hearing from people curious about Local
              Honey. Explore the different ways you could join us.
            </p>
          </div>

          <div className="border-t border-black/20">
            {opportunities.map((opportunity) => (
              <article
                key={opportunity.number}
                className="grid gap-4 border-b border-black/20 py-8 sm:py-10 md:grid-cols-[70px_0.9fr_1.1fr_auto] md:items-start md:gap-8"
              >
                <span className="text-sm text-[#A77736]">
                  {opportunity.number}
                </span>

                <h3 className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
                  {opportunity.title}
                </h3>

                <p className="max-w-lg text-base leading-7 text-black/65">
                  {opportunity.description}
                </p>

                <a
                  href={applicationUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Apply or enquire about ${opportunity.title}`}
                  className="inline-flex w-fit items-center gap-2 border-b border-black/40 pb-1 text-sm transition hover:border-black"
                >
                  Get in touch
                  <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>

          <p className="mt-5 text-sm leading-6 text-black/55">
            These are areas Local Honey says it welcomes interest in; specific
            openings and availability should be confirmed with the salon.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-[#E9E4DA] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-2 md:items-center lg:gap-20">
          <div className="overflow-hidden">
            <img
              src={educationImage}
              alt="Hair professionals learning and sharing their craft"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="max-w-xl">
            <p className="mb-5 text-xs uppercase tracking-[0.22em] text-black/55">
              Keep growing
            </p>

            <h2 className="text-4xl font-medium uppercase leading-[1.02] tracking-[-0.06em] sm:text-6xl">
              YOUR CRAFT
              <br />
              NEVER STANDS STILL.
            </h2>

            <p className="mt-7 text-base leading-7 text-black/70 sm:text-lg">
              Learning is an ongoing part of hairdressing. Explore Local Honey's
              education programs to learn more about its approach to developing
              skills and supporting growth in the industry.
            </p>

            <Link
              to="/education"
              className="mt-8 inline-flex items-center gap-3 border-b border-black pb-2 text-sm"
            >
              Explore education
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#111111] px-5 py-20 text-[#F5F2EC] sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-6 text-xs uppercase tracking-[0.22em] text-white/55">
            Your next chapter
          </p>

          <h2 className="max-w-5xl text-5xl font-medium uppercase leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-9xl">
            LET'S MAKE
            <br />
            SOMETHING
            <br />
            <span className="text-[#D8A45D]">HAPPEN.</span>
          </h2>

          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/25 pt-6 sm:flex-row sm:items-end">
            <p className="max-w-md text-base leading-7 text-white/65 sm:text-lg">
              Have questions or want to learn more about joining Local Honey?
              Start a conversation with the team.
            </p>

            <a
              href={applicationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-4 bg-[#F5F2EC] px-6 py-4 text-sm text-black transition hover:bg-[#D8A45D]"
            >
              Visit the careers page
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="mailto:careers@localhoneyhair.com"
              className="transition hover:text-white"
            >
              careers@localhoneyhair.com
            </a>

            <a href="tel:+16159151354" className="transition hover:text-white">
              615-915-1354
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
