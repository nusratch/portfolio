"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "@/src/components/Container";

const particles = [
  { top: "14%", left: "8%", size: 5, duration: 10, delay: 0 },
  { top: "22%", left: "19%", size: 3, duration: 13, delay: 1 },
  { top: "12%", left: "35%", size: 6, duration: 15, delay: 2 },
  { top: "30%", left: "51%", size: 4, duration: 11, delay: 0.5 },
  { top: "17%", left: "72%", size: 5, duration: 14, delay: 3 },
  { top: "35%", left: "88%", size: 3, duration: 12, delay: 1.5 },
  { top: "52%", left: "10%", size: 4, duration: 16, delay: 2.5 },
  { top: "62%", left: "25%", size: 6, duration: 13, delay: 0.8 },
  { top: "48%", left: "42%", size: 3, duration: 11, delay: 2 },
  { top: "70%", left: "58%", size: 5, duration: 15, delay: 1 },
  { top: "55%", left: "76%", size: 4, duration: 12, delay: 3.5 },
  { top: "75%", left: "91%", size: 6, duration: 17, delay: 0.4 },
  { top: "84%", left: "15%", size: 3, duration: 14, delay: 2.2 },
  { top: "87%", left: "48%", size: 5, duration: 13, delay: 1.2 },
  { top: "82%", left: "80%", size: 4, duration: 16, delay: 3 },
];

const flowers = [
  { top: "13%", left: "7%", size: 20, duration: 17, delay: 0 },
  { top: "24%", left: "87%", size: 15, duration: 20, delay: 2 },
  { top: "42%", left: "17%", size: 13, duration: 18, delay: 4 },
  { top: "58%", left: "92%", size: 21, duration: 22, delay: 1 },
  { top: "76%", left: "31%", size: 16, duration: 19, delay: 5 },
  { top: "83%", left: "72%", size: 14, duration: 21, delay: 3 },
];

export default function Hero() {
  const fullName = "Nusrat Chowdhury";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      index++;
      setTypedName(fullName.slice(0, index));

      if (index === fullName.length) {
        clearInterval(typing);
      }
    }, 110);

    return () => clearInterval(typing);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#fff4f8] pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#fff5f9] via-[#ffe3ee] to-[#ffd6e6]" />

      <motion.div
        animate={{
          x: [-120, 180, -120],
          y: [-40, 80, -40],
          scale: [1, 1.18, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-0 h-[620px] w-[620px] rounded-full bg-[#ff6fa5]/35 blur-[110px]"
      />

      <motion.div
        animate={{
          x: [120, -200, 120],
          y: [50, -80, 50],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-[15%] h-[650px] w-[650px] rounded-full bg-[#ffb3d0]/45 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [-200, 300, -200],
          y: [40, -60, 40],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-180px] left-[15%] h-[400px] w-[850px] rounded-full bg-[#f79ac0]/25 blur-[100px]"
      />

      <motion.div
        animate={{
          x: ["-30vw", "130vw"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute top-[28%] h-[2px] w-[260px] bg-gradient-to-r from-transparent via-[#E75480]/35 to-transparent blur-[1px]"
      />

      <motion.div
        animate={{
          x: ["120vw", "-40vw"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute top-[68%] h-[1px] w-[380px] bg-gradient-to-r from-transparent via-white/80 to-transparent"
      />

      <motion.div
        animate={{
          x: ["-50vw", "130vw"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute top-[82%] h-[2px] w-[180px] bg-gradient-to-r from-transparent via-[#C85C8E]/25 to-transparent"
      />

      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              x: [0, 45, 100, 160],
              y: [0, -25, 15, -35],
              opacity: [0.15, 0.8, 0.35, 0.15],
              scale: [1, 1.5, 0.8, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full bg-[#C85C8E]"
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {flowers.map((flower, index) => (
          <motion.div
            key={index}
            style={{
              top: flower.top,
              left: flower.left,
              width: flower.size,
              height: flower.size,
            }}
            animate={{
              x: [0, 30, -12, 25, 0],
              y: [0, -25, -55, -85, 0],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.2, 0.55, 0.4, 0.25, 0.2],
            }}
            transition={{
              duration: flower.duration,
              delay: flower.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute"
          >
            <svg
              viewBox="0 0 40 40"
              className="h-full w-full"
              fill="none"
            >
              <ellipse
                cx="20"
                cy="10"
                rx="5"
                ry="9"
                fill="#E75480"
                fillOpacity="0.5"
              />
              <ellipse
                cx="20"
                cy="30"
                rx="5"
                ry="9"
                fill="#E75480"
                fillOpacity="0.5"
              />
              <ellipse
                cx="10"
                cy="20"
                rx="9"
                ry="5"
                fill="#E75480"
                fillOpacity="0.5"
              />
              <ellipse
                cx="30"
                cy="20"
                rx="9"
                ry="5"
                fill="#E75480"
                fillOpacity="0.5"
              />
              <circle
                cx="20"
                cy="20"
                r="4"
                fill="#C85C8E"
                fillOpacity="0.75"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(200,92,142,0.55) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <Container>
        <div className="relative z-10 flex min-h-[calc(100vh-7rem)] items-center">
          <div className="max-w-[900px] py-16">
            <motion.h1
              initial={{
                opacity: 0,
                x: -35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-5xl font-bold leading-[0.95] tracking-tight text-[#C85C8E] sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              {typedName}

              <motion.span
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="ml-1 inline-block h-[0.8em] w-[3px] bg-[#C85C8E] align-middle sm:w-[4px]"
              />
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-6 max-w-[650px] text-lg leading-8 text-zinc-600"
            >
              Crafting premium modern web experiences with smooth interactions,
              cinematic animations, and elegant full-stack architecture.
            </motion.p>

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
                duration: 0.7,
                delay: 0.5,
              }}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-[#e75480] to-[#ff5f8f] px-9 py-4 font-semibold text-white shadow-lg shadow-pink-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-300/60"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-pink-300 bg-white/65 px-9 py-4 font-semibold text-zinc-700 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-pink-400 hover:bg-white/90"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}