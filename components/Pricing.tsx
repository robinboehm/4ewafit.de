import { CONTACT, PRICING } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="preise" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Preise</p>
        <h2 className="text-3xl font-black tracking-tight leading-tight mb-10">
          Transparent.<br />Kein Kleingedrucktes.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
          {PRICING.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-2xl p-7 border-2 ${
                plan.featured ? "border-brand bg-red-50" : "border-gray-200 bg-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-5 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Beliebt
                </span>
              )}
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{plan.title}</p>
              <p className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-1">
                {plan.price}{" "}
                <span className="text-xl font-normal text-gray-400">{plan.unit}</span>
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mt-2 mb-5">{plan.description}</p>
              <a
                href={CONTACT.phoneHref}
                className={`block text-center py-3 rounded-xl text-sm font-bold transition-colors ${
                  plan.featured
                    ? "bg-brand text-white hover:bg-red-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {plan.featured ? "📞 Platz sichern" : "Termin anfragen"}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400">
          Alle Preise inkl. MwSt. · Coaching ggf. steuerlich absetzbar.
        </p>
      </div>
    </section>
  );
}
