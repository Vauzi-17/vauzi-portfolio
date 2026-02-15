"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="cursor-pointer bg-neutral-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg transition"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3">
          {project.title}
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        <p className="text-xs text-gray-500">
          {project.tech}
        </p>
      </div>
    </motion.div>
  );
}
