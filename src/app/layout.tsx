import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond, Bebas_Neue, Special_Elite, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-garamond",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const typewriter = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-typewriter",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "The Sopranos — An Offer You Can't Scroll Past",
  description:
    "An unofficial fan dossier on the greatest television drama ever made. Six seasons, eighty-six episodes, one family in North Jersey. HBO, 1999–2007.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${garamond.variable} ${bebas.variable} ${typewriter.variable} ${script.variable} antialiased bg-ink text-bone`}
      >
        {children}
      </body>
    </html>
  );
}
