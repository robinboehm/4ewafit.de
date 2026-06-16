import Image from "next/image";
import { CONTACT, IMAGES } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-gray-500 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm">
        <Image
          src={IMAGES.logo}
          alt="4EWAFIT"
          width={120}
          height={48}
          className="h-10 w-auto object-contain brightness-0 invert opacity-80"
        />
        <div>
          {CONTACT.addressShort} ·{" "}
          <a href={`mailto:${CONTACT.email}`} className="hover:text-gray-300 transition-colors">
            {CONTACT.email}
          </a>
        </div>
        <div className="flex gap-4">
          <a href="/impressum" className="hover:text-gray-300 transition-colors">Impressum</a>
          <a href="/datenschutz" className="hover:text-gray-300 transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
