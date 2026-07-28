import { asc } from "drizzle-orm";
import { db } from "@/db";
import { businesses, characters, episodes, fallen, locations, quotes } from "@/db/schema";
import { BUSINESSES, CHARACTERS, FALLEN, LOCATIONS, QUOTES } from "@/lib/data";
import { EPISODES } from "@/lib/episodes";

export interface StoreData {
  characters: (typeof characters.$inferSelect)[];
  episodes: (typeof episodes.$inferSelect)[];
  quotes: (typeof quotes.$inferSelect)[];
  businesses: (typeof businesses.$inferSelect)[];
  locations: (typeof locations.$inferSelect)[];
  fallen: (typeof fallen.$inferSelect)[];
}

let seeded = false;

async function ensureSeeded() {
  if (seeded) return;
  const existing = await db.select({ id: characters.id }).from(characters).limit(1);
  if (existing.length === 0) {
    await db.insert(characters).values(CHARACTERS);
    await db.insert(episodes).values(EPISODES);
    await db.insert(quotes).values(QUOTES);
    await db.insert(businesses).values(BUSINESSES);
    await db.insert(locations).values(LOCATIONS);
    await db.insert(fallen).values(FALLEN);
  }
  seeded = true;
}

/** Loads everything from Postgres, seeding on first run.
 *  Falls back to in-memory data if the DB is unreachable so the site never dies. */
export async function getAllData(): Promise<StoreData> {
  try {
    await ensureSeeded();
    const [c, e, q, b, l, f] = await Promise.all([
      db.select().from(characters).orderBy(asc(characters.sortOrder)),
      db.select().from(episodes).orderBy(asc(episodes.season), asc(episodes.episode)),
      db.select().from(quotes).orderBy(asc(quotes.id)),
      db.select().from(businesses).orderBy(asc(businesses.sortOrder)),
      db.select().from(locations).orderBy(asc(locations.sortOrder)),
      db.select().from(fallen).orderBy(asc(fallen.sortOrder)),
    ]);
    return { characters: c, episodes: e, quotes: q, businesses: b, locations: l, fallen: f };
  } catch (err) {
    console.error("[store] DB unavailable, falling back to bundled data:", err);
    let id = 0;
    return {
      characters: CHARACTERS.map((c) => ({ id: ++id, ...c })),
      episodes: EPISODES.map((e, i) => ({ id: i + 1, ...e })),
      quotes: QUOTES.map((q, i) => ({ id: i + 1, ...q })),
      businesses: BUSINESSES.map((b, i) => ({ id: i + 1, ...b })),
      locations: LOCATIONS.map((l, i) => ({ id: i + 1, ...l })),
      fallen: FALLEN.map((f, i) => ({ id: i + 1, ...f })),
    };
  }
}
