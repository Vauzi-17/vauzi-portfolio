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
        className="min-h-screen px-6 py-24 flex flex-col items-center bg-main"
      >
        {/* Title */}
        <motion.h1
          variants={item}
          className="text-4xl font-bold text-center mb-6 text-main"
        >
          Contact Me
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-base text-center mb-12 max-w-2xl mx-auto leading-relaxed text-muted"
        >
          Feel free to reach out if you would like to collaborate,
          discuss a project, or simply connect.
        </motion.p>

        {/* Form */}
        <motion.form
          variants={item}
          className="w-full max-w-xl space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-main">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="
                w-full px-4 py-3 rounded-lg border transition
                bg-card border-main text-main
                focus:outline-none focus:ring-2 focus:ring-[var(--border)]
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-main">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="
                w-full px-4 py-3 rounded-lg border transition
                bg-card border-main text-main
                focus:outline-none focus:ring-2 focus:ring-[var(--border)]
              "
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2 text-main">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="
                w-full px-4 py-3 rounded-lg border transition resize-none
                bg-card border-main text-main
                focus:outline-none focus:ring-2 focus:ring-[var(--border)]
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full py-3 rounded-lg font-semibold border transition
              bg-card text-main border-main
              hover:opacity-50 transition
            "
          >
            Send Message
          </button>
        </motion.form>
      </motion.main>
    </>
  );
}
