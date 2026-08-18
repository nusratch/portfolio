"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import Container from "@/src/components/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#e07ca6] text-zinc-900">

    
  
      <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden opacity-[0.07]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max whitespace-nowrap"
        >
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0">
              <span className="px-8 text-[120px] font-black tracking-[-0.06em] sm:text-[170px] lg:text-[220px]">
              Nusrat  Chowdhury
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      
      <motion.div
        animate={{
          y: [0, -35, 0],
          x: [0, 20, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-20 top-8 h-52 w-52 rounded-full border-[35px] border-white/20"
      />

   
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-16 bottom-10 h-60 w-60 rounded-full bg-white/15"
      />

    
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute right-[22%] top-12 hidden h-20 w-20 border-2 border-zinc-900/10 lg:block"
      />

     
      <motion.div
        animate={{
          y: [0, -18, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[40%] top-[25%] hidden h-4 w-4 rounded-full bg-[#C85C8E]/50 md:block"
      />

    

      <Container>
        <div className="relative z-10 py-16 sm:py-20 lg:py-24">

         
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="mb-16"
          >
           
          </motion.div>

          
          <div className="grid grid-cols-1 gap-10 border-t border-zinc-900/20 pt-10 md:grid-cols-3 md:items-center md:gap-8">

        
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <a
                href="#home"
                className="inline-block text-3xl font-black tracking-tight text-zinc-900 transition-transform duration-300 hover:-rotate-2 hover:scale-105"
              >
                Nusrat<span className="text-[#da3682]">.</span>
              </a>

              <p className="mx-auto mt-3 max-w-[300px] text-sm leading-6 text-zinc-800/70 md:mx-0">
                Building thoughtful digital experiences with modern
                technologies and clean design.
              </p>
            </motion.div>

            
            <motion.nav
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-semibold text-zinc-800"
            >
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Services", "#services"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -3 }}
                  className="relative transition-colors duration-300 hover:text-[#C85C8E]"
                >
                  {label}
                </motion.a>
              ))}
            </motion.nav>

            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 md:justify-end"
            >
            
              <motion.a
                href="https://github.com/nusratchy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{
                  y: -6,
                  rotate: -6,
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.92 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-900/20 bg-white/45 text-zinc-900 backdrop-blur-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.94a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                </svg>
              </motion.a>

              
              <motion.a
                href="https://www.linkedin.com/in/nusratchy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{
                  y: -6,
                  rotate: 6,
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.92 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-900/20 bg-white/45 text-zinc-900 backdrop-blur-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.5 8.5H3.5V21h3V8.5ZM5 3a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 5 3ZM10 8.5h2.87v1.71h.04c.4-.76 1.38-1.96 2.84-1.96 3.04 0 3.6 2 3.6 4.6V21h-3v-7.23c0-1.73-.03-3.95-2.4-3.95-2.41 0-2.78 1.88-2.78 3.82V21h-3V8.5H10Z" />
                </svg>
              </motion.a>

            
              <motion.a
                href="mailto:nusratchy.0119@gmail.com"
                aria-label="Email"
                whileHover={{
                  y: -6,
                  rotate: -6,
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.92 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-900/20 bg-white/45 text-zinc-900 backdrop-blur-sm"
              >
                <Mail size={20} />
              </motion.a>

            
              <motion.a
                href="#home"
                aria-label="Back to top"
                whileHover={{
                  y: -7,
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                className="ml-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#C85C8E] text-white shadow-lg"
              >
                <ArrowUp size={20} />
              </motion.a>
            </motion.div>
          </div>

          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-900/20 pt-7 sm:flex-row"
          >
            <p className="text-sm text-zinc-800/60">
              © {currentYear} Nusrat Chowdhury. All rights reserved.
            </p>

            <motion.p
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-sm font-medium text-zinc-800/60"
            >
              Designed & built with care.
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}