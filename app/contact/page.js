"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { container, item } from "@/lib/animations";
import Navbar from "@/components/Navbar";
import GridLine from "@/components/GridLine";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Failed to send.");
    }
  };

  return (
    <>
      <Navbar />
<GridLine className="bg-main">
      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="min-h-screen px-6 py-24 flex flex-col items-center"
      >
        <motion.h1
          variants={item}
          className="text-4xl font-bold text-center mb-6 text-main"
        >
          Contact Me
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base text-center mb-12 max-w-2xl mx-auto leading-relaxed text-muted"
        >
          Feel free to reach out if you would like to collaborate,
          discuss a project, or simply connect.
        </motion.p>

        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className="w-full max-w-xl space-y-6"
        >
          <div>
            <label className="block text-sm mb-2 text-main">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-lg border transition bg-card border-main text-main focus:outline-none focus:ring-2 focus:ring-[var(--border)]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-main">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 rounded-lg border transition bg-card border-main text-main focus:outline-none focus:ring-2 focus:ring-[var(--border)]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-main">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message..."
              required
              className="w-full px-4 py-3 rounded-lg border transition resize-none bg-card border-main text-main focus:outline-none focus:ring-2 focus:ring-[var(--border)]"
            />
          </div>

          {status === "success" && (
            <p className="text-sm text-green-500 text-center">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500 text-center">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 rounded-lg font-semibold border transition bg-card text-main border-main hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </motion.main>
      </GridLine>
    </>
  );
}