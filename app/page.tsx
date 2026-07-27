import Navbar from "@/src/components/Navbar";
import Hero from "@/src/sections/Hero";
import About from "@/src/sections/About";
import Skill from "@/src/sections/Skill";
import Projects from "@/src/sections/Projects";
import Services from "@/src/sections/Services";
import Contact from "@/src/sections/Contact";
import Footer from "@/src/sections/Footer";

export default function Home() {
  return (
    <main id="home" className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}