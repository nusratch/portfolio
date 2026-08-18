"use client";

import { motion } from "framer-motion";
import Container from "@/src/components/Container";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-pink-100/40 bg-white/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-[76px] items-center justify-between">
          <a
            href="#"
            aria-label="Nusrat Chowdhury"
            onClick={closeMenu}
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
                N<span className="text-[#F05B91]">.</span>
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

          <div className="flex items-center gap-3">
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

              <span className="relative">Book Appointment</span>
            </motion.a>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-pink-100 bg-white/60 text-[#A83B78] md:hidden"
            >
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                    isOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                    isOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          className="overflow-hidden md:hidden"
        >
          <nav className="flex flex-col gap-1 border-t border-pink-100/50 py-4">
            <a
              href="#"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-pink-50 hover:text-[#E75480]"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-pink-50 hover:text-[#E75480]"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-pink-50 hover:text-[#E75480]"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-pink-50 hover:text-[#E75480]"
            >
              Contact
            </a>

            <a
              href="https://calendar.app.google/1bZBaSpkLcuG1gVv8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-gradient-to-r from-[#E75480] to-[#f7417a] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_8px_25px_rgba(231,84,128,0.22)]"
            >
              Book Appointment
            </a>
          </nav>
        </motion.div>
      </Container>
    </header>
  );
}