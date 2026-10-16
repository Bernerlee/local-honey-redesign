import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Jennifer Kato",
    image: "/images/reviews/jennifer-kato.png",
    source: "Google Review",
    quote:
      "Mira has been doing my hair for over 7+ years, and I truly wouldn’t trust anyone else with it. She always takes the time to understand what I want, talk me through what will work best for my hair, and make recommendations that keep me…",
  },
  {
    id: 2,
    name: "Camryn Lockhart",
    image: "/images/reviews/camryn-lockhart.png",
    source: "Google Review",
    quote:
      "After seeing friends get their hair done by Jaden for a couple years now and lots of telling myself I was going to make the switch to have Jaden do mine as well, it has finally happened and I could not be more pleased.",
  },
  {
    id: 3,
    name: "Charlotte Dunn",
    image: "/images/reviews/charlotte-dunn.png",
    source: "Google Review",
    quote:
      "Exceptional. Professional. Fun. I have no problem giving this salon an A+, five stars. The staff, very easy to work with, and so kind! My stylist, Ash, was welcoming, friendly, listened to my ideas, and was very helpful finding product for…",
  },
  {
    id: 4,
    name: "Lillian Russo",
    image: "/images/reviews/lillian-russo.png",
    source: "Google Review",
    quote:
      "This studio is great, but Alex is the BEST! Alex was the first curly hair stylist I'd seen where I finally felt like my curls were in good hands. She really takes the time to get to know your hair & texture, and is happy to work with you…",
  },
];

const Reviews = () => {
  return (
    <main className="bg-[#F5F2EC] text-[#111111]">
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32 lg:px-14 lg:pb-40 lg:pt-40">
          <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-[#111111]/45">
            The Local Honey experience
          </p>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h1 className="text-[clamp(4rem,11vw,10rem)] font-bold leading-[0.78] tracking-[-0.085em]">
              GOOD WORDS.
              <br />
              GREAT HAIR.
            </h1>

            <div className="max-w-md lg:justify-self-end">
              <p className="text-base leading-8 text-[#111111]/65 md:text-lg">
                The best part of what we do is helping people feel more like
                themselves. Here are a few words from Local Honey clients.
              </p>

              <a
                href="#client-reviews"
                className="mt-8 inline-flex items-center gap-4 border-b border-[#111111]/25 pb-3 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:border-[#D8A45D]"
              >
                Read their stories
                <ArrowDownRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-20 border-t border-[#111111]/15 pt-5 md:mt-28">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/45">
              Creativity. Community. Confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="client-reviews" className="bg-[#111111] text-[#F5F2EC]">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#F5F2EC]/45">
                Words from our clients
              </p>

              <h2 className="text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.85] tracking-[-0.065em]">
                THE GOOD
                <br />
                STUFF.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#F5F2EC]/60">
              Every head of hair is different. We love helping each person find
              what works for them.
            </p>
          </div>

          {/* Review cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="flex flex-col border border-[#F5F2EC]/20 p-6 md:p-8"
              >
                {/* Reviewer image and name */}
                <div className="mb-8 flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={`Profile of ${review.name}`}
                    className="h-16 w-16 shrink-0 rounded-full border border-[#F5F2EC]/20 object-cover"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div>
                    <p className="text-sm font-medium">{review.name}</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[#F5F2EC]/45">
                      {review.source}
                    </p>
                  </div>
                </div>

                {/* Review text */}
                <blockquote className="flex-1 text-lg leading-8 tracking-[-0.02em] md:text-xl">
                  “{review.quote}”
                </blockquote>

                <div className="mt-8 border-t border-[#F5F2EC]/20 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[#D8A45D]">
                    Shared with Local Honey
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#111111]/45">
            Your turn
          </p>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.82] tracking-[-0.075em]">
              YOUR GOOD
              <br />
              HAIR DAY
              <br />
              STARTS HERE.
            </h2>

            <div className="max-w-sm">
              <p className="mb-7 text-sm leading-7 text-[#111111]/60">
                Ready to find your stylist? Choose your location and let's get
                you booked.
              </p>

              <Link
                to="/book"
                className="group inline-flex items-center gap-5 bg-[#111111] px-7 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F2EC] transition-colors duration-300 hover:bg-[#333333]"
              >
                Book an Appointment
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <div className="mt-5">
                <Link
                  to="/locations"
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-[#111111]/60 transition-colors hover:text-[#111111]"
                >
                  Explore our locations
                  <ArrowDownRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
