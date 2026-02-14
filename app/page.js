"use client";

import { motion } from "framer-motion";
import { container, item } from "@/lib/animations";

import Navbar from "@/components/Navbar";
import Social from "@/components/Social";
import Cv from "@/components/Cv";
import Foto from "@/components/Foto";

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
      Halo
    </motion.h1>

    <motion.h1 variants={item} className="text-4xl font-bold text-center">
      Aku Vauzi Tri Utomo
    </motion.h1>

    <motion.p variants={item} className="text-lg text-gray-600 max-w-lg text-justify leading-relaxed">
      Aku seorang siswa SMK yang sedang belajar pemrograman web. Aku suka membuat aplikasi web yang menarik dan
      bermanfaat bagi banyak orang. Selain itu, aku juga senang mempelajari teknologi baru dan selalu mengikuti
      perkembangan dunia IT agar tidak tertinggal. Di waktu luang, aku suka bermain game Mobile Legends sebagai hiburan
      sekaligus melatih strategi dan kerja sama tim.
    </motion.p>

    <motion.div variants={item}>
      <Social />
    </motion.div>

    <motion.div variants={item}>
      <Cv />
    </motion.div>

  </motion.main>
</>
);
}