import Link from "next/link";
import { CONTACT } from "@/lib/content";

export const metadata = {
  title: "Impressum – 4EWAFIT",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm font-bold text-brand hover:underline">
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-black tracking-tight mb-8">Impressum</h1>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Angaben gemäß § 5 TMG</h2>
          <p className="text-gray-700 leading-relaxed">
            Ewa Gdaniec<br />
            4EWAFIT<br />
            Jungstraße 24<br />
            10247 Berlin
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Kontakt</h2>
          <p className="text-gray-700 leading-relaxed">
            Telefon: <a href={CONTACT.phoneHref} className="text-brand hover:underline">{CONTACT.phone}</a><br />
            E-Mail: <a href={`mailto:${CONTACT.email}`} className="text-brand hover:underline">{CONTACT.email}</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="text-gray-700 leading-relaxed">
            Berufsbezeichnung: Personal Trainerin, Ernährungsberaterin<br />
            Zuständige Kammer: nicht zutreffend (freier Beruf ohne Kammerpflicht)
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Umsatzsteuer-ID</h2>
          <p className="text-gray-700 leading-relaxed">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
            Auf Anfrage erhältlich.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Streitschlichtung</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            {" "}<a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Haftung für Inhalte</h2>
          <p className="text-gray-700 leading-relaxed">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Haftung für Links</h2>
          <p className="text-gray-700 leading-relaxed">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Urheberrecht</h2>
          <p className="text-gray-700 leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </main>

      <footer className="border-t border-gray-100 px-6 py-6 text-center text-sm text-gray-400">
        <Link href="/" className="hover:text-gray-600">4EWAFIT · {CONTACT.addressShort}</Link>
        {" · "}
        <Link href="/datenschutz" className="hover:text-gray-600">Datenschutz</Link>
      </footer>
    </div>
  );
}
