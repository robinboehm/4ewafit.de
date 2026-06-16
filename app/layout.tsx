import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "4EWAFIT – Personal Training Berlin Friedrichshain | Ewa Gdaniec",
  description:
    "Personal Training in Berlin mit Ewa Gdaniec — 15 Jahre Erfahrung, eigenes Studio in Friedrichshain. Training, Ernährung & mentale Stärke für Einsteiger:innen. Jetzt anrufen: +49 170 2955734",
  keywords: [
    "Personal Training Berlin",
    "Personal Trainerin Berlin Friedrichshain",
    "Fitness Einsteiger Berlin",
    "Ewa Gdaniec",
    "4ewafit",
  ],
  openGraph: {
    title: "4EWAFIT – Personal Training Berlin",
    description: "15 Jahre Erfahrung. Eigenes Studio. Für Einsteiger:innen.",
    url: "https://www.4ewafit.de",
    siteName: "4EWAFIT",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
