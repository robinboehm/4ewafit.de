export default function VideoSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Ewa in Aktion</p>
        <h2 className="text-3xl font-black tracking-tight leading-tight mb-3">
          Schau dir an,<br />wie ich arbeite.
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-8">
          Ein erster Einblick in meinen Trainingsstil — damit du weißt, was dich erwartet, bevor du anrufst.
        </p>
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube-nocookie.com/embed/kWENAw96ETE?rel=0&modestbranding=1"
            title="Ewa Gdaniec — 4EWAFIT Personal Training Berlin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
