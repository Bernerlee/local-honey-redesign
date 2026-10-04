const reviews = [
  {
    quote:
      "Gray gave me the best shape and cut of my life. She is incredibly detailed, and I'm so glad I found her!",
    name: "Kara Mackenzie",
  },
  {
    quote:
      "Ash transformed my hair, gave me an easy routine to follow, and made me feel so confident and in love with my curls.",
    name: "Sarah H",
  },
  {
    quote:
      "Exceptional, professional, and fun. Ash listened to my ideas, was incredibly helpful, and gave me a wonderful haircut.",
    name: "Charlotte Dunn",
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-[#111111] text-[#F5F2EC]">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
              From Our Guests
            </p>

            <h2 className="text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.85] tracking-[-0.065em]">
              GOOD HAIR.
              <br />
              GOOD PEOPLE.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/50 md:text-base">
            The best part of what we do is seeing our guests leave feeling
            confident, comfortable, and completely themselves.
          </p>
        </div>

        {/* Reviews */}
        <div className="mt-20 grid gap-0 border-t border-white/15 md:mt-28 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="border-b border-white/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-12 first:md:pl-0 last:md:border-r-0 last:md:pr-0"
            >
              {/* Number */}
              <div className="mb-12 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  0{index + 1}
                </span>

                <span className="text-sm tracking-[0.2em] text-white/40">
                  ★★★★★
                </span>
              </div>

              {/* Quote */}
              <blockquote className="max-w-md text-xl leading-8 tracking-[-0.02em] md:text-2xl md:leading-9">
                “{review.quote}”
              </blockquote>

              {/* Author */}
              <div className="mt-10">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
                  {review.name}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-[9px] uppercase tracking-[0.22em] text-white/30">
            Real experiences from the Local Honey community
          </p>

          <a
            href="/reviews"
            className="group inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.14em]"
          >
            Read More Reviews
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
