import { Link } from "react-router-dom";

// Atlanta images
import atlanta1 from "../assets/images/atlanta-stylists/C1_ArtistInteract10571.jpg";
import atlanta2 from "../assets/images/atlanta-stylists/C1_LHportraits4141.jpg";
import atlanta3 from "../assets/images/atlanta-stylists/IMG_1787.jpg";
import atlanta4 from "../assets/images/atlanta-stylists/IMG_3944.jpg";
import atlanta5 from "../assets/images/atlanta-stylists/IMG_5691.jpg";
import atlanta6 from "../assets/images/atlanta-stylists/IMG_5713.JPG";
import atlanta7 from "../assets/images/atlanta-stylists/IMG_6042.jpg";
import atlanta8 from "../assets/images/atlanta-stylists/KAZIA.jpg";
import atlanta9 from "../assets/images/atlanta-stylists/Screenshot1.png";
import atlanta10 from "../assets/images/atlanta-stylists/Screenshot2.png";

// 8th Avenue images
import eighth1 from "../assets/images/8th-avenue-stylists/C!_LH+PORTS310875.jpg";
import eighth2 from "../assets/images/8th-avenue-stylists/C1_ArtistInteract10571.jpg";
import eighth3 from "../assets/images/8th-avenue-stylists/C1_LHCLASSS20268.jpg";
import eighth4 from "../assets/images/8th-avenue-stylists/C1_LHportraits12524.jpg";
import eighth5 from "../assets/images/8th-avenue-stylists/C1_LHportraits12846.jpg";
import eighth6 from "../assets/images/8th-avenue-stylists/C1_LHportraits16498.jpg";
import eighth7 from "../assets/images/8th-avenue-stylists/C1_LHportraits1677.jpg";
import eighth8 from "../assets/images/8th-avenue-stylists/C1_LHportraits16847.jpg";
import eighth9 from "../assets/images/8th-avenue-stylists/C1_LHportraits4150.jpg";
import eighth10 from "../assets/images/8th-avenue-stylists/C1_LHportraits6233.jpg";
import eighth11 from "../assets/images/8th-avenue-stylists/Screenshot+2024-11-18+at+1.02.43+PM.png";
import eighth12 from "../assets/images/8th-avenue-stylists/Screenshot+2025-02-28+at+4.39.23+PM.png";
import eighth13 from "../assets/images/8th-avenue-stylists/Screenshot+2025-02-28+at+4.39.43+PM.png";
import eighth14 from "../assets/images/8th-avenue-stylists/Screenshot+2025-03-02+at+11.45.35+AM.png";
import eighth15 from "../assets/images/8th-avenue-stylists/Screenshot+2025-08-04+at+10.11.23+AM.png";
import eighth16 from "../assets/images/8th-avenue-stylists/Screenshot+2025-12-26+at+9.56.11+AM.png";

const atlantaStylists = [
  { name: "Kazia Rosemond", image: atlanta1 },
  { name: "Rachel Grogan", image: atlanta2 },
  { name: "Rocky", image: atlanta3 },
  { name: "Morgan Hennum", image: atlanta4 },
  { name: "Ash Wylie", image: atlanta5 },
  { name: "Lo", image: atlanta6 },
  { name: "Ashleen Cree", image: atlanta7 },
  { name: "Alex Dobbs", image: atlanta8 },
  { name: "Sadie", image: atlanta9 },
  { name: "Taylor Stroud", image: atlanta10 },
];

const eighthAvenueStylists = [
  { name: "Dana Cooper", image: eighth1 },
  { name: "Rachel Grogan", image: eighth2 },
  { name: "Summer Hitchcock", image: eighth3 },
  { name: "Kayty Nochowicz", image: eighth4 },
  { name: "Chloe Grohman", image: eighth5 },
  { name: "Mayci Yates", image: eighth6 },
  { name: "Talia Vaughan", image: eighth7 },
  { name: "Emily Stroud", image: eighth8 },
  { name: "Sebastian Yates", image: eighth9 },
  { name: "Daniel Dalecke", image: eighth10 },
  { name: "Ash Allen", image: eighth11 },
  { name: "Jojo", image: eighth12 },
  { name: "Caroline Allen", image: eighth13 },
  { name: "Eliza Morrow", image: eighth14 },
  { name: "Corinna Vollmer", image: eighth15 },
  { name: "Kanden Dawkins", image: eighth16 },
];

function StylistCard({ stylist }) {
  return (
    <article className="group">
      <div className="overflow-hidden bg-[#e9e4dc] aspect-[4/5]">
        <img
          src={stylist.image}
          alt={stylist.name}
          className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex items-center justify-between border-b border-black/20 py-4">
        <h3 className="text-lg font-medium tracking-tight">{stylist.name}</h3>

        <span className="text-xs uppercase tracking-[0.18em] opacity-50">
          Stylist
        </span>
      </div>
    </article>
  );
}

function LocationHeader({ number, location, address }) {
  return (
    <div className="mb-12 grid gap-6 md:grid-cols-[120px_1fr_auto] md:items-end">
      <span className="text-xs uppercase tracking-[0.2em] opacity-50">
        {number}
      </span>

      <div>
        <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
          {location}
        </h2>
      </div>

      <p className="max-w-[220px] text-sm leading-6 opacity-60 md:text-right">
        {address}
      </p>
    </div>
  );
}

export default function Stylists() {
  return (
    <main className="bg-[#F5F2EC] text-[#111111]">
      {/* HERO */}
      <section className="px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-8 text-xs uppercase tracking-[0.25em] opacity-50">
            Local Honey Hair
          </p>

          <h1 className="max-w-6xl text-[16vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[12vw]">
            THE
            <br />
            PEOPLE.
          </h1>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-xl text-xl leading-8 md:text-2xl">
              Meet the people behind Local Honey. Independent artists,
              experienced stylists, and hair lovers who make the salon what it
              is.
            </p>

            <p className="text-sm uppercase tracking-[0.18em] opacity-50 md:text-right">
              Atlanta · Nashville
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION NAV */}
      <section className="border-y border-black/15">
        <div className="mx-auto flex max-w-[1400px] flex-wrap px-6 md:px-10">
          <a
            href="#atlanta"
            className="border-r border-black/15 px-5 py-5 text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-50 md:px-8"
          >
            Atlanta
          </a>

          <a
            href="#east-nashville"
            className="border-r border-black/15 px-5 py-5 text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-50 md:px-8"
          >
            East Nashville
          </a>

          <a
            href="#8th-avenue"
            className="px-5 py-5 text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-50 md:px-8"
          >
            8th Avenue
          </a>
        </div>
      </section>

      {/* ATLANTA */}
      <section
        id="atlanta"
        className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32"
      >
        <LocationHeader
          number="01"
          location="Atlanta"
          address={
            <>
              714 Moreland Ave SE
              <br />
              Suite A, Atlanta, GA 30316
            </>
          }
        />

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-14 lg:grid-cols-4">
          {atlantaStylists.map((stylist) => (
            <StylistCard key={stylist.name} stylist={stylist} />
          ))}
        </div>
      </section>

      {/* EAST NASHVILLE PLACEHOLDER */}
      <section
        id="east-nashville"
        className="bg-[#111111] px-6 py-24 text-[#F5F2EC] md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <span className="mb-8 block text-xs uppercase tracking-[0.2em] opacity-50">
                02
              </span>

              <h2 className="text-5xl font-medium tracking-[-0.04em] md:text-7xl">
                East
                <br />
                Nashville.
              </h2>
            </div>

            <div className="md:text-right">
              <p className="mb-8 text-sm leading-6 opacity-60">
                519 Gallatin Ave
                <br />
                Nashville, TN 37206
              </p>

              <p className="text-lg leading-7 opacity-80">
                Our East Nashville stylist collection is coming soon.
              </p>
            </div>
          </div>

          <div className="mt-20 border border-white/20 p-10 md:p-16">
            <p className="max-w-2xl text-2xl leading-9 md:text-4xl md:leading-[1.15]">
              More artists, more portraits, more Local Honey. We’ll add the East
              Nashville team here.
            </p>
          </div>
        </div>
      </section>

      {/* 8TH AVENUE */}
      <section
        id="8th-avenue"
        className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32"
      >
        <LocationHeader
          number="03"
          location="8th Avenue"
          address={
            <>
              2106 8th Avenue South
              <br />
              Nashville, TN 37204
            </>
          }
        />

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-14 lg:grid-cols-4">
          {eighthAvenueStylists.map((stylist) => (
            <StylistCard key={stylist.name} stylist={stylist} />
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-[#D8A45D] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-8 text-xs uppercase tracking-[0.2em]">
            Ready when you are
          </p>

          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="max-w-4xl text-6xl font-medium leading-[0.9] tracking-[-0.05em] md:text-8xl">
              FIND YOUR
              <br />
              STYLIST.
            </h2>

            <Link
              to="/book"
              className="inline-flex w-fit items-center border border-black px-7 py-4 text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:bg-black hover:text-[#F5F2EC]"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
