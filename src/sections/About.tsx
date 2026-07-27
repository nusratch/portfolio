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
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
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
        className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#FF77B7]/20 blur-[130px]"
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
        className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#55C8FF]/15 blur-[130px]"
      />

      <Container>
        <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
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
            <motion.div
              whileHover={{
                y: -6,
                scale: 1.015,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
              className="relative"
            >
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-full border border-white/30 bg-white/10" />

              <div className="absolute -left-5 -top-5 h-24 w-24 rounded-tl-full border-l-2 border-t-2 border-[#FFB4D5]/80" />

              <div className="absolute -bottom-5 -right-5 z-20 h-24 w-24 rounded-br-full border-b-2 border-r-2 border-cyan-200/70" />

              <div className="relative h-[270px] w-[270px] overflow-hidden rounded-full border-[6px] border-white/90 bg-white shadow-[0_30px_70px_rgba(34,15,90,0.30)] sm:h-[310px] sm:w-[310px]">
                <Image
                  src="/images/profile.jpeg"
                  alt="Nusrat Chowdhury"
                  fill
                  sizes="(max-width: 640px) 270px, 310px"
                  className="object-cover object-center"
                  priority
                />
              </div>

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-8 top-10 h-3 w-3 rounded-full bg-[#FFD0E4]"
              />

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-8 bottom-16 h-2.5 w-2.5 rounded-full bg-cyan-200"
              />
            </motion.div>
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
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2.5 w-2.5 rounded-full bg-cyan-200"
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