const BookingCTA = () => {
  return (
    <section className="bg-[#F5F2EC] text-[#111111]">
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-6xl text-center">
          {/* Label */}
          <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-[#111111]/45">
            Your Chair Is Waiting
          </p>

          {/* Heading */}
          <h2 className="text-[clamp(4rem,9vw,9rem)] font-bold leading-[0.8] tracking-[-0.075em]">
            READY FOR
            <br />
            YOUR NEXT
            <br />
            HAIR DAY?
          </h2>

          {/* Supporting copy */}
          <p className="mx-auto mt-10 max-w-lg text-base leading-7 text-[#111111]/60 md:text-lg md:leading-8">
            Find your stylist, choose your service, and let's make something
            that feels like you.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/book"
              className="group inline-flex items-center gap-5 bg-[#111111] px-8 py-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5F2EC] transition-colors duration-300 hover:bg-[#333333]"
            >
              Book an Appointment
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/locations"
              className="inline-flex items-center gap-4 border border-[#111111]/20 px-8 py-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#111111] transition-colors duration-300 hover:bg-[#111111] hover:text-[#F5F2EC]"
            >
              Find a Location
            </a>
          </div>
        </div>

        {/* Bottom details */}
        <div className="mt-24 border-t border-[#111111]/15 pt-6 md:mt-32">
          <div className="flex flex-col justify-between gap-4 text-[9px] uppercase tracking-[0.22em] text-[#111111]/35 sm:flex-row">
            <span>Atlanta</span>
            <span>Nashville</span>
            <span>Come as you are</span>
            <span>#YOUAREOK</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
