import heroImage from "../assets/images/LHscanscolored-58.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111111]">
      <div className="mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pb-16 pt-32 md:px-10 lg:px-14 lg:pt-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          {/* Hero Content */}
          <div className="relative z-10">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
              Atlanta · Nashville
            </p>

            <h1 className="max-w-3xl text-[clamp(4rem,10vw,9.5rem)] font-bold leading-[0.82] tracking-[-0.07em] text-[#F5F2EC]">
              WE
              <br />
              DO
              <br />
              HAIR.
            </h1>

            <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-center">
              <p className="max-w-sm text-base leading-relaxed text-white/70">
                Creativity. Community. Confidence.
                <br />
                Come as you are.
              </p>

              <a
                href="#book"
                className="group flex w-fit items-center gap-4 bg-[#F5F2EC] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#111111] transition-all duration-300 hover:bg-white"
              >
                Book an Appointment
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={heroImage}
                alt="Local Honey Hair stylist"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Small editorial label */}
            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/40">
              <span>Local Honey Hair</span>
              <span>Est. Atlanta / Nashville</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/40 md:flex lg:left-14">
        <span className="h-px w-10 bg-white/30" />
        Scroll to explore
      </div>
    </section>
  );
};

export default Hero;
