import heroImage from "../assets/images/LHscanscolored-58.jpg";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-[#111111]">
      <div className="mx-auto min-h-[calc(100vh-6rem)] max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-12 py-12 lg:grid-cols-[1fr_0.75fr] lg:gap-20 lg:py-16">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            <p className="mb-7 text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              Atlanta · Nashville
            </p>

            <h1 className="text-[clamp(5rem,10vw,9rem)] font-bold leading-[0.78] tracking-[-0.075em] text-[#F5F2EC]">
              WE
              <br />
              DO
              <br />
              HAIR.
            </h1>

            <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-center">
              <p className="max-w-[280px] text-sm leading-6 text-white/60 md:text-base">
                Creativity. Community. Confidence.
                <br />
                Come as you are.
              </p>

              <a
                href="#book"
                className="group flex w-fit items-center gap-5 bg-[#F5F2EC] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#111111] transition-all duration-300 hover:bg-white"
              >
                Book an Appointment
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col lg:items-end">
            <div className="w-full max-w-[500px]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Local Honey Hair"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-white/35">
                <span>Local Honey Hair</span>
                <span>01 / 04</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10 lg:px-14">
          <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
            You are OK
          </span>

          <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
            Scroll to explore ↓
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
