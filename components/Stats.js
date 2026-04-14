"use client";

import { motion } from "framer-motion";
import { item } from "@/lib/animations";

const stats = [
  { value: "5+", label: "Projects" },
  { value: "2+", label: "Years Learning" },
  { value: "3", label: "Tech Stacks" },
];

export default function Stats() {
  return (
    <motion.div
      variants={item}
      className="flex gap-8 justify-center flex-wrap"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-2xl font-bold text-main">{stat.value}</p>
          <p className="text-sm text-muted mt-1">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
}