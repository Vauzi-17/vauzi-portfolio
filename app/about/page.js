"use client";

import { motion } from "framer-motion";
import { container, item } from "@/lib/animations";
import Navbar from "@/components/Navbar";
import { Code2, Palette, Braces, Smartphone, Gamepad2 } from "lucide-react";

const skills = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Braces },
  { name: "Kotlin", icon: Smartphone },
  { name: "Unity (Basic)", icon: Gamepad2 },
];

const timeline = [
  {
    year: "2015",
    title: "SD Negeri 2 Pasirmuncang",
    desc: "Beginning a 6-year elementary education journey.",
  },
  {
    year: "2021",
    title: "SMP Negeri 3 Purwokerto",
    desc: "Continuing junior high school education and beginning to explore the world of technology.",
  },
  {
    year: "2024",
    title: "SMK Telkom Purwokerto",
    desc: "Pursuing studies in the Software Engineering program with a focus on web development.",
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      {/* Top color fade */}
      <div className="top-fade" />

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="min-h-screen px-6 py-24 bg-main"
      >
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Title */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold text-center text-main"
          >
            About Me
          </motion.h1>

          {/* Description */}
          <motion.div
            variants={item}
            className="space-y-6 text-muted text-lg leading-relaxed"
          >
            <p>
              Hello, my name is Vauzi Tri Utomo, a software engineering student
              at SMK Telkom Purwokerto with a strong interest in web development.
              I am passionate about transforming ideas into functional and
              impactful web applications.
            </p>
            <p>
              I am currently focused on strengthening my skills in modern web
              development, continuously improving my understanding of fundamental
              concepts, and building projects that are structured, efficient, and
              user-friendly. My goal is to grow into a reliable and skilled web
              developer.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={item} className="space-y-8">
            <h2 className="text-3xl font-semibold text-center text-main">
              Education
            </h2>

            <div className="relative space-y-0">
              {/* Garis vertikal */}
              <div
                className="absolute left-[19px] top-2 bottom-2 w-px"
                style={{ backgroundColor: "var(--border)" }}
              />

              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  {/* Dot */}
                  <div
                    className="relative z-10 mt-1 w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                    style={{
                      backgroundColor: "var(--card)",
                      border: "2px solid var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    {t.year.slice(2)}
                  </div>

                  {/* Konten */}
                  <div
                    className="flex-1 rounded-2xl px-5 py-4"
                    style={{
                      backgroundColor: "var(--card)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: "var(--border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {t.year}
                      </span>
                      <span className="font-semibold text-main">{t.title}</span>
                    </div>
                    <p className="text-sm text-muted">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={item} className="space-y-8">
            <h2 className="text-3xl font-semibold text-center text-main">
              Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="
                      group relative
                      p-6 rounded-2xl border-2 border-main/20
                      bg-linear-to-br from-card to-card/50
                      text-main
                      flex flex-col items-center justify-center gap-3
                      transition-all duration-300
                      hover:border-main hover:-translate-y-2
                      hover:shadow-xl hover:shadow-main/10
                      cursor-pointer
                    "
                  >
                    <Icon
                      className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={2}
                    />
                    <span className="font-semibold text-sm text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </motion.main>
    </>
  );
}