"use client";

import Link from "next/link";

export default function Cv() {
  return (
    <Link
      href="/CV.pdf"
      target="_blank"
      className="
        inline-block px-6 py-3 rounded-lg font-semibold text-center
        transition-all duration-300 border

        bg-card text-main border-main
        hover:opacity-50 transition
      "
    >
      Download CV
    </Link>
  );
}
