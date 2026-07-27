"use client";

import { motion } from "framer-motion";
import Container from "@/src/components/Container";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-pink-100/40 bg-white/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-[76px] items-center justify-between">
          <a
            href="#"
            aria-label="Nusrat Chowdhury"
            className="group flex shrink-0 items-center"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: -3,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 18,
              }}
              className="relative flex h-[46px] w-[46px] items-center justify-center"
            >
              <div className="absolute inset-0 rounded-[15px] bg-gradient-to-br from-[#C85C8E] via-[#E75480] to-[#8B5CF6] opacity-15 transition-opacity duration-300 group-hover:opacity-25" />

              <span className="relative text-[30px] font-black leading-none tracking-[-0.08em] text-[#A83B78]">
                N
                <span className="text-[#F05B91]">.</span>
              </span>
            </motion.div>
          </a>

          <nav className="hidden items-center gap-8 text-[15px] font-medium text-zinc-700 md:flex lg:gap-12">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#E75480]"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition-colors duration-300 hover:text-[#E75480]"
            >
              About
            </a>

            <a
              href="#projects"
              className="transition-colors duration-300 hover:text-[#E75480]"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition-colors duration-300 hover:text-[#E75480]"
            >
              Contact
            </a>
          </nav>

          <motion.a
            href="https://calendar.app.google/1bZBaSpkLcuG1gVv8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.06,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 18,
            }}
            className="group relative hidden overflow-hidden rounded-full bg-gradient-to-r from-[#E75480] to-[#f7417a] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(231,84,128,0.28)] sm:inline-flex lg:px-8"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative">
              Book Appointment
            </span>
          </motion.a>
        </div>
      </Container>
    </header>
  );
}