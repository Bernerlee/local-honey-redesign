import { Link } from "react-router-dom";

const policies = [
  {
    number: "01",
    title: "Retail Purchase Policy",
    content: (
      <p>
        If you're dissatisfied with a product purchase, you may return it within
        14 days for an exchange or store credit. Cash refunds are not provided
        for retail returns.
      </p>
    ),
  },
  {
    number: "02",
    title: "Service Satisfaction",
    content: (
      <>
        <p>
          If you're not satisfied with your service, Local Honey offers
          complimentary adjustments.
        </p>

        <p className="mt-5">
          To qualify, contact the salon within 10 days of your original service.
          The adjustment will be scheduled with the stylist who performed your
          original service.
        </p>

        <p className="mt-5">Service refunds are not provided.</p>
      </>
    ),
  },
  {
    number: "03",
    title: "Pricing",
    content: (
      <>
        <p>
          Service prices are shown at base levels and may vary depending on your
          stylist.
        </p>

        <p className="mt-5">
          A 12% service charge is applied to all services and is not reflected
          in the starting prices.
        </p>

        <p className="mt-5">
          If you need a more specific estimate, you can request a pricing
          breakdown during your consultation or contact the front desk at your
          location.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Cancellations & No Shows",
    content: (
      <>
        <p>A valid credit card is required to reserve all appointments.</p>

        <p className="mt-5">
          Cancellations and rescheduling must be made by calling the salon
          during business hours. Your cancellation is only considered complete
          once it has been confirmed by a front desk coordinator or manager.
        </p>

        <div className="mt-8 space-y-4">
          <div className="border-l border-[#111111]/20 pl-5">
            <p className="font-medium">48–24 hours before your appointment</p>

            <p className="mt-1 text-[#111111]/55">
              50% of the scheduled service will be charged.
            </p>
          </div>

          <div className="border-l border-[#111111]/20 pl-5">
            <p className="font-medium">Less than 24 hours</p>

            <p className="mt-1 text-[#111111]/55">
              100% of the scheduled service will be charged, including same-day
              cancellations and reschedules.
            </p>
          </div>

          <div className="border-l border-[#111111]/20 pl-5">
            <p className="font-medium">No-show</p>

            <p className="mt-1 text-[#111111]/55">
              100% of the scheduled service will be charged.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    number: "05",
    title: "Late Arrivals",
    content: (
      <p>
        If you arrive more than 15 minutes late, Local Honey may be unable to
        accommodate your scheduled service. If the appointment cannot be
        completed because of the late arrival, it will be treated as a late
        cancellation and the applicable cancellation fee will apply.
      </p>
    ),
  },
];

const Policies = () => {
  return (
    <main className="bg-[#F5F2EC] text-[#111111]">
      {/* Hero */}
      <section className="mx-auto max-w-[1600px] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20 lg:px-14 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#111111]/45">
              Local Honey Hair
            </p>

            <h1 className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-bold leading-[0.8] tracking-[-0.075em]">
              GOOD TO
              <br />
              KNOW.
            </h1>
          </div>

          <div className="max-w-md">
            <p className="text-base leading-7 text-[#111111]/60 md:text-lg md:leading-8">
              A few things to know before your visit. Our policies help us
              create a great experience for our guests and our team.
            </p>
          </div>
        </div>
      </section>

      {/* Policy introduction */}
      <section className="bg-[#111111] text-[#F5F2EC]">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20 lg:px-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-2xl text-sm leading-7 text-white/55 md:text-base">
              Please take a moment to review our policies before booking. If you
              have questions about an appointment or service, our team is always
              happy to help.
            </p>

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
              Before Your Visit
            </span>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-14 lg:py-36">
        <div className="border-t border-[#111111]/15">
          {policies.map((policy) => (
            <article
              key={policy.number}
              className="grid gap-8 border-b border-[#111111]/15 py-10 md:py-14 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16"
            >
              {/* Number + title */}
              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#111111]/35">
                  {policy.number}
                </span>

                <h2 className="mt-4 max-w-sm text-3xl font-medium leading-[0.95] tracking-[-0.04em] md:text-4xl">
                  {policy.title}
                </h2>
              </div>

              {/* Content */}
              <div className="max-w-3xl text-sm leading-7 text-[#111111]/60 md:text-base md:leading-8">
                {policy.content}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Questions */}
      <section className="bg-[#D8A45D] text-[#111111]">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#111111]/50">
                Still Have Questions?
              </p>

              <h2 className="mt-6 max-w-4xl text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.82] tracking-[-0.07em]">
                WE'RE HERE
                <br />
                TO HELP.
              </h2>
            </div>

            <div>
              <p className="max-w-md text-sm leading-7 text-[#111111]/60 md:text-base">
                If you're unsure about a service, pricing, cancellation, or
                anything else before your appointment, reach out to the salon
                directly.
              </p>

              <Link
                to="/locations"
                className="group mt-8 inline-flex items-center gap-5 bg-[#111111] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F2EC] transition-colors duration-300 hover:bg-[#333333]"
              >
                Find a Location
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Policies;
