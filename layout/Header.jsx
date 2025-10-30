"use client";

import Link from "next/link";
import { Volkhov } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Header() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // offset for fixed navbar
        if (scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "intro", label: "Introduction", icon: "/chat-information.png" },
    { id: "skills", label: "Skills", icon: "/visual-studio-code.png" },
    { id: "projects", label: "Projects", icon: "/bookmark.png" },
    { id: "contact", label: "Let's Connect", icon: "/chat.png" },
  ];

  return (
    <nav
      className={`${volkhov.className} w-full p-5 flex justify-between fixed max-w-[1366px] mx-auto bg-black/30 backdrop-blur-sm z-20`}
    >
      {/* Logo */}
      <section>
        <Image src={"/logo.svg"} width={90} height={100} alt="Logo" />
      </section>

      {/* Navigation Links */}
      <section className="space-x-5 tracking-wide flex">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`flex items-center px-4 py-1 rounded-xl space-x-2 transition-colors duration-300 ${
              activeSection === link.id
                ? "text-cyan-400 bg-white/10"
                : "text-white hover:text-cyan-300"
            }`}
          >
            <Image src={link.icon} height={28} width={28} alt={link.label} />
            <span>{link.label}</span>
          </a>
        ))}
      </section>

      {/* Resume */}
      <section className="flex space-x-2">
        <Link
          href="#"
          className="flex text-white border-white/30 bg-white/20 border items-center px-2 pt-1 rounded-xl space-x-2 hover:bg-white/30"
        >
          <Image
            src={"/email-and-file.png"}
            height={22}
            width={22}
            alt="Download Resume"
          />
          <span>Resume / CV</span>
        </Link>
      </section>
    </nav>
  );
}
