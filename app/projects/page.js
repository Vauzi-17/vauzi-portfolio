"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { container, item } from "@/lib/animations";

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: "Makronix",
      description: "The website promotes food products, namely spicy macaroni, with an attractive and responsive design.",
      tech: "html • css • js",
      image: "/p1/makronix.png",
      gallery: ["/p1/makronix.png", "/p1/makronix2.png", "/p1/makronix3.png"],
      link: "https://github.com/Vauzi-17/makronix",
    },
    {
      title: "My Celengan",
      description: "An Android application to help people manage their personal finances with features for recording expenses, income, and creating budgets.",
      tech: "Kotlin • Android Studio",
      image: "/p2/mycelengan1.jpeg",
      gallery: ["/p2/mycelengan1.jpeg", "/p2/mycelengan2.jpeg", "/p2/mycelengan3.jpeg", "/p2/mycelengan4.jpeg", "/p2/mycelengan5.jpeg"],
      link: "https://github.com/Vauzi-17/MyCelengan/",
    },
    {
      title: "Sentinel",
      description: "The website contains a list of PC games with attractive and responsive designs.",
      tech: "html • css • js",
      image: "/sentinel.png",
      gallery: ["/sentinel.png", "/sentinel.png"],
      link: "https://github.com/Vauzi-17/sentinel",
    },
    {
      title: "Tic Cat Dog",
      description: "Game tic-tac-toe with a cat and dog theme, using HTML, CSS, and JavaScript to create an interactive and fun game.",
      tech: "html • css • js",
      image: "/TicCatDog.png",
      gallery: ["/TicCatDog.png", "/TicCatDog.png"],
      link: "https://github.com/Vauzi-17/TicCatDog",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills.",
      tech: "html • css • js",
      image: "/p5/portfolio1.png",
      gallery: ["/p5/portfolio1.png", "/p5/portfolio2.png", "/p5/portfolio3.png"],
      link: "https://github.com/Vauzi-17/PortfolioVauzi",
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
        <motion.h1 variants={item} className="text-4xl font-bold text-center mb-6">
          My Projects
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base text-center mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          A collection of web applications and development projects that showcase my skills in front end and back end technologies. These projects reflect my ability to solve problems, build functional systems, and create user friendly digital experiences.
        </motion.p>

        <motion.div variants={item} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </motion.div>
      </motion.main>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
