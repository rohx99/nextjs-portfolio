import { skills } from "@/utils/skills";
import Image from "next/image";

export const metadata = {
  title: "Skills - Rohit Kumar Yadav",
  description:
    "Technical Skills - Rohit Kumar Yadav, a MERN stack developer showcasing expertise in web development technologies including MongoDB, Express.js, React, and Node.js.",
};

export default function Skills() {
  return (
    <section className="w-full px-5 pb-10 relative scroll-mt-24" id="skills">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center bg-linear-to-br from-[#f4fffd] via-[#88f7ff] to-[#056bd8] bg-clip-text  text-transparent mb-2 uppercase tracking-wide">
          Technical Skills
        </h2>

        <h6 className="text-xs md:text-sm  text-center text-white/80 mb-8 tracking-normal">
          A comprehensive overview of my technical expertise and the
          technologies I work with to build modern web applications
        </h6>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative bg-cyan-900/20 backdrop-blur-xl rounded-3xl p-6 border border-cyan-500/20 transition-all duration-500 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-3 overflow-hidden flex flex-col items-center justify-center h-40 w-40 md:h-48 md:w-48">
                <Image
                  src={skill.image}
                  height={80}
                  width={80}
                  alt={skill.name}
                  className="mb-4"
                />

                {/* Skill Name */}
                <h3 className="text-white font-bold text-center text-sm uppercase tracking-wider mb-2">
                  {skill.name}
                </h3>

                {/* Progress Bar for Score */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-cyan-500 h-2 rounded-full transition-all duration-500 group-hover:bg-cyan-300"
                    style={{ width: `${skill.score}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
