"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FooterNav() {
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

  const navLinks = [
    { id: "intro", label: "Introduction", icon: "/chat-information.png" },
    { id: "skills", label: "Skills", icon: "/visual-studio-code.png" },
    { id: "projects", label: "Projects", icon: "/reward-badge.png" },
    { id: "contact", label: "Let's Connect", icon: "/chat.png" },
  ];

  return (
    <>
      <footer className="w-full py-2 border-t border-white/20 text-white flex md:hidden justify-between items-center max-w-[1366px] mx-auto bg-black/30 backdrop-blur-sm fixed bottom-0 right-0 z-20">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            className={`flex flex-col flex-1 items-center px-3 py-2 rounded-xl space-y-1 transition-colors duration-300 ${
              activeSection === link.id
                ? "text-cyan-400 bg-white/30"
                : "text-white hover:text-cyan-300"
            }`}
          >
            <Image src={link.icon} height={35} width={35} alt={link.label} />
            <span className="text-xs text-center w-full text-nowrap">
              {link.label}
            </span>
          </Link>
        ))}
      </footer>
    </>
  );
}
