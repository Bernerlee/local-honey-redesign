import stylistOne from "../assets/images/image-asset5.png";
import stylistTwo from "../assets/images/image-asset10.png";
import stylistThree from "../assets/images/image-asset11.png";

const stylists = [
  {
    name: "Local Honey",
    role: "Hair Stylist",
    image: stylistOne,
  },
  {
    name: "Local Honey",
    role: "Hair Stylist",
    image: stylistTwo,
  },
  {
    name: "Local Honey",
    role: "Hair Stylist",
    image: stylistThree,
  },
];

const StylistsSection = () => {
  return (
    <section className="bg-[#F5F2EC] text-[#111111]">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#111111]/45">
              The People
            </p>

            <h2 className="text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.85] tracking-[-0.065em]">
              MEET THE
              <br />
              STYLISTS.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#111111]/60 md:text-base">
            Different perspectives. Different techniques. One shared belief:
            your hair should feel like you.
          </p>
        </div>

        {/* Stylists */}
        <div className="grid gap-6 md:grid-cols-3">
          {stylists.map((stylist, index) => (
            <article key={index} className="group">
              <a href="/stylists" className="block">
                <div className="aspect-[3/4] overflow-hidden bg-[#dedbd4]">
                  <img
                    src={stylist.image}
                    alt={`${stylist.name} - Local Honey stylist`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between border-t border-[#111111]/15 pt-4">
                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.02em]">
                      {stylist.name}
                    </h3>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#111111]/45">
                      {stylist.role}
                    </p>
                  </div>

                  <span className="text-lg text-[#111111]/40 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 border-t border-[#111111]/15 pt-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <p className="text-sm text-[#111111]/50">
              Find the stylist who feels right for you.
            </p>

            <a
              href="/stylists"
              className="group inline-flex w-fit items-center gap-5 bg-[#111111] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F2EC] transition-colors duration-300 hover:bg-[#333333]"
            >
              Meet the Full Team
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StylistsSection;
