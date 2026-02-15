"use client";

import { motion } from "framer-motion";
import { container, item } from "@/lib/animations";
import Navbar from "@/components/Navbar";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Kotlin",
    "Unity (Basic)",
  ];

  return (
    <>
      <Navbar />

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
              Hello, my name is Vauzi Tri Utomo. I have a strong passion for web and game development. I truly enjoy building something from the ground up and transforming it into an application that can be used and appreciated by many people.
            </p>

            <p>
              Currently, I am focusing on learning web development and basic game development using Unity. In addition, I am also exploring Android development with Kotlin in Android Studio. I am continuously improving my skills and deepening my understanding of core concepts step by step, striving to become a better and more capable developer each day.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={item} className="space-y-8">
            <h2 className="text-3xl font-semibold text-center text-main">
              Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="
                    p-6 rounded-xl border border-main
                    bg-card text-main
                    text-center font-medium
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                  "
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.main>
    </>
  );
}