import { CONTACT } from "@/lib/content";

export default function CtaBlock() {
  return (
    <section className="bg-brand py-12 sm:py-16 px-4 sm:px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-3">
          Bereit für deinen<br />ersten Schritt?
        </h2>
        <p className="text-sm sm:text-base text-white/80 mb-8">
          Ruf einfach an — kein Formular, keine Wartezeit, kein Stress.
        </p>
        <a
          href={CONTACT.phoneHref}
          className="inline-flex items-center gap-3 bg-white text-brand text-xl sm:text-3xl font-black px-6 sm:px-10 py-4 sm:py-5 rounded-2xl hover:bg-gray-50 transition-colors mb-4 whitespace-nowrap"
        >
          <span>📞</span>
          <span>{CONTACT.phone}</span>
        </a>
        <p className="text-sm text-white/60">Auch WhatsApp</p>
      </div>
    </section>
  );
}
