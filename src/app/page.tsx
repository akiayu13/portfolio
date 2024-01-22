import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience"
import Contact from "@/components/Contact";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#0C0705] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-start">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section
        id="contact"
        className="snap-start
      "
      >
        <Contact />
      </section>
    </div>
  );
}
