import Link from "next/link";
import { CONTACT } from "@/lib/content";

export const metadata = {
  title: "Datenschutz – 4EWAFIT",
};

export default function Datenschutz() {
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
        <h1 className="text-3xl font-black tracking-tight mb-2">Datenschutzerklärung</h1>
        <p className="text-sm text-gray-400 mb-8">Stand: Juni 2026</p>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">1. Verantwortliche Stelle</h2>
          <p className="text-gray-700 leading-relaxed">
            Ewa Gdaniec · 4EWAFIT<br />
            Jungstraße 24 · 10247 Berlin<br />
            E-Mail: <a href={`mailto:${CONTACT.email}`} className="text-brand hover:underline">{CONTACT.email}</a><br />
            Telefon: <a href={CONTACT.phoneHref} className="text-brand hover:underline">{CONTACT.phone}</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Beim Besuch unserer Website werden automatisch Informationen durch den Browser übermittelt
            und in Server-Logfiles gespeichert:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-2">
            <li>Browsertyp und -version</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer-URL (die zuvor besuchte Seite)</li>
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            Diese Daten werden nicht mit anderen personenbezogenen Daten zusammengeführt.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">3. Kontaktaufnahme</h2>
          <p className="text-gray-700 leading-relaxed">
            Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden die übermittelten Daten
            (Name, E-Mail-Adresse, Nachrichteninhalt) gespeichert, um Ihre Anfrage zu bearbeiten.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">4. YouTube-Videos (No-Cookie-Modus)</h2>
          <p className="text-gray-700 leading-relaxed">
            Diese Website bindet Videos von YouTube über den datenschutzfreundlichen Modus
            (youtube-nocookie.com) ein. YouTube setzt dabei keine Cookies, solange das Video
            nicht abgespielt wird. Beim Abspielen können Daten an Google/YouTube übertragen werden.
            Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">policies.google.com/privacy</a>.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">5. Hosting (GitHub Pages)</h2>
          <p className="text-gray-700 leading-relaxed">
            Diese Website wird auf GitHub Pages (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco,
            CA 94107, USA) gehostet. Beim Aufruf der Seite werden IP-Adressen und andere technische
            Daten an GitHub übermittelt. Weitere Informationen:{" "}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
              GitHub Privacy Statement
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">6. Externe Bilder und Shop</h2>
          <p className="text-gray-700 leading-relaxed">
            Bilder werden von externen Servern (jimcdn.com) geladen. Dabei kann Ihre IP-Adresse
            an die Server dieser Anbieter übermittelt werden. Der Shop (4ewafit.com) ist ein
            eigenständiges Angebot mit eigener Datenschutzerklärung.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">7. Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            Diese Website verwendet keine eigenen Tracking-Cookies oder Analyse-Dienste.
            Es werden ausschließlich technisch notwendige Daten verarbeitet.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">8. Ihre Rechte</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Sie haben gemäß DSGVO folgende Rechte gegenüber uns hinsichtlich Ihrer personenbezogenen Daten:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-2">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-brand hover:underline">{CONTACT.email}</a>
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
            Zuständig für Berlin ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit.
          </p>
        </section>
      </main>

      <footer className="border-t border-gray-100 px-6 py-6 text-center text-sm text-gray-400">
        <Link href="/" className="hover:text-gray-600">4EWAFIT · {CONTACT.addressShort}</Link>
        {" · "}
        <Link href="/impressum" className="hover:text-gray-600">Impressum</Link>
      </footer>
    </div>
  );
}
