import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import educationHero from "../assets/images/education/edu.png";
import educationClass from "../assets/images/education/Education.png";
import educationApply from "../assets/images/education/edu-apply.png";

const apprenticeshipHighlights = [
  {
    number: "01",
    title: "A comprehensive curriculum",
    description:
      "An 8–12 month program focused on styling, cutting, and color. Begin with styling fundamentals, then progress through cutting or color before completing both tracks.",
  },
  {
    number: "02",
    title: "Hands-on learning",
    description:
      "Classes take place every Monday and Tuesday, with live-model practice helping apprentices develop their skills and meet program requirements.",
  },
  {
    number: "03",
    title: "Experience on the salon floor",
    description:
      "Work alongside experienced stylists, learn at your own pace, and build confidence working in a professional salon environment.",
  },
  {
    number: "04",
    title: "Learn from our educators",
    description:
      "Learn from Local Honey team members who have completed the salon's Teacher Training Program.",
  },
  {
    number: "05",
    title: "Grow beyond the fundamentals",
    description:
      "Explore editorial photoshoots, advanced classes, and monthly education sessions as you develop your craft.",
  },
];

export default function Education() {
  return (
    <main className="overflow-hidden bg-[#F5F2EC] text-[#111111]">
      {/* HERO */}
      <section className="px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-8 text-xs uppercase tracking-[0.25em] opacity-50">
            Local Honey Hair / Education
          </p>

          <h1 className="max-w-6xl text-[15vw] font-medium leading-[0.82] tracking-[-0.075em] md:text-[11vw]">
            NEVER
            <br />
            STOP
            <br />
            LEARNING.
          </h1>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-2xl text-xl leading-8 md:text-2xl md:leading-9">
              Education is at the heart of what we do. We believe in sharing
              knowledge, developing talent, and helping hairdressers become more
              confident in their craft.
            </p>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="#apprenticeship"
                className="inline-flex items-center gap-3 border border-black px-5 py-4 text-xs uppercase tracking-[0.16em] transition-colors hover:bg-black hover:text-[#F5F2EC]"
              >
                Apprenticeship
                <ArrowDownRight size={16} />
              </a>

              <a
                href="#advanced-education"
                className="inline-flex items-center gap-3 border border-black/20 px-5 py-4 text-xs uppercase tracking-[0.16em] transition-colors hover:border-black"
              >
                Advanced Education
                <ArrowDownRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION VALUES */}
      <section className="border-y border-black/15">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Creativity",
              description:
                "Stay curious, experiment, and discover your own approach to the craft.",
            },
            {
              number: "02",
              title: "Community",
              description:
                "Learn alongside artists who share knowledge and support each other's growth.",
            },
            {
              number: "03",
              title: "Confidence",
              description:
                "Build the technical skills and experience to move forward with purpose.",
            },
          ].map((value) => (
            <article
              key={value.title}
              className="border-b border-black/15 px-6 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-10 md:py-12 md:last:border-r-0"
            >
              <span className="mb-10 block text-xs tracking-[0.2em] opacity-45">
                {value.number}
              </span>

              <h2 className="mb-4 text-3xl font-medium tracking-tight md:text-4xl">
                {value.title}
              </h2>

              <p className="max-w-sm text-sm leading-6 opacity-65">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* APPRENTICESHIP INTRO */}
      <section
        id="apprenticeship"
        className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.22em] opacity-50">
                01 / Start your journey
              </p>

              <h2 className="max-w-4xl text-6xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">
                THE
                <br />
                APPRENTICE
                <br />
                PROGRAM.
              </h2>
            </div>

            <p className="max-w-lg text-lg leading-8 opacity-70 md:justify-self-end">
              A learning experience designed to help newly licensed
              professionals develop the skills, knowledge, and confidence to
              become professional stylists.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="aspect-[4/5] overflow-hidden bg-[#E8E2D9] lg:aspect-auto lg:min-h-[620px]">
              <img
                src={educationHero}
                alt="A stylist working closely with a model during a hair session"
                className="h-full w-full object-cover object-center grayscale transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-col justify-between border-t border-black/20 lg:border-t-0">
              <div className="py-8 lg:py-0">
                <p className="mb-6 text-xs uppercase tracking-[0.2em] opacity-50">
                  The Local Honey difference
                </p>

                <h3 className="max-w-xl text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Great stylists are made through practice, guidance, and
                  curiosity.
                </h3>

                <p className="mt-6 max-w-xl text-base leading-7 opacity-65">
                  Start with the fundamentals, gain experience with real clients
                  and models, and learn from a team committed to developing the
                  next generation of hair artists.
                </p>
              </div>

              <div className="mt-8 divide-y divide-black/15 border-t border-black/15">
                {apprenticeshipHighlights.map((item) => (
                  <article
                    key={item.number}
                    className="grid gap-3 py-6 sm:grid-cols-[48px_1fr]"
                  >
                    <span className="text-xs tracking-[0.15em] opacity-45">
                      {item.number}
                    </span>

                    <div>
                      <h4 className="mb-2 text-lg font-medium">{item.title}</h4>

                      <p className="max-w-xl text-sm leading-6 opacity-65">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <a
                href="https://localhoneyhair.com/apprentice"
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-between border border-black bg-black px-6 py-5 text-xs uppercase tracking-[0.18em] text-[#F5F2EC] transition-colors hover:bg-transparent hover:text-black"
              >
                Explore the Apprenticeship
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANCED EDUCATION */}
      <section
        id="advanced-education"
        className="scroll-mt-20 bg-[#111111] px-6 py-24 text-[#F5F2EC] md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.22em] opacity-50">
                02 / Keep evolving
              </p>

              <h2 className="max-w-5xl text-6xl font-medium leading-[0.88] tracking-[-0.06em] md:text-8xl">
                ADVANCED
                <br />
                EDUCATION.
              </h2>
            </div>

            <p className="max-w-lg text-lg leading-8 opacity-65 md:justify-self-end">
              Great hairdressing is a lifelong practice. Keep learning, exchange
              ideas, and discover new perspectives with our team and visiting
              artists.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="aspect-[4/3] overflow-hidden bg-white/10">
              <img
                src={educationClass}
                alt="Hair professionals learning and practicing techniques in a salon class"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <div className="lg:pl-8">
              <p className="mb-8 text-xs uppercase tracking-[0.2em] opacity-50">
                Learn together. Grow together.
              </p>

              <h3 className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                A space for artists to share what they know and learn what’s
                next.
              </h3>

              <p className="mt-6 text-base leading-7 opacity-65">
                Our Advanced Education classes open the doors to hair
                professionals and guests from across the community. Classes are
                generally led by Local Honey team members and may also feature
                visiting artists from around the world.
              </p>

              <div className="mt-8 grid grid-cols-2 border-y border-white/20">
                <div className="py-6 pr-4">
                  <span className="mb-3 block text-xs uppercase tracking-[0.16em] opacity-50">
                    Who it's for
                  </span>

                  <p className="text-lg">The wider hair community</p>
                </div>

                <div className="border-l border-white/20 py-6 pl-5">
                  <span className="mb-3 block text-xs uppercase tracking-[0.16em] opacity-50">
                    Cost
                  </span>

                  <p className="text-lg">Generally free</p>
                </div>
              </div>

              <a
                href="https://localhoneyhair.com/education"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-between border border-[#F5F2EC] px-6 py-5 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[#F5F2EC] hover:text-black"
              >
                Discover Advanced Classes
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION CTA */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.22em] opacity-50">
              Your next chapter starts here
            </p>

            <h2 className="max-w-4xl text-6xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">
              INVEST IN
              <br />
              YOUR CRAFT.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 opacity-65">
              Whether you're beginning your career or ready to take your skills
              further, keep making room for what you can learn next.
            </p>
          </div>

          <div className="relative overflow-hidden bg-[#E8E2D9]">
            <img
              src={educationApply}
              alt="A Local Honey educator sharing hair techniques"
              className="aspect-square w-full object-cover grayscale"
            />

            <a
              href="https://localhoneyhair.com/apprentice"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-x-4 bottom-4 flex items-center justify-between bg-[#F5F2EC] px-5 py-5 text-xs uppercase tracking-[0.16em] transition-colors hover:bg-[#D8A45D] sm:inset-x-6 sm:bottom-6"
            >
              Take the First Step
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL BRAND STATEMENT */}
      <section className="border-t border-black/15 px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="text-2xl font-medium tracking-tight md:text-4xl">
            Creativity. Community. Confidence.
          </p>

          <Link
            to="/stylists"
            className="inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-50"
          >
            Meet Our Artists
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
