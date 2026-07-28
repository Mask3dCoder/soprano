import IntroStatic from "@/components/IntroStatic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BossSection from "@/components/BossSection";
import FamilySection from "@/components/FamilySection";
import CrewSection from "@/components/CrewSection";
import BusinessSection from "@/components/BusinessSection";
import LocationsSection from "@/components/LocationsSection";
import EpisodesSection from "@/components/EpisodesSection";
import QuotesSection from "@/components/QuotesSection";
import DucksSection from "@/components/DucksSection";
import MemorialSection from "@/components/MemorialSection";
import FinaleSection from "@/components/FinaleSection";
import LegacySection from "@/components/LegacySection";
import Footer from "@/components/Footer";
import { Ticker } from "@/components/parts";
import { getAllData } from "@/lib/store";

export const dynamic = "force-dynamic";

const NJ_TICKER = [
  "BARONE SANITATION",
  "SATRIALE’S PORK STORE",
  "BADA BING!",
  "NUOVO VESUVIO",
  "THE EXECUTIVE GAME",
  "GREEN GROVE",
  "PIZZALAND · BELLEVILLE TPKE",
  "HOLSTEN’S · BLOOMFIELD",
  "THE PINE BARRENS",
  "THE ESPLANADE PROJECT",
  "NO-SHOW JOBS AVAILABLE",
  "GABAGOOL",
  "THE STUGOTS",
  "WITSEC · LOCATION UNKNOWN",
];

export default async function Page() {
  const data = await getAllData();

  return (
    <main className="relative">
      <div className="grain-overlay" aria-hidden />
      <div className="vignette" aria-hidden />
      <IntroStatic />
      <Navbar />
      <Hero />

      {/* the turnpike roll-call */}
      <div className="marquee-hover relative z-10 border-y border-crimson/50 bg-blood/85 py-3.5 text-bone shadow-[0_10px_40px_rgba(126,28,23,0.35)]">
        <Ticker items={NJ_TICKER} />
      </div>

      <BossSection />
      <FamilySection characters={data.characters} />
      <CrewSection characters={data.characters} />
      <BusinessSection businesses={data.businesses} />
      <LocationsSection locations={data.locations} />
      <EpisodesSection episodes={data.episodes} />
      <QuotesSection quotes={data.quotes} />
      <DucksSection />
      <MemorialSection fallen={data.fallen} />
      <FinaleSection />
      <LegacySection />
      <Footer />
    </main>
  );
}
