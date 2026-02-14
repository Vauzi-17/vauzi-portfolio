"use client";

import { motion } from "framer-motion";
import { container, item } from "@/lib/animations";
import Navbar from "@/components/Navbar";
import Foto from "@/components/Foto";

export default function About() {

  const skills = [
    { name: "Next.js", level: 75 },
    { name: "React", level: 70 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Unity", level: 65 },
    { name: "JavaScript", level: 75 },
  ];

  return (
    <>
      <Navbar />

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="min-h-screen px-6 py-24 flex flex-col items-center space-y-20"
      >
        {/* Title */}
        <motion.h1
          variants={item}
          className="text-4xl font-bold text-center"
        >
          About Me
        </motion.h1>

        {/* Profile Section */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row items-center gap-12 max-w-5xl"
        >
          <Foto />

          <div className="max-w-xl space-y-6">
            <p className="text-gray-400 leading-relaxed text-justify">
              Halo, saya Vauzi Tri Utomo. Saya memiliki minat besar dalam
              pengembangan web dan game. Saya suka membangun sesuatu dari nol
              hingga menjadi aplikasi yang bisa digunakan orang lain.
            </p>

            <p className="text-gray-400 leading-relaxed text-justify">
              Saat ini saya fokus belajar Next.js, React, serta pengembangan
              game menggunakan Unity. Saya terus berusaha meningkatkan skill
              dan memahami konsep secara mendalam.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={item}
          className="w-full max-w-3xl"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">
            My Skills
          </h2>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span className="text-sm text-gray-400">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-neutral-800 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-2 bg-white rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.main>
    </>
  );
}
