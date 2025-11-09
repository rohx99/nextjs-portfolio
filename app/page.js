import Competencies from "@/components/Competencies";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";

export const metadata = {
  title: "Rohit Kumar Yadav - Software Developer",
  description:
    "Portfolio of Rohit Kumar Yadav, a skilled MERN stack developer with expertise in building robust web applications using MongoDB, Express.js, React, and Node.js.",
};

export default function Home() {
  return (
    <section>
      <Intro />
      <Stats />
      <Skills />
      <Competencies />
      <Projects />
      <Contact />
    </section>
  );
}
