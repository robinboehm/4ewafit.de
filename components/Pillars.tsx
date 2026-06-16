import { PILLARS } from "@/lib/content";

export default function Pillars() {
  return (
    <section id="angebote" className="py-16 px-6 bg-dark-bg text-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Mein Ansatz</p>
        <h2 className="text-3xl font-black tracking-tight leading-tight text-white mb-3">
          Drei Säulen.<br />Ein Ziel: Du.
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed max-w-xl mb-10">
          Ich arbeite nicht mit Standardprogrammen. Alle Kundinnen bekommen ein Coaching das zu ihrem Leben passt.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="bg-dark-card rounded-xl p-6 border border-white/5">
              <span className="text-3xl block mb-3">{pillar.icon}</span>
              <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
