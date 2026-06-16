import Image from "next/image";
import { CONTACT, IMAGES } from "@/lib/content";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        <a href="#" aria-label="4EWAFIT Startseite">
          <Image
            src={IMAGES.logo}
            alt="4EWAFIT Logo"
            width={180}
            height={72}
            className="h-16 w-auto object-contain"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-7">
          <a href="#ueber-ewa" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Über Ewa</a>
          <a href="#studio" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Studio</a>
          <a href="#angebote" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Angebote</a>
          <a href="#preise" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Preise</a>
          <a href="#shop" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Shop</a>
        </div>

        <a
          href={CONTACT.phoneHref}
          className="flex items-center gap-2 bg-brand text-white text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-red-600 transition-colors whitespace-nowrap"
        >
          <span>📞</span>
          <span>Jetzt anrufen</span>
        </a>
      </div>
    </nav>
  );
}
