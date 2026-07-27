"use client";

import { motion } from "framer-motion";
import Container from "@/src/components/Container";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#111111" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#5FA04E" },
  { name: "Express.js", icon: <SiExpress />, color: "#333333" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717" },

];

function SkillCard({
  skill,
}: {
  skill: (typeof skills)[number];
}) {
  return (
    <motion.div
      whileHover={{
        y: -7,
        scale: 1.04,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 22,
      }}
      className="
        group
        flex
        h-[92px]
        w-[220px]
        shrink-0
        items-center
        gap-4
        rounded-[18px]
        border
        border-white/30
        bg-white/10
        px-5
        shadow-[0_10px_30px_rgba(70,0,40,0.12)]
        backdrop-blur-md
        transition-all
        duration-300
        hover:bg-white/20
        hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)]
      "
    >
    

      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-white/90
          text-3xl
          shadow-sm
          transition-transform
          duration-300
          group-hover:scale-110
        "
        style={{ color: skill.color }}
      >
        {skill.icon}
      </div>

  

      <div>
        <h3 className="text-base font-semibold text-white sm:text-lg">
          {skill.name}
        </h3>

        <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/55">
          Technology
        </p>
      </div>
    </motion.div>
  );
}

function MovingRow({
  items,
  direction = "left",
  duration = 28,
}: {
  items: typeof skills;
  direction?: "left" | "right";
  duration?: number;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2">

      

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-20
          w-16
          bg-gradient-to-r
          from-[#df1680]
          to-transparent
          sm:w-28
        "
      />

    
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-20
          w-16
          bg-gradient-to-l
          from-[#df1680]
          to-transparent
          sm:w-28
        "
      />

      <motion.div
        className="flex w-max gap-5"
        animate={{
          x:
            direction === "left"
              ? ["0%", "-50%"]
              : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicated.map((skill, index) => (
          <SkillCard
            key={`${skill.name}-${index}`}
            skill={skill}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function Skill() {
  const firstRow = skills.slice(0, 6);
  const secondRow = skills.slice(5);

  return (
    <section
      id="skills"
      className="
        relative
        min-h-[850px]
        overflow-hidden
        bg-[#df1680]
        py-20
        sm:py-24
        lg:py-28
      "
    >

    
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-[#d90f76]
          via-[#e52a91]
          to-[#f05aa7]
      "
      />

      
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          h-[600px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/10
          blur-[120px]
        "
      />

    

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[38%]
          h-[600px]
          w-[950px]
          -translate-x-1/2
          opacity-25
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.35) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "42px 42px",
          transform:
            "translateX(-50%) perspective(700px) rotateX(60deg)",
          transformOrigin: "center top",
        }}
      />

     

      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[500px] w-[800px] -translate-x-1/2 opacity-[0.16]">

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white" />

        <div className="absolute left-[35%] top-0 h-full w-px -rotate-[18deg] bg-white" />

        <div className="absolute right-[35%] top-0 h-full w-px rotate-[18deg] bg-white" />

        <div className="absolute left-[20%] top-0 h-full w-px -rotate-[32deg] bg-white" />

        <div className="absolute right-[20%] top-0 h-full w-px rotate-[32deg] bg-white" />

      </div>

      
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[45%]
          h-36
          w-36
          rounded-full
          border
          border-white/20
        "
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[8%]
          bottom-[15%]
          h-52
          w-52
          rounded-full
          border
          border-white/15
        "
      />

     
      <div className="relative z-10 space-y-3">

        <MovingRow
          items={firstRow}
          direction="left"
          duration={25}
        />

        <MovingRow
          items={secondRow}
          direction="right"
          duration={28}
        />

      </div>

     

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            relative
            z-10
            mx-auto
            mt-24
            max-w-5xl
            text-center
          "
        >
         

          <h2
            className="
              text-5xl
              font-black
              leading-[0.95]
              tracking-[-0.045em]
              text-white
              sm:text-6xl
              lg:text-8xl
            "
          >
            Nusrat’s Toolkit
            <br />

            <motion.span
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="inline-block text-white/75"
            >
            
            </motion.span>
          </h2>

        </motion.div>
      </Container>
      <div
        className="
          pointer-events-none
          absolute
          -bottom-52
          left-1/2
          h-[450px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-white/15
          blur-[100px]
        "
      />

    </section>
  );
}