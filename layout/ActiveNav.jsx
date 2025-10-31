"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ActiveNav({ navLinks }) {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.id}
          href={`#${link.id}`}
          className={`flex items-center px-4 py-1 rounded-xl space-x-2 transition-colors duration-300 ${
            activeSection === link.id
              ? "text-cyan-400 bg-white/10"
              : "text-white hover:text-cyan-300"
          }`}
        >
          <Image src={link.icon} height={35} width={35} alt={link.label} />
          <span>{link.label}</span>
        </Link>
      ))}
    </>
  );
}
