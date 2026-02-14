"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Foto() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ 
        opacity: 1, 
        y: 0,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-8"
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.07 }}
      >
        <Image
          src="/vauzi.png"
          alt="Foto Vauzi"
          width={220}
          height={220}
          className="rounded-full border-4 border-white shadow-xl object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
