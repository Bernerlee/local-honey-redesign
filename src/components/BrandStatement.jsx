const BrandStatement = () => {
  return (
    <section className="bg-[#F5F2EC] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
      <div className="mx-auto max-w-[1400px]">
        {/* Small label */}
        <div className="mb-16 flex items-center gap-4 md:mb-20">
          <span className="h-px w-10 bg-[#111111]/30" />

          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#111111]/50">
            The Local Honey Way
          </span>
        </div>

        {/* Main statement */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
          <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.9] tracking-[-0.06em] text-[#111111]">
            CREATIVITY.
            <br />
            COMMUNITY.
            <br />
            CONFIDENCE.
          </h2>

          <div className="flex items-end">
            <p className="max-w-md text-base leading-7 text-[#111111]/65 md:text-lg md:leading-8">
              We believe hair is a form of self-expression. A place to
              experiment, connect, and feel completely yourself.
              <br />
              <br />
              Come as you are. Leave feeling like you.
            </p>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 border-t border-[#111111]/15 pt-6 md:mt-28">
          <div className="flex flex-col justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-[#111111]/40 sm:flex-row">
            <span>#YOUAREOK</span>
            <span>Atlanta · Nashville</span>
            <span>Local Honey Hair</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
