import Image from "next/image";
import { CONTACT, IMAGES, QUALIFICATIONS } from "@/lib/content";

export default function AboutEwa() {
  return (
    <section id="ueber-ewa" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-8 sm:gap-12 items-start">
        <div className="rounded-2xl overflow-hidden aspect-[3/4] relative bg-gray-100 max-w-sm mx-auto w-full md:max-w-none">
          <Image
            src={IMAGES.ewaProfile}
            alt="Ewa Gdaniec — Personal Trainerin Berlin"
            fill
            className="object-cover object-top"
          />
        </div>

        <div>
          <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Über Ewa</p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-4">
            Mehr als ein Trainingsprogramm.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Ich bin Ewa — 46 Jahre, Mutter zweier Kinder und seit meinem 16. Lebensjahr leidenschaftlich
            im Fitness aktiv. Was als Hobby begann, wurde zu meinem Beruf und meiner Berufung.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Seit <strong className="text-gray-900">15 Jahren selbstständig</strong> als Personal Trainerin —
            heute in meinem eigenen kleinen Studio im Herzen von Friedrichshain.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Mein Ansatz: Fitness ist kein körperlicher Prozess allein. Es ist eine{" "}
            <strong className="text-gray-900">Reise zu mehr Wohlbefinden</strong> — mit Training,
            Ernährung und dem richtigen Mindset.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {QUALIFICATIONS.map((q) => (
              <span
                key={q}
                className="bg-gray-100 border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {q}
              </span>
            ))}
          </div>

          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 bg-brand text-white text-sm font-bold px-5 sm:px-6 py-3.5 rounded-lg hover:bg-red-600 transition-colors"
          >
            📞 Ruf mich an — kostenlos &amp; unverbindlich
          </a>
        </div>
      </div>
    </section>
  );
}
