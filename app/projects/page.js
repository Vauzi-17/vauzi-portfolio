"use client";

import { motion } from "framer-motion";
import { container, item } from "@/lib/animations";

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {

  const projects = [
    {
      title: "Makronix",
      description: "Website mempromosikan produk makanan yaitu makroni pedas dengan desain yang menarik dan responsif.",
      tech: "html • css • js",
      image: "/makronix.png",
      link: "https://github.com/Vauzi-17/makronix",
    },
    {
      title: "My Celengan",
      description: "Aplikasi Android untuk membantu orang dalam mengelola keuangan pribadi dengan fitur pencatatan pengeluaran, pemasukan, dan pembuatan anggaran.",
      tech: "Kotlin • Android Studio",
      image: "/mycelengan.jpeg",
      link: "https://github.com/Vauzi-17/MyCelengan/",
    },
    {
      title: "Sentinel",
      description: "Website berisi list game pc dengan desain yang menarik dan responsif.",
      tech: "html • css • js",
      image: "/sentinel.png",
      link: "https://github.com/Vauzi-17/Sentinel",
    },{
      title: "Tic Cat Dog",
      description: "Game tic-tac-toe dengan tema kucing dan anjing, menggunakan HTML, CSS, dan JavaScript untuk membuat permainan yang interaktif dan menyenangkan.",
      tech: "html • css • js",
      image: "/TicCatDog.png",
      link: "https://github.com/Vauzi-17/TicCatDog",
    },
  ];

  return (
    <>
      <Navbar />

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="min-h-screen px-6 py-24"
      >
        <motion.h1
          variants={item}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h1>

        <motion.div
          variants={item}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-24"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

      </motion.main>
    </>
  );
}
