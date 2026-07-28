import { pgTable, serial, integer, text, boolean } from "drizzle-orm/pg-core";

export const characters = pgTable("characters", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  aliases: text("aliases").notNull().default(""),
  actor: text("actor").notNull().default(""),
  role: text("role").notNull().default(""),
  faction: text("faction").notNull().default("crew"), // blood | crew | newyork | civilians
  status: text("status").notNull().default("active"), // active | whacked | deceased | prison | retired | missing
  blurb: text("blurb").notNull().default(""),
  quote: text("quote").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const episodes = pgTable("episodes", {
  id: serial("id").primaryKey(),
  season: integer("season").notNull(),
  episode: integer("episode").notNull(),
  title: text("title").notNull(),
  synopsis: text("synopsis").notNull().default(""),
  notable: boolean("notable").notNull().default(false),
});

export const quotes = pgTable("quotes", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  author: text("author").notNull(),
  source: text("source").notNull().default(""),
});

export const businesses = pgTable("businesses", {
  id: serial("id").primaryKey(),
  front: text("front").notNull(),
  cover: text("cover").notNull().default(""),
  actual: text("actual").notNull().default(""),
  take: text("take").notNull().default(""),
  risk: text("risk").notNull().default("low"),
  status: text("status").notNull().default("active"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  tag: text("tag").notNull().default(""),
  description: text("description").notNull().default(""),
  trivia: text("trivia").notNull().default(""),
  image: text("image"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const fallen = pgTable("fallen", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  epitaph: text("epitaph").notNull().default(""),
  seasons: text("seasons").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
});
