"use client";

import { motion } from "framer-motion";
import { container, item } from "@/lib/animations";

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {

  const projects = [
    {
      title: "Makronix",
      description: "The website promotes food products, namely spicy macaroni, with an attractive and responsive design.",
      tech: "html • css • js",
      image: "/makronix.png",
      link: "https://github.com/Vauzi-17/makronix",
    },
    {
      title: "My Celengan",
      description: "An Android application to help people manage their personal finances with features for recording expenses, income, and creating budgets.",
      tech: "Kotlin • Android Studio",
      image: "/mycelengan.jpeg",
      link: "https://github.com/Vauzi-17/MyCelengan/",
    },
    {
      title: "Sentinel",
      description: "The website contains a list of PC games with attractive and responsive designs.",
      tech: "html • css • js",
      image: "/sentinel.png",
      link: "https://github.com/Vauzi-17/Sentinel",
    },{
      title: "Tic Cat Dog",
      description: "Game tic-tac-toe with a cat and dog theme, using HTML, CSS, and JavaScript to create an interactive and fun game.",
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
          className="text-4xl font-bold text-center mb-6"
        >
          My Projects
        </motion.h1>
        <motion.p
          variants={item}
          className="text-base text-center mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          A collection of web applications and development projects that showcase my skills in front end and back end technologies. These projects reflect my ability to solve problems, build functional systems, and create user friendly digital experiences.
        </motion.p>

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
