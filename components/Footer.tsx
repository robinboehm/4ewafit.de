import Image from "next/image";
import Link from "next/link";
import { CONTACT, IMAGES } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-gray-500 py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm">
        <Image
          src={IMAGES.logo}
          alt="4EWAFIT"
          width={180}
          height={72}
          className="h-16 w-auto object-contain brightness-0 invert opacity-80"
        />
        <div className="text-xs sm:text-sm">
          {CONTACT.addressShort} ·{" "}
          <a href={`mailto:${CONTACT.email}`} className="hover:text-gray-300 transition-colors">
            {CONTACT.email}
          </a>
        </div>
        <a
          href="https://www.personalfitness.de/suche/trainer/6370/ewa-gdaniec-berlin.html"
          title="Kundenbewertungen & Erfahrungen zu Ewa Gdaniec. Mehr Infos anzeigen."
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.personalfitness.de/embleme/6370.png"
            alt="Erfahrungen & Bewertungen zu Ewa Gdaniec"
            width={120}
            height={137}
            style={{ border: 0 }}
          />
        </a>
        <div className="flex gap-4">
          <Link href="/impressum" className="hover:text-gray-300 transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
