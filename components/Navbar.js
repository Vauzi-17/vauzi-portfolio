"use client";

import Link from "next/link";
import { Home, User, Folder, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black-900/90 border border-gray-700 backdrop-blur-md px-6 py-3 rounded-full shadow-xl flex gap-8 items-center z-50">

      <NavItem href="/" icon={<Home size={22} />} label="Home" />
      <NavItem href="/" icon={<User size={22} />} label="About" />
      <NavItem href="/projects" icon={<Folder size={22} />} label="Projects" />
      <NavItem href="/" icon={<Mail size={22} />} label="Contact" />

    </div>
  );
}

function NavItem({ href, icon, label }) {
  return (
    <Link href={href} className="group relative flex flex-col items-center text-white">
      
      {icon}

      <span className="absolute -top-8 scale-0 group-hover:scale-100 transition bg-black text-xs px-2 py-1 rounded-md">
        {label}
      </span>

    </Link>
  );
}
