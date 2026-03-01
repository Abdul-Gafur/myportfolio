"use client";

import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    // Convert form data
    const formData = new FormData(event.target);

    // IMPORTANT: Replace this with your Web3Forms access key
    // Get your key at: https://web3forms.com/
    formData.append("access_key", "1e9db658-3b72-418e-9195-cd32e2a1cb0e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();

        // Clear success message after 5 seconds
        setTimeout(() => setResult(""), 5000);
      } else {
        console.error("Error", data);
        setResult(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setResult("A network error occurred. Please try again.");
    }
  };

  return (
    <section className="py-20 px-4 bg-[#141118]" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[1000px] mx-auto bg-background-card border border-[#2e2839] rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="grid md:grid-cols-2">
          {/* Left: Form */}
          <div className="p-8 md:p-12 relative">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              Get in Touch
            </span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-6">
              Let's work together
            </h2>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-400 text-xs uppercase font-bold mb-2">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full bg-[#141118] border border-[#2e2839] rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Abdul"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs uppercase font-bold mb-2">
                  Email
                </label>
                <input
                  name="email"
                  required
                  className="w-full bg-[#141118] border border-[#2e2839] rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="abdulgafurshaattir@gmail.com"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs uppercase font-bold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full bg-[#141118] border border-[#2e2839] rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Tell me about your project..."
                  rows="4"
                ></textarea>
              </div>

              <button
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={result === "Sending..."}
              >
                {result === "Sending..." ? "Sending..." : "Send Message"}
              </button>

              {/* Form Status Message */}
              {result && result !== "Sending..." && (
                <div
                  className={`mt-4 text-sm font-medium ${result.includes("success") ? "text-green-400" : "text-red-400"}`}
                >
                  {result}
                </div>
              )}
            </form>
          </div>

          {/* Right: Info */}
          <div className="bg-[#2e2839]/30 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-bold text-xl mb-6">
                Contact Info
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    location_on
                  </span>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-slate-400 text-sm">
                      Wa, Upper West Region, Ghana
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    mail
                  </span>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-slate-400 text-sm">
                      <a href="mailto:abdulgafurshaattir@gmail.com">
                        abdulgafurshaattir@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    phone
                  </span>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-slate-400 text-sm">
                      <a href="tel:+233547322637">+233 54 732 2637</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  className="w-12 h-12 rounded-full bg-[#141118] border border-[#443b54] flex items-center justify-center text-white hover:text-green-500 hover:border-green-500 hover:scale-110 shadow-lg shadow-transparent hover:shadow-green-500/20 transition-all duration-300"
                  href="https://wa.me/233547322637"
                  target="_blank"
                  rel="noreferrer"
                  title="Chat on WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                <a
                  className="w-12 h-12 rounded-full bg-[#141118] border border-[#443b54] flex items-center justify-center text-white hover:text-[#0a66c2] hover:border-[#0a66c2] hover:scale-110 shadow-lg shadow-transparent hover:shadow-[#0a66c2]/20 transition-all duration-300"
                  href="https://www.linkedin.com/in/abdul-gafur-saeed-b26434246/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  className="w-12 h-12 rounded-full bg-[#141118] border border-[#443b54] flex items-center justify-center text-white hover:text-white hover:border-white hover:scale-110 shadow-lg shadow-transparent hover:shadow-white/20 transition-all duration-300"
                  href="https://github.com/Abdul-Gafur"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/233547322637"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 lg:bottom-10 right-6 lg:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 animate-bounce"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </section>
  );
}
