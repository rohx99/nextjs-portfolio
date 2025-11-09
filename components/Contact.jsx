import SendEnquiry from "./SendEnquiry";
import SocialIcons from "./SocialIcons";

export const metadata = {
  title: "Contact - Rohit Kumar Yadav",
  description:
    "Get in touch with Rohit Kumar Yadav, a skilled MERN stack developer. Reach out for collaborations, inquiries, or project discussions.",
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full md:px-5 px-2 md:pt-10 md:pb-20 pb-10 relative scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-center bg-linear-to-br from-[#f4fffd] via-[#88f7ff] to-[#056bd8] bg-clip-text  text-transparent mb-2 uppercase tracking-wide">
        Get In Touch
      </h2>

      <h6 className="text-xs md:text-sm  text-center text-white/80 mb-8 tracking-normal">
        Have a project in mind or want to collaborate? I'd love to hear from
        you. Let's create something amazing together!
      </h6>

      <section className="flex flex-col md:flex-row justify-between w-full space-y-5 md:space-y-0">
        <section className="md:w-2/5 space-y-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.583316082!2d73.09068390659976!3d22.322240637475648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1747669505724!5m2!1sen!2sin"
            className="w-full h-80 rounded "
            referrerPolicy="no-referrer-when-downgrade"
            loading="eager"
            title="Locate Me on Map"
          />
          <SocialIcons />
        </section>

        <section className="md:w-3/5">
          <SendEnquiry />
        </section>
      </section>
    </section>
  );
}
