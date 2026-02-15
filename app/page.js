"use client";

import { motion } from "framer-motion";
import { container, item } from "@/lib/animations";

import Navbar from "@/components/Navbar";
import Social from "@/components/Social";
import Cv from "@/components/Cv";
import Foto from "@/components/Foto";
import See from "@/components/See";

export default function Home() {
return (
<>
  <Navbar />

  <motion.main variants={container} initial="hidden" animate="show"
    className="flex min-h-screen flex-col items-center justify-center px-6 space-y-6 pb-24">
    <motion.div variants={item}>
      <Foto />
    </motion.div>

    <motion.h1 variants={item} className="text-4xl font-bold text-center">
      Vauzi Tri Utomo
    </motion.h1>

    <motion.h1 variants={item} className="text-lg text-gray-400 font-bold text-center">
      Web Developer Student | Aspiring Full Stack Developer
    </motion.h1>

    <motion.p variants={item} className="text-lg text-gray-600 max-w-lg text-justify leading-relaxed">
      I am a web programming student passionate about building engaging and useful web applications. I continuously learn new technologies to improve my skills and stay updated with industry trends.
    </motion.p>

    <motion.div variants={item}>
      <Social />
    </motion.div>

    <motion.div variants={item} className="flex gap-6">
      <Cv />
      <See />
    </motion.div>



  </motion.main>
</>
);
}