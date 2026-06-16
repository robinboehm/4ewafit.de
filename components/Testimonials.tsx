import { REVIEWS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Kundenstimmen</p>
        <h2 className="text-3xl font-black tracking-tight leading-tight mb-10">
          Was andere sagen.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {REVIEWS.map((review) => (
            <div key={review.author} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <span className="inline-block bg-brand text-white text-xs font-bold px-2 py-0.5 rounded mb-2 uppercase tracking-wide">
                Verifiziert
              </span>
              <div className="text-brand text-sm tracking-widest mb-1">★★★★★</div>
              <p className="text-sm text-gray-600 leading-relaxed italic mb-3">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs font-bold text-gray-900">{review.author}</p>
              <p className="text-xs text-gray-400">{review.date}</p>
            </div>
          ))}
        </div>
        <div className="text-center bg-gray-50 rounded-xl py-4 text-sm text-gray-500 border border-gray-100">
          <strong className="text-gray-900 text-base">50</strong> Bewertungen · alle 5 Sterne ·{" "}
          <a
            href="https://www.personalfitness.de/suche/trainer/6370/ewa-gdaniec-berlin.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            auf personalfitness.de
          </a>
        </div>
      </div>
    </section>
  );
}
