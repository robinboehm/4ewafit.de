import Image from "next/image";
import { CONTACT, SHOP_PRODUCTS } from "@/lib/content";

export default function Shop() {
  return (
    <section id="shop" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-6 sm:mb-8">
          <div>
            <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">4EWAFIT Shop</p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">Mehr als Training.</h2>
          </div>
          <a
            href={CONTACT.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto flex items-center gap-2 bg-gray-900 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap"
          >
            Zum Shop →
          </a>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-8">
          Im Shop findest du ausgewählte Produkte — von Online-Coaching direkt mit Ewa bis hin zu
          natürlichen Beautyprodukten die von innen heraus wirken.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {SHOP_PRODUCTS.map((product) => (
            <a
              key={product.name}
              href={CONTACT.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow block"
            >
              <div className="aspect-square relative bg-gray-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-brand uppercase tracking-widest mb-1">{product.category}</p>
                <p className="text-sm font-bold text-gray-900 leading-snug mb-2">{product.name}</p>
                <p className="text-base font-black text-gray-900 mb-3">{product.price}</p>
                <p className="text-center bg-gray-900 text-white text-xs font-bold py-2 rounded-lg">
                  Im Shop ansehen →
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-6 bg-gray-50 rounded-xl p-4 flex items-center gap-3 border border-gray-100 text-sm text-gray-500">
          <span className="text-xl">🛒</span>
          <span>
            Alle Produkte:{" "}
            <a
              href={CONTACT.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              4ewafit.com
            </a>{" "}
            — sicher, einfach, direkt.
          </span>
        </div>
      </div>
    </section>
  );
}
