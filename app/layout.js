// import { Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

// const greatVibes = Great_Vibes({
//   subsets: ["latin"],
//   weight: ["400"],
// });

export const metadata = {
  title: "Rohit Kumar Yadav - MERN Stack Developer Portfolio",
  description:
    "Portfolio of Rohit Kumar Yadav, a skilled MERN stack developer with expertise in building robust web applications using MongoDB, Express.js, React, and Node.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${greatVibes.className} antialiased text-white relative`}
        className={`antialiased text-white relative`}
      >
        {/* 🎬 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10 "
        >
          <source src="/space.mp4" type="video/mp4" />
        </video>

        {/* Page Content */}
        <div className="relative z-10 max-w-[1366px] mx-auto text-sm">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
