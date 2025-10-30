import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export const metadata = {
  title: "Rohit Kumar Yadav - MERN Stack Developer Portfolio",
  description:
    "Portfolio of Rohit Kumar Yadav, a skilled MERN stack developer with expertise in building robust web applications using MongoDB, Express.js, React, and Node.js.",
};

export default function Home() {
  return (
    <section>
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}
