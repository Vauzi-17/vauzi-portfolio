"use client";

import Link from "next/link";

export default function See() {
  return (
    <Link
      href="/projects"
      className="inline-block px-6 py-3 
                 bg-white text-black 
                 border-2 border-white 
                 rounded-lg font-semibold 
                 transition-all duration-300
                 hover:bg-black hover:text-white"
    >
      See My Work
    </Link>
  );
}
