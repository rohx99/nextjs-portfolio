import Image from "next/image";
import { Quintessential, Great_Vibes } from "next/font/google";

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: ["400"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Rohit Kumar Yadav - MERN Stack Developer Portfolio",
  description:
    "Portfolio of Rohit Kumar Yadav, a skilled MERN stack developer with expertise in building robust web applications using MongoDB, Express.js, React, and Node.js.",
};

export default function Intro() {
  return (
    <>
      <section
        id="intro"
        className="w-full px-5 min-h-screen flex flex-col justify-center space-y-5 pt-20"
      >
        <section className="grid place-items-center">
          <Image
            src={"/profile.svg"}
            width={200}
            height={200}
            alt="Profile Picture"
            className="rounded-full"
          />
        </section>
        <section className="flex flex-col space-y-5 tracking-wider text-center">
          <h3
            className={`text-white text-5xl font-extrabold tracking-wider ${greatVibes.className} antialiased`}
          >
            Hi, I am{" "}
            <span className="bg-linear-to-br from-[#61ffd2] via-[#10edfd] to-[#056bd8] bg-clip-text  text-transparent">
              {" "}
              Rohit Kumar Yadav
            </span>
          </h3>
          <p
            className={`text-xl leading-9 tracking-wide ${quintessential.className} text-white/85 max-w-3/4 text-center mx-auto`}
          >
            With over one year of industrial experience, I am a proficient MERN
            stack developer skilled in building robust, scalable web
            applications. My expertise spans MongoDB, Express.js, React, and
            Node.js, enabling me to deliver end-to-end solutions efficiently. I
            am adept at integrating third-party services, optimizing
            performance, and implementing secure, user-centric features. My
            practical experience in diverse projects has honed my
            problem-solving abilities and ensured timely, quality deliveries,
            making me a confident and knowledgeable developer in the modern web
            development landscape.
          </p>
        </section>
      </section>
    </>
  );
}
