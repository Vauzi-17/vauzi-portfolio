"use client";

import { motion } from "framer-motion";
import { container, item, hero } from "@/lib/animations";

import Navbar from "@/components/Navbar";
import Social from "@/components/Social";
import Cv from "@/components/Cv";
import Foto from "@/components/Foto";
import See from "@/components/See";

export default function Home() {
  return (
    <>
      <Navbar />

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="
          flex min-h-screen flex-col items-center justify-center
          px-6 space-y-6 pb-24
          bg-main
        "
      >
        {/* Foto */}
        <motion.div variants={item}>
          <Foto />
        </motion.div>

        {/* Nama */}
        <motion.h1
          variants={hero}
          className="text-4xl font-bold text-center text-main"
        >
          Vauzi Tri Utomo
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={hero}
          className="text-lg font-semibold text-center text-muted"
        >
          Web Developer Student | Aspiring Full Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={hero}
          className="
            text-lg max-w-lg text-center md:text-justify
            leading-relaxed text-muted
          "
        >
          I am a web programming student passionate about building engaging
          and useful web applications. I continuously learn new technologies
          to improve my skills and stay updated with industry trends.
        </motion.p>

        {/* Social */}
        <motion.div variants={item}>
          <Social />
        </motion.div>

        {/* Buttons */}
        <motion.div variants={item} className="flex gap-6 flex-wrap justify-center">
          <Cv />
          <See />
        </motion.div>
      </motion.main>
    </>
  );
}
