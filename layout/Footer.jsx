import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <>
      <footer className="w-full p-7 border-t border-white/20 text-white flex justify-center items-center max-w-[1366px] mx-auto bg-black/30 backdrop-blur-sm pb-30 md:pb-7">
        <p className="text-sm text-center">
          Copyright © 2025 Rohit Kumar Yadav. All rights reserved.
        </p>
      </footer>
      <FooterNav />
    </>
  );
}
