import { CONTACT } from "@/lib/content";

export default function CtaBlock() {
  return (
    <section className="bg-brand py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-black text-white tracking-tight leading-tight mb-3">
          Bereit für deinen<br />ersten Schritt?
        </h2>
        <p className="text-base text-white/80 mb-8">
          Ruf einfach an — kein Formular, keine Wartezeit, kein Stress.
        </p>
        <a
          href={CONTACT.phoneHref}
          className="inline-flex items-center gap-4 bg-white text-brand text-3xl font-black px-10 py-5 rounded-2xl hover:bg-gray-50 transition-colors mb-4"
        >
          <span>📞</span>
          <span>{CONTACT.phone}</span>
        </a>
        <p className="text-sm text-white/60">Mo–Fr · 8–20 Uhr · Auch WhatsApp</p>
      </div>
    </section>
  );
}
