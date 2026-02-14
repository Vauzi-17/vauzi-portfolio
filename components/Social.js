"use client";

import Link from "next/link";
import { Github, Instagram, Mail, Linkedin } from "lucide-react";

export default function Social() {
  return (
    <div className="flex gap-6">
      <SocialItem 
        href="https://github.com/Vauzi-17"
        icon={<Github size={22} />}
      />

      <SocialItem 
        href="https://instagram.com/vauzitzy"
        icon={<Instagram size={22} />}
      />

      <SocialItem 
        href="mailto:vauzitriutomo5@gmail.com"
        icon={<Mail size={22} />}
      />

      <SocialItem 
        href="https://www.linkedin.com/in/vauzi-tri-utomo-3967b0346"
        icon={<Linkedin size={22} />}
      />
    </div>
  );
}

function SocialItem({ href, icon }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center justify-center 
                 w-12 h-12 rounded-full 
                 bg-neutral-900 border border-gray-700 
                 text-white 
                 hover:bg-white hover:text-black 
                 transition-all duration-300"
    >
      {icon}
    </Link>
  );
}
