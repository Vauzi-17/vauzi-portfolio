"use client";

import { motion } from "framer-motion";
import { container, item } from "@/lib/animations";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="min-h-screen px-6 py-24 flex flex-col items-center"
      >
        <motion.h1
          variants={item}
          className="text-4xl font-bold text-center mb-6"
        >
          Contact Me
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base text-center mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Feel free to reach out if you would like to collaborate, discuss a project, or simply connect. I am open to opportunities and always excited to work on meaningful projects.
        </motion.p>

        <motion.form
          variants={item}
          className="w-full max-w-xl space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-neutral-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-neutral-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 bg-neutral-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-lg border border-white transition hover:bg-black hover:text-white"
          >
            Send Message
          </button>
        </motion.form>
      </motion.main>
    </>
  );
}
