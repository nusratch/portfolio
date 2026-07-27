"use client";

import { motion } from "framer-motion";
import Container from "@/src/components/Container";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#7047E8] py-24 text-white sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        animate={{
          x: [-30, 50, -30],
          y: [-20, 40, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#FF77B7]/25 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [30, -50, 30],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#55C8FF]/20 blur-[130px]"
      />

      <Container>
        <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.45, 0.8, 0.45],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-5 rounded-full bg-cyan-300/30 blur-2xl"
              />

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(103,232,249,0.45)",
                    "0 0 38px rgba(103,232,249,0.9)",
                    "0 0 15px rgba(103,232,249,0.45)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-[250px] w-[250px] rounded-full border-[3px] border-cyan-200/90 p-[7px] sm:h-[290px] sm:w-[290px]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Nusrat Chowdhury"
                    fill
                    sizes="(max-width: 640px) 250px, 290px"
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute -inset-4 rounded-full border border-dashed border-white/30"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-xl text-center lg:text-left"
          >
            <div className="mb-7 flex items-center justify-center gap-4 lg:justify-start">
              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(103,232,249,0)",
                    "0 0 12px rgba(103,232,249,0.9)",
                    "0 0 0px rgba(103,232,249,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2.5 w-2.5 border-2 border-cyan-200"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-100">
                About Me
              </p>
            </div>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Nusrat, behind the pixels
            </h2>

            <p className="mt-7 text-base leading-8 text-white/75 sm:text-lg">
              I&apos;m Nusrat, a developer who enjoys turning ideas into
              thoughtful digital experiences. I work across frontend and
              backend development, with a strong interest in clean interfaces,
              responsive design, and smooth interactions.
            </p>

            <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">
              I enjoy learning, experimenting, and building products that feel
              simple, useful, and enjoyable to use.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["Frontend", "Full-Stack", "UI"].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.35 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -3,
                    backgroundColor: "rgba(255,255,255,0.18)",
                  }}
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur-md"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}