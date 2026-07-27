"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Container from "@/src/components/Container";

const projects = [
   {
    title: "Online ebook Platform",
    shortTitle: "ebook",
    category: "Full-Stack Development",
    image: "/images/ebook.jpeg",
  },
  {
    title: "Luxury Fashion Platform",
    shortTitle: "Fashion",
    category: "Full-Stack Development",
    image: "/images/projects1.jpeg",
  },
  {
    title: "Modern Portfolio Experience",
    shortTitle: "Portfolio",
    category: "Full-Stack Development",
    image: "/images/projects2.jpeg",
  },
  {
    title: " Online Friendship Platform",
    shortTitle: "Friendship Platform",
    category: "Full-Stack Development",
    image: "/images/projects3.jpeg",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  return (
    <section
      id="projects"
      className="relative min-h-[900px] overflow-hidden bg-[#7857ff] py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#19f719] via-[#60e039] to-[#3e923b]" />

      <motion.div
        animate={{
          x: [0, 130, 0],
          y: [0, 70, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-10 h-[550px] w-[550px] rounded-full bg-[#38bdf8]/35 blur-[110px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -80, 0],
          scale: [1, 1.18, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[#ff74d4]/30 blur-[120px]"
      />

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-1/2 top-[48%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-1/2 top-[48%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[6%] top-[34%] h-28 w-28 rounded-[32px] border border-white/20"
      />

      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -20, 0],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[5%] top-[24%] h-44 w-44 rounded-full border border-white/20"
      />

      <Container>
        <div className="relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/55 sm:text-sm">
              Selected Work
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
              My Projects
            </h2>
          </motion.div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:mt-14">
            {projects.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setActiveProject(index)}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-6 ${
                  activeProject === index
                    ? "bg-white text-[#7047e8] shadow-[0_8px_30px_rgba(255,255,255,0.25)]"
                    : "border border-white/20 bg-white/10 text-white/70 backdrop-blur-md hover:bg-white/20 hover:text-white"
                }`}
              >
                {item.shortTitle}
              </motion.button>
            ))}
          </div>

          <div className="relative mx-auto mt-12 max-w-[1050px] sm:mt-14">
            <div className="pointer-events-none absolute -inset-10 rounded-[60px] bg-white/10 blur-[70px]" />

            <AnimatePresence mode="wait">
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.96,
                  rotateX: 4,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-[34px] border border-white/25 bg-white/15 p-3 shadow-[0_35px_100px_rgba(38,17,105,0.35)] backdrop-blur-xl sm:rounded-[44px] sm:p-5"
              >
                <div className="relative overflow-hidden rounded-[25px] sm:rounded-[34px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1400}
                    height={850}
                    priority
                    className="h-[300px] w-full object-cover sm:h-[440px] lg:h-[570px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#170c40]/80 via-transparent to-transparent" />

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                    }}
                    className="absolute bottom-0 left-0 right-0 p-6 sm:p-9 lg:p-12"
                  >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                      {project.category}
                    </p>

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                      <h3 className="max-w-[700px] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {project.title}
                      </h3>

                      <motion.button
                        type="button"
                        whileHover={{
                          scale: 1.06,
                          y: -3,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        className="w-fit shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#7047e8] shadow-xl"
                      >
                        View Project
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="pointer-events-none absolute -bottom-6 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-[#ff76d5]/30 blur-[45px]" />
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {projects.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveProject(index)}
                aria-label={`Show ${item.title}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeProject === index
                    ? "w-10 bg-white"
                    : "w-2 bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}