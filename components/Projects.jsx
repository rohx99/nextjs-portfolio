import { projects } from "@/utils/projects";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

export const metadata = {
  title: "Projects - Rohit Kumar Yadav",
  description:
    "Showcase of featured projects by Rohit Kumar Yadav, a MERN stack developer, highlighting skills in building robust web applications using MongoDB, Express.js, React, and Node.js.",
};

export default function Projects() {
  return (
    <section id="projects" className="w-full py-10 px-5 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-8 uppercase tracking-wide">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-start">
          {projects.map((project) => (
            <div key={project.id} className="group relative w-full">
              {/* Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 transition-all duration-500 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 overflow-hidden flex flex-col h-full min-h-[400px]">
                {/* Company Logo Placeholder */}
                <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4 mx-auto border border-cyan-500/30">
                  <span className="text-cyan-300 font-bold text-lg">
                    {project.company_name.charAt(0).toUpperCase()}
                  </span>
                </div>

                {/* Company Name */}
                <h3 className="text-white font-bold text-center text-lg uppercase tracking-wider mb-3 px-2">
                  {project.company_name}
                </h3>

                {/* Sector Badge */}
                <span className="inline-block bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 mx-auto text-center">
                  {project.sector}
                </span>

                {/* Elaborated Project Description */}
                <p className="text-slate-300 text-sm leading-relaxed flex-grow mb-4 px-1 text-center">
                  {project.project_info_elaborated || project.project_info}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {project.tech_stack.split(", ").map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-700/50 text-slate-300 text-xs px-2 py-1 rounded-md border border-slate-600"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col space-y-2 mt-auto">
                  {project.demo_link && (
                    <Link
                      href={project.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors bg-slate-700/50 py-2 rounded-lg border border-slate-600 hover:border-cyan-400/50"
                    >
                      Demo <HiOutlineExternalLink className="ml-1 w-4 h-4" />
                    </Link>
                  )}
                  {/* {project.live_link && project.live_link !== "#" && (
                    <Link
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors bg-slate-700/50 py-2 rounded-lg border border-slate-600 hover:border-cyan-400/50"
                    >
                      Live
                    </Link>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
