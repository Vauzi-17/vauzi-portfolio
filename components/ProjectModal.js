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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-neutral-900 border border-gray-700 w-full max-w-5xl 
           h-[90vh] md:h-auto
           rounded-xl p-6 md:p-8
           flex flex-col md:grid md:grid-cols-2 
           gap-6 overflow-y-auto"

            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-40"
                >
                    <X size={24} />
                </button>

                {/* Left - Slider */}
                <div className="relative w-full max-h-[60vh] overflow-y-auto rounded-lg bg-black flex justify-center">
                    <Image
                        src={project.gallery[current]}
                        alt="Project Image"
                        width={600}
                        height={1000}
                        className="object-contain w-auto h-auto"
                    />

                    {/* Left & Right Arrow */}
                    {project.gallery.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 
                   bg-black/60 p-2 rounded-full 
                   hover:bg-white hover:text-black 
                   transition"
                            >
                                <ChevronLeft size={22} />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 
                   bg-black/60 p-2 rounded-full 
                   hover:bg-white hover:text-black 
                   transition"
                            >
                                <ChevronRight size={22} />
                            </button>
                        </>
                    )}
                </div>


                {/* Right - Info */}
                <div className="flex flex-col justify-between h-full space-y-8">

                    {/* Top Content */}
                    <div className="space-y-5">
                        <h2 className="text-3xl font-bold leading-tight">
                            {project.title}
                        </h2>

                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                            {project.description}
                        </p>

                        {/* Tech Badge */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.tech.split("•").map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-3 py-1 bg-neutral-800 border border-gray-700 rounded-full"
                                >
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                    

                    {/* Bottom Button */}
                  <div className="border-t border-gray-600 pt-6">

                        <a
                            href={project.link}
                            target="_blank"
                            className="inline-flex items-center justify-center 
                 px-6 py-3 
                 border border-white 
                 text-white 
                 rounded-lg 
                 font-medium
                 transition 
                 hover:bg-white hover:text-black"
                        >
                            View on GitHub
                        </a>
                    </div>

                </div>

            </motion.div>
        </motion.div>
    );
}
