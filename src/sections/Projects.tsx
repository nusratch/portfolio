"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Container from "@/src/components/Container";

const projects = [
  {
    title: "Online Ebook Platform",
    shortTitle: "Ebook",
    category: "Full-Stack Development",
    image: "/images/ebook.jpeg",
    liveUrl: "https://e-book-platform-two.vercel.app",
  },
  {
    title: "Doctor Appointment",
    shortTitle: "Doctor Appointment",
    category: "Full-Stack Development",
    image: "/images/docapp.jpeg",
    liveUrl: "https://doctor-appointment-client-psi.vercel.app",
  },
  {
    title: "Digital Service Platform",
    shortTitle: "Digital Service",
    category: "Frontend Development",
    image: "/images/projects1.jpeg",
    liveUrl: "https://digitool-platform-bd.netlify.app/",
  },
  {
    title: "Online Friendship Platform",
    shortTitle: "Friendship Platform",
    category: "Frontend Development",
    image: "/images/projects2.jpeg",
    liveUrl: "https://remarkable-churros-f01530.netlify.app",
  },
  {
    title: "Online Education Platform",
    shortTitle: "Education Platform",
    category: "Frontend Development",
    image: "/images/projects3.jpeg",
    liveUrl: "https://luxury-dasik-21b677.netlify.app",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#df5050] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#f11414] via-[#ee3b53] to-[#cc6c6c]" />

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
        className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#38bdf8]/35 blur-[110px]"
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
        className="pointer-events-none absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-[#ff74d4]/30 blur-[120px]"
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
        className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
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
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
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
        className="pointer-events-none absolute right-[5%] top-[24%] h-40 w-40 rounded-full border border-white/20"
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
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/60 sm:text-sm">
              Selected Work
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              My Projects
            </h2>
          </motion.div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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
                    : "border border-white/25 bg-white/10 text-white/75 backdrop-blur-md hover:bg-white/20 hover:text-white"
                }`}
              >
                {item.shortTitle}
              </motion.button>
            ))}
          </div>

          <div className="relative mx-auto mt-10 max-w-[900px] sm:mt-12">
            <div className="pointer-events-none absolute -inset-7 rounded-[50px] bg-white/10 blur-[60px]" />

            <AnimatePresence mode="wait">
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-[28px] border border-white/30 bg-white/15 p-3 shadow-[0_30px_80px_rgba(38,17,105,0.3)] backdrop-blur-xl sm:rounded-[36px] sm:p-4"
              >
                <div className="relative overflow-hidden rounded-[20px] bg-black/10 sm:rounded-[28px]">
                  <div className="relative h-[260px] w-full sm:h-[360px] lg:h-[430px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
                      className="object-contain"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#170c40]/70 via-transparent to-transparent" />

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 0.45,
                    }}
                    className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8"
                  >
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70 sm:text-xs">
                      {project.category}
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                      <h3 className="max-w-[600px] text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        {project.title}
                      </h3>

                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        className="w-fit shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#7047e8] shadow-xl transition-shadow duration-300 hover:shadow-2xl"
                      >
                        View Project
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="pointer-events-none absolute -bottom-5 left-1/2 h-14 w-[65%] -translate-x-1/2 rounded-full bg-[#ff76d5]/30 blur-[40px]" />
          </div>

          <div className="mt-7 flex justify-center gap-2">
            {projects.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveProject(index)}
                aria-label={`Show ${item.title}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeProject === index
                    ? "w-9 bg-white"
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