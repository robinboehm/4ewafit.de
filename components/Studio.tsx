import Image from "next/image";
import { CONTACT, IMAGES } from "@/lib/content";

export default function Studio() {
  const [img1, img2, img3, img4] = IMAGES.studio;

  return (
    <section id="studio" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Mein Studio</p>
        <h2 className="text-3xl font-black tracking-tight leading-tight mb-3">
          Dein eigener Raum.<br />Mitten in Friedrichshain.
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-8">
          Kein großes Gym-Chaos. Mein Studio gehört während des Trainings nur dir.
        </p>

        <div className="grid grid-cols-3 grid-rows-2 gap-2.5">
          <div className="col-span-2 rounded-xl overflow-hidden aspect-video relative bg-gray-200">
            <Image src={img1} alt="Studio Übersicht" fill className="object-cover" />
          </div>
          <div className="row-span-2 rounded-xl overflow-hidden relative bg-gray-200" style={{ aspectRatio: "2/3" }}>
            <Image src={img2} alt="Studio Detail" fill className="object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative bg-gray-200">
            <Image src={img3} alt="Studio" fill className="object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative bg-gray-200">
            <Image src={img4} alt="Studio" fill className="object-cover" />
          </div>
        </div>

        <div className="mt-6 bg-white rounded-xl p-4 flex items-center gap-4 border border-gray-100">
          <span className="text-2xl">📍</span>
          <div>
            <p className="text-sm font-bold text-gray-900">4EWAFIT Studio</p>
            <p className="text-sm text-gray-500">{CONTACT.addressShort} · Dusche vorhanden</p>
          </div>
        </div>
      </div>
    </section>
  );
}
