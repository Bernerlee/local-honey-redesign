import mainImage from "../assets/images/LHscanscolored-41-Edit+copy.jpg";
import portraitImage from "../assets/images/LHscanscolored-37-Edit+copymoresat.jpg";
import detailImage from "../assets/images/image-asset3.png";
import lifestyleImage from "../assets/images/image-asset6.png";

const EditorialSection = () => {
  return (
    <section className="bg-[#F5F2EC] text-[#111111]">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#111111]/45">
              The Honey Look
            </p>

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#111111]/40">
              02 / 04
            </span>
          </div>

          <h2 className="max-w-5xl text-[clamp(3rem,6.5vw,7rem)] font-bold leading-[0.88] tracking-[-0.065em]">
            HAIR IS
            <br />
            EXPRESSION.
          </h2>
        </div>

        {/* Editorial grid */}
        <div className="mt-20 grid gap-5 md:mt-28 md:grid-cols-12 md:gap-6">
          {/* Main image */}
          <div className="md:col-span-7">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={mainImage}
                alt="Local Honey editorial hairstyle"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="mt-4 flex justify-between text-[9px] uppercase tracking-[0.2em] text-[#111111]/40">
              <span>Color / Shape / Texture</span>
              <span>01</span>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-10 md:col-span-5 md:pt-24">
            {/* Detail image */}
            <div className="ml-auto w-[70%]">
              <div className="aspect-square overflow-hidden">
                <img
                  src={detailImage}
                  alt="Local Honey hair detail"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#111111]/40">
                Detail / 02
              </p>
            </div>

            {/* Portrait */}
            <div className="w-[82%]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={portraitImage}
                  alt="Local Honey editorial portrait"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#111111]/40">
                Perspective / 03
              </p>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-[#111111]/15 pt-8 md:mt-32">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-xl text-2xl leading-tight tracking-[-0.03em] md:text-3xl">
              There is no right way to wear your hair.
              <br />
              <span className="text-[#111111]/40">There is only your way.</span>
            </p>

            <div className="md:text-right">
              <p className="mb-4 text-[9px] uppercase tracking-[0.25em] text-[#111111]/40">
                See more of the work
              </p>

              <a
                href="/services"
                className="group inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.15em]"
              >
                Explore Local Honey
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Lifestyle image */}
        <div className="mt-20 md:mt-28">
          <div className="aspect-[16/7] overflow-hidden">
            <img
              src={lifestyleImage}
              alt="Local Honey salon"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
