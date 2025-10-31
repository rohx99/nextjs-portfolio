import Image from "next/image";
import { Volkhov } from "next/font/google";
import ActiveNav from "./ActiveNav";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400"],
});

// Define navLinks here (static, so server can handle)
const navLinks = [
  { id: "intro", label: "Introduction", icon: "/chat-information.png" },
  { id: "skills", label: "Skills", icon: "/visual-studio-code.png" },
  { id: "projects", label: "Projects", icon: "/reward-badge.png" },
  { id: "contact", label: "Let's Connect", icon: "/chat.png" },
];

export default function Header() {
  return (
    <nav
      className={`${volkhov.className} w-full p-2 md:p-5 flex justify-between fixed max-w-[1366px] mx-auto bg-black/30 backdrop-blur-sm z-20`}
    >
      {/* Logo - Static */}
      <section>
        <Image src="/logo.svg" width={90} height={100} alt="Logo" />
      </section>

      {/* Nav - Pass to client sub-component */}
      <section className="space-x-5 tracking-wide hidden md:flex">
        <ActiveNav navLinks={navLinks} />
      </section>

      {/* Resume - Static */}
      <section className="flex items-center">
        <a
          href="/Rohit Yadav - MERN.pdf"
          download
          className="flex text-white border-white/30 bg-white/15 border items-center md:px-4 px-2 py-2 rounded-xl space-x-2 hover:bg-white/20 transition-colors duration-300"
        >
          <Image
            src="/email-and-file.png"
            height={27}
            width={27}
            alt="Download Resume"
          />
          <span>Resume / CV</span>
        </a>
      </section>
    </nav>
  );
}
