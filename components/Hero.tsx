import Image from "next/image";
import { CONTACT, IMAGES } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-[560px] flex items-end overflow-hidden">
      <Image
        src={IMAGES.heroBg}
        alt="Ewa Gdaniec Personal Training Berlin"
        fill
        className="object-cover object-[center_30%] brightness-50"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 pb-14 pt-10">
        <div className="inline-block bg-brand text-white text-xs font-bold px-3 py-1 rounded tracking-widest uppercase mb-4">
          Personal Training · Berlin Friedrichshain
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight mb-4">
          Dein erster<br />
          Schritt.<br />
          <em className="not-italic text-brand">Jetzt.</em>
        </h1>

        <p className="text-base text-white/80 leading-relaxed max-w-lg mb-8">
          Ewa begleitet Einsteiger:innen — mit 15 Jahren Erfahrung, eigenem Studio
          und einem Plan der wirklich zu dir passt.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-3 bg-brand text-white text-lg font-extrabold px-7 py-4 rounded-xl hover:bg-red-600 transition-colors"
          >
            <span>📞</span>
            <span>{CONTACT.phone}</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-white/60 text-sm underline hover:text-white/90 transition-colors"
          >
            oder schreib eine Mail →
          </a>
        </div>

        <div className="flex gap-7">
          <div>
            <div className="text-2xl font-black text-white leading-none">50×</div>
            <div className="text-xs text-white/50 uppercase tracking-widest mt-0.5">⭐ Bewertungen</div>
          </div>
          <div>
            <div className="text-2xl font-black text-white leading-none">15 J.</div>
            <div className="text-xs text-white/50 uppercase tracking-widest mt-0.5">Erfahrung</div>
          </div>
          <div>
            <div className="text-2xl font-black text-white leading-none">Eigenes</div>
            <div className="text-xs text-white/50 uppercase tracking-widest mt-0.5">Studio Friedrichshain</div>
          </div>
        </div>
      </div>
    </section>
  );
}
