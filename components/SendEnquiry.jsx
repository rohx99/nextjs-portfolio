"use client";

import React, { useState } from "react";

const SendEnquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "e1964777-9eff-40ae-ad11-2392e1bf9745");
      formData.append("form_name", "Enquiry Form");
      formData.append("botcheck", "");
      formData.append("from_name", name);
      formData.append("email", email);
      formData.append("replyto", email);
      formData.append("subject", `New enquiry from ${name}`);
      formData.append("message", message);
      formData.append("redirect", "https://web3forms.com/success");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          Referer: window.location.href,
        },
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="md:px-10 px-2 mb-5 md:mb-0">
        <form className="flex flex-col space-y-10" onSubmit={handleSubmit}>
          <section className="md:flex md:flex-row flex flex-col space-y-10 md:space-y-0 w-full">
            <section className="flex flex-col space-y-2 flex-auto">
              <label className="text-sm text-cyan-400 font-bold">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="bg-transparent focus:outline-none focus:border-cyan-400 border-b border-white/40 md:w-[90%] h-10"
              />
            </section>

            <section className="flex flex-col space-y-2 flex-auto">
              <label className="text-sm text-cyan-400 font-bold">
                Your Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent focus:outline-none focus:border-cyan-400 border-b border-white/40 md:w-[90%] h-10"
              />
            </section>
          </section>

          <section className="flex flex-col md:space-y-2 space-y-4 flex-auto">
            <label className="text-sm text-cyan-400 font-bold">
              Your Message
            </label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="bg-transparent focus:outline-none focus:border-cyan-400 border-b border-white/40 h-44"
            />
          </section>

          <section className="max-w-[50%] mx-auto">
            <button
              className="button active:scale-95 transition ease-in-out duration-100"
              aria-label="Send Message"
              type="submit"
              title="Send Message"
              disabled={loading}
            >
              <section className="blob1" />
              <section className="blob2" />
              <section className="inner">
                {loading ? "Sending..." : "Send Message"}
              </section>
            </button>
          </section>
        </form>
      </section>
    </>
  );
};

export default SendEnquiry;
