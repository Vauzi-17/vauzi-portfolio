"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 overlay-bg backdrop-blur-sm flex items-center justify-center z-50 p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-5xl
          max-h-[90vh] md:h-auto
          rounded-xl p-5 md:p-8
          flex flex-col md:grid md:grid-cols-2
          gap-6 overflow-y-auto
          bg-card border border-main
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-40 transition text-muted hover:text-main"
        >
          <X size={24} />
        </button>

        {/* Left - Slider */}
        <div className="relative w-full aspect-[16/9] md:max-h-[60vh] rounded-lg bg-main flex items-center justify-center overflow-hidden">
          <Image
            src={project.gallery[current]}
            alt="Project Image"
            fill
            className="object-contain"
          />

          {project.gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="
                  absolute left-4 top-1/2 -translate-y-1/2
                  p-2 rounded-full border border-main
                  bg-card text-main
                  hover:opacity-50 transition
                "
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={nextImage}
                className="
                  absolute right-4 top-1/2 -translate-y-1/2
                  p-2 rounded-full border border-main
                  bg-card text-main
                  hover:opacity-50 transition
                "
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Right - Info */}
        <div className="flex flex-col space-y-6 mt-4 md:mt-0">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold leading-tight text-main">
              {project.title}
            </h2>

            <p className="leading-relaxed text-sm md:text-base text-muted">
              {project.description}
            </p>

            {/* Tech Badge */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.split("•").map((tech, index) => (
                <span
                  key={index}
                  className="
                    text-xs px-3 py-1 rounded-full
                    bg-main border border-main text-muted
                  "
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Button */}
          <div className="border-t border-main pt-6">
            <a
              href={project.link}
              target="_blank"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-lg font-medium
                border border-main
                bg-main text-main
                hover:opacity-50 transition
              "
            >
              View on GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
