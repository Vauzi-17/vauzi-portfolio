"use client";

import { motion } from "framer-motion";
import { container, item, hero } from "@/lib/animations";

import Navbar from "@/components/Navbar";
import RadialGlow from "@/components/RadialGlow";
import Social from "@/components/Social";
import Cv from "@/components/Cv";
import Foto from "@/components/Foto";
import See from "@/components/See";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />

      <RadialGlow className="bg-main">
        <motion.main
          variants={container}
          initial="hidden"
          animate="show"
          className="
            flex min-h-screen flex-col items-center justify-center
            px-6 space-y-6 pb-24
          "
        >
          <motion.div variants={item}>
            <Foto />
          </motion.div>

          <motion.h1 variants={hero} className="text-4xl font-bold text-center text-main">
            Vauzi Tri Utomo
          </motion.h1>

          <motion.h2 variants={hero} className="text-lg font-semibold text-center text-muted">
            Web Developer Student | Aspiring Full Stack Developer
          </motion.h2>

          <motion.p variants={hero} className="text-lg max-w-lg text-center md:text-justify leading-relaxed text-muted">
            I am a web programming student passionate about building engaging
            and useful web applications. I continuously learn new technologies
            to improve my skills and stay updated with industry trends.
          </motion.p>

          <Stats />

          <motion.div variants={item}>
            <Social />
          </motion.div>

          <motion.div variants={item} className="flex gap-6 flex-wrap justify-center">
            <Cv />
            <See />
          </motion.div>
        </motion.main>
      </RadialGlow>
    </>
  );
}