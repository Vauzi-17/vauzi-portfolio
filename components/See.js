"use client";

import Link from "next/link";

export default function See() {
  return (
    <Link
      href="/projects"
      className="
        inline-block px-6 py-3 rounded-lg font-semibold text-center
        transition-all duration-300 border

        bg-card text-main border-main
        hover:opacity-50 transition
      "
    >
      See My Work
    </Link>
  );
}
