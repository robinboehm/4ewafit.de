import Image from "next/image";
import { CONTACT, IMAGES, NUTRITION_POINTS } from "@/lib/content";

export default function Nutrition() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[6fr_5fr] gap-8 sm:gap-12 items-center">
        <div>
          <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Ernährungsberatung</p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-6">
            Gesund essen —<br />ohne Zwang.
          </h2>
          <div className="flex flex-col gap-5 mb-8">
            {NUTRITION_POINTS.map((point) => (
              <div key={point.title} className="flex gap-3 items-start">
                <div className="w-9 h-9 shrink-0 bg-red-50 rounded-lg flex items-center justify-center text-lg">
                  {point.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{point.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 bg-brand text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            📞 Ernährungsberatung anfragen
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[3/4] relative bg-gray-100 max-w-sm mx-auto w-full md:max-w-none order-first md:order-last">
          <Image
            src={IMAGES.nutrition}
            alt="Ernährungsberatung mit Ewa"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
