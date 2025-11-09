import React from "react";

export default function Stats() {
  const stats = [
    {
      name: "Featured Projects",
      value: 8,
      image: "/project-img.jpg",
    },
    {
      name: "Year of Experience",
      value: 1,
      image: "/exp-img.jpg",
    },
    {
      name: "Technical Skills",
      value: 10,
      image: "/skills-img.jpg",
    },
  ];

  return (
    <section className="w-full py-12 relative overflow-hidden">
      <div className="max-w-7xl px-5 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((item) => (
            <div
              key={item.name}
              className="relative bg-[url('/project-img.jpg')] bg-cover bg-center bg-no-repeat bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl py-10 text-center transform hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 space-y-3">
                <p className="text-4xl font-bold text-white">{item.value}+</p>
                <h3 className="text-lg font-semibold text-white mb-2 ">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
