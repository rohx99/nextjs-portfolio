import Image from "next/image";

export default function Competencies() {
  const competencies = [
    {
      title: "Full-Stack Development",
      description:
        "End-to-end web application development using modern technologies",
      image: "/rocket.svg",
    },
    {
      title: "System Architecture",
      description: "Designing scalable and maintainable software architectures",
      image: "/network-connection.png",
    },
    {
      title: "Performance Optimization",
      description: "Improving application performance and user experience",
      image: "/bolt.svg",
    },
    {
      title: "Team Collaboration",
      description: "Working effectively in cross-functional development teams",
      image: "/handshake.svg",
    },
    {
      title: "Problem Solving",
      description:
        "Analyzing complex problems and implementing effective solutions",
      image: "/puzzle.png",
    },
    {
      title: "Continuous Learning",
      description:
        "Staying updated with latest technologies and best practices",
      image: "/books.png",
    },
  ];

  return (
    <>
      <section className="w-full px-5 pb-10 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-br from-[#f4fffd] via-[#88f7ff] to-[#056bd8] bg-clip-text text-transparent mb-2 uppercase tracking-wide">
            Core Competencies
          </h2>

          <h6 className="text-xs md:text-sm  text-center text-white/80 mb-8 tracking-normal">
            Skills and expertise developed through professional experience
          </h6>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-8 gap-4">
            {competencies.map((item, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-cyan-900/20 backdrop-blur-xl rounded-3xl md:p-6 border border-cyan-500/20 transition-all duration-500 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-3 overflow-hidden flex flex-col items-center justify-center h-64 md:h-60 w-full">
                  <Image
                    src={item.image}
                    height={80}
                    width={80}
                    alt={item.title}
                    className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <h3 className="text-white font-bold text-center text-sm md:text-base uppercase tracking-wider mb-3 px-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm text-center leading-relaxed px-2 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
