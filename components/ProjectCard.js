"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="
        group cursor-pointer rounded-2xl overflow-hidden
        transition-all duration-500 
        bg-card border border-main/20
        hover:border-main/40
        shadow-lg hover:shadow-2xl hover:shadow-main/10
        backdrop-blur-sm
      "
    >
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden h-48">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />
        {/* Gradient Overlay */}
        <div className="
          absolute inset-0 bg-gradient-to-t 
          from-card/90 via-card/20 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        " />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h2 className="text-xl font-bold text-main group-hover:text-main/90 transition-colors duration-300">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack with Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.split(',').map((tech, index) => (
            <span
              key={index}
              className="
                px-3 py-1 text-xs font-medium
                bg-main/10 text-main
                rounded-full
                border border-main/20
                transition-all duration-300
                hover:bg-main/20
              "
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* View More Indicator */}
        <div className="
          flex items-center gap-2 text-xs font-medium text-main
          opacity-0 group-hover:opacity-100
          transition-all duration-300
          transform translate-y-2 group-hover:translate-y-0
        ">
          <span>View Details</span>
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}