const NewGuestSection = () => {
  return (
    <section className="bg-[#D8A45D] text-[#111111]">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto max-w-6xl text-center">
          {/* Label */}
          <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-[#111111]/55">
            New Guests
          </p>

          {/* Main heading */}
          <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.82] tracking-[-0.07em]">
            NEW TO
            <br />
            LOCAL HONEY?
          </h2>

          {/* Supporting copy */}
          <p className="mx-auto mt-10 max-w-xl text-base leading-7 text-[#111111]/65 md:text-lg md:leading-8">
            Welcome. Whether you're looking for a fresh cut, a complete color
            transformation, or simply a stylist who gets you, we're ready to
            meet you.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/new-guests"
              className="group inline-flex items-center gap-5 bg-[#111111] px-8 py-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5F2EC] transition-colors duration-300 hover:bg-[#333333]"
            >
              I'm a New Guest
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-20 border-t border-[#111111]/20 pt-6 md:mt-28">
          <div className="flex flex-col justify-between gap-4 text-[9px] uppercase tracking-[0.22em] text-[#111111]/45 sm:flex-row">
            <span>Come as you are</span>
            <span>Atlanta · Nashville</span>
            <span>Local Honey Hair</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewGuestSection;
