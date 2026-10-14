import { motion, useReducedMotion } from "motion/react";

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

const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const StylistsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="bg-[#F5F2EC] text-[#111111]">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 lg:flex-row lg:items-end">
          <motion.div
            variants={revealUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#111111]/45">
              The People
            </p>

            <h2 className="text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.85] tracking-[-0.065em]">
              MEET THE
              <br />
              STYLISTS.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-sm text-sm leading-7 text-[#111111]/60 md:text-base"
            variants={revealUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15 }}
          >
            Different perspectives. Different techniques. One shared belief:
            your hair should feel like you.
          </motion.p>
        </div>

        {/* Individually animated stylist cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {stylists.map((stylist, index) => (
            <motion.article
              key={index}
              className="group"
              custom={index}
              variants={cardVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <a href="/stylists" className="block">
                <div className="aspect-[3/4] overflow-hidden bg-[#dedbd4]">
                  <motion.img
                    src={stylist.image}
                    alt={`${stylist.name} - Local Honey stylist`}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                </div>

                <div className="mt-5 flex items-start justify-between border-t border-[#111111]/15 pt-4">
                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-65">
                      {stylist.name}
                    </h3>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#111111]/45">
                      {stylist.role}
                    </p>
                  </div>

                  <motion.span
                    className="text-lg text-[#111111]/40"
                    animate={{ x: 0 }}
                    whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                    transition={{ duration: 0.25 }}
                  >
                    →
                  </motion.span>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 border-t border-[#111111]/15 pt-8"
          variants={revealUp}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <p className="text-sm text-[#111111]/50">
              Find the stylist who feels right for you.
            </p>

            <a
              href="/stylists"
              className="group inline-flex w-fit items-center gap-5 bg-[#111111] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F2EC] transition-colors duration-300 hover:bg-[#333333]"
            >
              Meet the Full Team
              <motion.span
                animate={{ x: 0 }}
                whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                transition={{ duration: 0.25 }}
              >
                →
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StylistsSection;
