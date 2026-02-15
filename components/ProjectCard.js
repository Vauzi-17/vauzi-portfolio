"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      onClick={onClick}
      className="
        cursor-pointer rounded-xl overflow-hidden
        transition-all duration-300 border shadow-md
        bg-card border-main
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3 text-main">
          {project.title}
        </h2>

        <p className="text-sm mb-4 text-muted">
          {project.description}
        </p>

        <p className="text-xs text-muted opacity-80">
          {project.tech}
        </p>
      </div>
    </motion.div>
  );
}
