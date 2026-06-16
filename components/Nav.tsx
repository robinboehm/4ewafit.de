"use client";

import Image from "next/image";
import { useState } from "react";
import { CONTACT, IMAGES } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#ueber-ewa", label: "Über Ewa" },
    { href: "#studio", label: "Studio" },
    { href: "#angebote", label: "Angebote" },
    { href: "#preise", label: "Preise" },
    { href: "#shop", label: "Shop" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <a href="#" aria-label="4EWAFIT Startseite">
          <Image
            src={IMAGES.logo}
            alt="4EWAFIT Logo"
            width={180}
            height={72}
            className="h-12 sm:h-16 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 bg-brand text-white text-sm font-bold px-3 sm:px-4 py-2.5 rounded-lg hover:bg-red-600 transition-colors whitespace-nowrap"
          >
            <span>📞</span>
            <span className="hidden sm:inline">Jetzt anrufen</span>
            <span className="sm:hidden">{CONTACT.phone}</span>
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menü öffnen"
          >
            <div className="w-5 h-0.5 bg-gray-700 mb-1.5 transition-all" style={open ? { transform: "rotate(45deg) translate(3px, 3px)" } : {}} />
            <div className="w-5 h-0.5 bg-gray-700 mb-1.5 transition-all" style={open ? { opacity: 0 } : {}} />
            <div className="w-5 h-0.5 bg-gray-700 transition-all" style={open ? { transform: "rotate(-45deg) translate(3px, -3px)" } : {}} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-gray-700 font-medium py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
