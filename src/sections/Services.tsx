"use client";

import { motion } from "framer-motion";
import Container from "@/src/components/Container";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Beautiful responsive interfaces built with React, Next.js and Tailwind CSS.",
  },
  {
    number: "02",
    title: "Full-Stack Development",
    description:
      "Scalable web applications powered by Node.js, Express.js and MongoDB.",
  },
  {
    number: "03",
    title: "Database Architecture",
    description:
      "Well-structured databases designed for performance and long-term growth.",
  },
  {
    number: "04",
    title: "Performance Optimization",
    description:
      "Fast loading experiences, smooth interactions and modern best practices.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#ad1313] py-24 sm:py-28 lg:py-32"
    >
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -35, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-white/20 blur-[90px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full bg-[#B9ECFF]/35 blur-[110px]"
      />

      <motion.div
        animate={{
          x: ["-15%", "115%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute top-[16%] h-20 w-56 rounded-full bg-white/15 blur-xl"
      />

      <motion.div
        animate={{
          x: ["110%", "-30%"],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute top-[65%] h-28 w-72 rounded-full bg-white/10 blur-2xl"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[7%] top-[30%] h-24 w-24 rounded-full border border-white/30"
      />

      <motion.div
        animate={{
          y: [0, 35, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[7%] top-[20%] h-40 w-40 rounded-full border border-white/25"
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[8%] left-[15%] h-14 w-14 rotate-12 rounded-2xl border border-white/30"
      />

      <Container>
        <div className="relative z-10">
         

          <div className="mx-auto max-w-[1150px]">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                whileHover={{
                  scale: 1.015,
                  x: 8,
                }}
                className="group relative border-t border-white/30 py-9 sm:py-10 lg:py-12"
              >
                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  whileInView={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="absolute left-0 top-0 h-px bg-white/40"
                />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-[90px_1fr] sm:gap-8 lg:grid-cols-[110px_1fr_1fr] lg:items-center lg:gap-12">
                  <motion.div
                    whileHover={{
                      rotate: -8,
                      scale: 1.1,
                    }}
                    className="text-4xl font-light text-white/40 lg:text-5xl"
                  >
                    {service.number}
                  </motion.div>

                  <h3 className="text-2xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>

                  <p className="max-w-[450px] text-base leading-8 text-white/70 transition-colors duration-300 group-hover:text-white sm:col-start-2 lg:col-start-auto lg:text-lg">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="border-t border-white/30" />
          </div>

         
        </div>
      </Container>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-56 left-1/2 h-[450px] w-[750px] -translate-x-1/2 rounded-full bg-white blur-[120px]"
      />
    </section>
  );
}