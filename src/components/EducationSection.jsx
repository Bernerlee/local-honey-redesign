import educationImage from "../assets/images/image-asset7.png";

const EducationSection = () => {
  return (
    <section className="bg-[#F5F2EC] text-[#111111]">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#111111]/45">
              Education
            </p>

            <h2 className="max-w-4xl text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.85] tracking-[-0.065em]">
              LEARN.
              <br />
              CREATE.
              <br />
              GROW.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#111111]/60 md:text-base">
            We believe great hair starts with great education. Local Honey is a
            place where stylists learn, grow, experiment, and share what they
            know.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-24">
          {/* Image */}
          <div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={educationImage}
                alt="Local Honey stylist working with a client"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="mt-4 flex justify-between text-[9px] uppercase tracking-[0.2em] text-[#111111]/35">
              <span>Knowledge / Craft / Community</span>
              <span>04</span>
            </div>
          </div>

          {/* Education links */}
          <div>
            <div className="border-t border-[#111111]/15">
              <a
                href="/education"
                className="group block border-b border-[#111111]/15 py-8 md:py-10"
              >
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#111111]/35">
                      01
                    </span>

                    <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                      Apprenticeship
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-6 text-[#111111]/50">
                      Learn the craft alongside experienced stylists and build
                      the foundation for a career behind the chair.
                    </p>
                  </div>

                  <span className="mt-1 text-xl text-[#111111]/35 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>

              <a
                href="/education"
                className="group block border-b border-[#111111]/15 py-8 md:py-10"
              >
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#111111]/35">
                      02
                    </span>

                    <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                      Advanced Education
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-6 text-[#111111]/50">
                      Keep learning through advanced techniques, shared
                      knowledge, and education within the Local Honey community.
                    </p>
                  </div>

                  <span className="mt-1 text-xl text-[#111111]/35 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-8">
              <a
                href="/education"
                className="group inline-flex items-center gap-5 bg-[#111111] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F2EC] transition-colors duration-300 hover:bg-[#333333]"
              >
                Explore Education
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

export default EducationSection;
