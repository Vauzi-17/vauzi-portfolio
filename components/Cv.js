"use client";

import Link from "next/link";

export default function Cv() {
  return (
    <Link
      href="/CV.pdf"
      target="_blank"
      className="inline-block px-6 py-3 
                 bg-white text-black 
                 border-2 border-white 
                 rounded-lg font-semibold 
                 transition-all duration-300
                 hover:bg-black hover:text-white text-center"
    >
      Download CV
    </Link>
  );
}

