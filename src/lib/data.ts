export interface CharacterSeed {
  name: string;
  aliases: string;
  actor: string;
  role: string;
  faction: "blood" | "crew" | "newyork" | "civilians";
  status: "active" | "whacked" | "deceased" | "prison" | "retired" | "missing";
  blurb: string;
  quote: string;
  sortOrder: number;
}

export interface QuoteSeed {
  text: string;
  author: string;
  source: string;
}

export interface BusinessSeed {
  front: string;
  cover: string;
  actual: string;
  take: string;
  risk: "low" | "moderate" | "high" | "federal";
  status: "active" | "seized" | "torched" | "folded";
  sortOrder: number;
}

export interface LocationSeed {
  name: string;
  tag: string;
  description: string;
  trivia: string;
  image: string | null;
  sortOrder: number;
}

export interface FallenSeed {
  name: string;
  epitaph: string;
  seasons: string;
  sortOrder: number;
}

/* ──────────────────────────── THE PEOPLE ──────────────────────────── */

export const CHARACTERS: CharacterSeed[] = [
  {
    name: "Carmela Soprano",
    aliases: "Carm, Mel",
    actor: "Edie Falco",
    role: "The Boss's Wife · North Caldwell",
    faction: "blood",
    status: "active",
    blurb: "Keeper of the house on Aspen Drive, mother of two, and the moral fulcrum of the entire series. She knows exactly what the money is and prays over it anyway. Three Emmys for showing us what complicity looks like from the inside.",
    quote: "More is lost by indecision than by wrong decision.",
    sortOrder: 1,
  },
  {
    name: "Meadow Soprano",
    aliases: "Meadow Mariangela",
    actor: "Jamie-Lynn Sigler",
    role: "The Daughter · Columbia, then Law",
    faction: "blood",
    status: "active",
    blurb: "The smart one. She figured out what her father does before she could drive, weaponized it at dinner, and spent eight years deciding whether to run from it or defend it in court. The parallel parking at Holsten's is still a national trauma.",
    quote: "The state can crush the individual.",
    sortOrder: 2,
  },
  {
    name: "Anthony Soprano Jr.",
    aliases: "A.J.",
    actor: "Robert Iler",
    role: "The Son · Heir Reluctant",
    faction: "blood",
    status: "active",
    blurb: "The disappointment who became the conscience. Failed at military school, succeeded at valeting, and ended the series in a BMW wondering why we focus on the bad times. The normal one. That's the tragedy.",
    quote: "You're supposed to savor the good times.",
    sortOrder: 3,
  },
  {
    name: "Corrado 'Junior' Soprano",
    aliases: "Uncle Jun'",
    actor: "Dominic Chianese",
    role: "Boss in Name · Defendant in Fact",
    faction: "blood",
    status: "retired",
    blurb: "Tony's uncle, who wore the big hat while his nephew ran the shop, then tried to kill him for it. Ended his run in a state facility asking if his nephew still remembered him. He didn't. Neither does time.",
    quote: "I got a history of mental illness… I got a history of being right.",
    sortOrder: 4,
  },
  {
    name: "Livia Soprano",
    aliases: "Ma",
    actor: "Nancy Marchand",
    role: "The Mother · Green Grove Resident",
    faction: "blood",
    status: "deceased",
    blurb: "The original family curse. Put out a hit on her own son for putting her in 'a nursing home,' then died before she could watch it work. Every father says his mother was a saint. Tony's wasn't. That's the point.",
    quote: "Poor you.",
    sortOrder: 5,
  },
  {
    name: "Janice Soprano Baccalieri",
    aliases: "Parvati (briefly)",
    actor: "Aida Turturro",
    role: "The Sister · Professional Grievance",
    faction: "blood",
    status: "active",
    blurb: "Blows in every few years with a new name and an old grudge. Shot her fiancé Richie, married Bobby after he grieved long enough, and stayed angry at the matter of where the light hits the room.",
    quote: "Ma would've loved this. Her only daughter, a widow.",
    sortOrder: 6,
  },
  {
    name: "Christopher Moltisanti",
    aliases: "Chrissy · Chris",
    actor: "Michael Imperioli",
    role: "Nephew by Marriage · Made, Then Unmade",
    faction: "crew",
    status: "whacked",
    blurb: "The one Tony was making. Writer, capo, addict, dead at 31 slumped against a window in the Pine Barrens' shadow. His screenplay pitch to Tony becomes the series' most quoted line: 'I'm drowning, Tony.'",
    quote: "You ever feel like nothin' good was ever gonna happen to you?",
    sortOrder: 7,
  },
  {
    name: "Silvio Dante",
    aliases: "Sil",
    actor: "Steven Van Zandt",
    role: "Consigliere · Bada Bing Owner",
    faction: "crew",
    status: "active",
    blurb: "The most loyal man in the room, forever. Ran the Bing, kept the books, did the Pacino impression like a goddamn professional. Shot in the parking lot of the Bing in the finale episode. The consigliere's consigliere.",
    quote: "Just when I thought I was out… they pull me back in.",
    sortOrder: 8,
  },
  {
    name: "Paulie Gualtieri",
    aliases: "Paulie Walnuts",
    actor: "Tony Sirico",
    role: "Capo · Survival Specialist",
    faction: "crew",
    status: "active",
    blurb: "Silver wings, germ phones, and the conviction that he sees things. Survived the Pine Barrens on ketchup packets and spite. Outlasted everyone, including the show, sitting alone at Satriale's as the camera dies.",
    quote: "I was born, grew up, spent a few years in the Army, a few more in the can, and here I am, a half a wise guy. So what?",
    sortOrder: 9,
  },
  {
    name: "Salvatore Bonpensiero",
    aliases: "Big Pussy",
    actor: "Vincent Pastore",
    role: "Soldier · Confidential Informant",
    faction: "crew",
    status: "whacked",
    blurb: "The best friend who wore the wire. Popped a guy in Season 1 and sweated through two more before Tony dreamed him into a boat in the middle of the ocean. 'You know who had an arc? Noah.' Nobody tells Big Pussy how it ends.",
    quote: "You know who had an arc? Noah.",
    sortOrder: 10,
  },
  {
    name: "Bobby Baccalieri",
    aliases: "Bobby Bacala",
    actor: "Steve Schirripa",
    role: "Capo · The Heart of the Whole Thing",
    faction: "crew",
    status: "whacked",
    blurb: "The gentle giant who wore the Santa suit, loved trains more than the life, and married Janice like a penance. Got the series' most beautiful exit line about not hearing it when it happens. He didn't. We did.",
    quote: "You probably don't even hear it when it happens.",
    sortOrder: 11,
  },
  {
    name: "Furio Giunta",
    aliases: "The Neapolitan",
    actor: "Federico Castelluccio",
    role: "Soldier · Naples Import",
    faction: "crew",
    status: "retired",
    blurb: "Flew in from Italy, broke up a card game with a two-by-four, and collected debts across Essex County with a hairdo the ages will not explain. Fell for Carmela, flew home before doing anything about it. The honorable one.",
    quote: "Stupid-a to leave…",
    sortOrder: 12,
  },
  {
    name: "Vito Spatafore",
    aliases: "Vince · The Don of Provincetown",
    actor: "Joseph R. Gannascoli",
    role: "Capo · The Weight of Contradiction",
    faction: "crew",
    status: "whacked",
    blurb: "A top earner who kissed a guy at a rest stop and had to drive to New Hampshire to learn he couldn't live there either. Came back to die for the second time. The most modern tragedy the show ever told.",
    quote: "It was the medication I was on. For my blood pressure.",
    sortOrder: 13,
  },
  {
    name: "Ralph Cifaretto",
    aliases: "Ralphie",
    actor: "Joe Pantoliano",
    role: "Capo · Genius, Menace",
    faction: "crew",
    status: "whacked",
    blurb: "The smartest earner in the family and its worst human being by a county mile. Killed a dancer, made a racehorse a legend, and wound up in pieces in a bowling bag. Everyone he ever met is better off.",
    quote: "A pony can carry its own weight forever, but the minute you put a rider on its back, that's a whole different story.",
    sortOrder: 14,
  },
  {
    name: "Richie Aprile",
    aliases: "Old School",
    actor: "David Proval",
    role: "Capo · Ten Years in the Can",
    faction: "crew",
    status: "whacked",
    blurb: "Came home from prison acting like the decade had taxed his respect. Shot in the kitchen by Janice over dinner. The first time the family kept one of its own secrets in a drawer with the takeout menus.",
    quote: "You know what you never had the balls to say to my face?",
    sortOrder: 15,
  },
  {
    name: "Eugene Pontecorvo",
    aliases: "Gene",
    actor: "Robert Funaro",
    role: "Soldier · The Warning Shot",
    faction: "crew",
    status: "deceased",
    blurb: "Inherited two million dollars and asked if he could retire to Florida with it. Was told, in excellent Italian, that there is no Florida. The Members Only jacket episode opens the final season like a curse.",
    quote: "Florida, Tony? What's this, the fuckin' Moonies?",
    sortOrder: 16,
  },
  {
    name: "Tony Blundetto",
    aliases: "Tony B.",
    actor: "Steve Buscemi",
    role: "Cousin · The One That Got Away",
    faction: "crew",
    status: "whacked",
    blurb: "The cousin Tony left holding the bag in '86. Came home with a massage-therapy dream and a fresh start, and the life took it anyway, because that's what the life is for. His death is the series' quietest tragedy.",
    quote: "It's hard to keep a straight face when you know you're full of shit.",
    sortOrder: 17,
  },
  {
    name: "John 'Johnny Sack' Sacrimoni",
    aliases: "The Sack",
    actor: "Vincent Curatola",
    role: "Boss · Lupertazzi Family, NY",
    faction: "newyork",
    status: "whacked",
    blurb: "The most considerate mob boss ever put on television, and the most ultimately destroyed. Loved his wife in a way nobody else in either family managed to sustain. The feds took the wedding, then the prison took the lungs.",
    quote: "Let me tell you somethin', when this is over…",
    sortOrder: 18,
  },
  {
    name: "Phil Leotardo",
    aliases: "The Shah of Iran",
    actor: "Frank Vincent",
    role: "Boss · Lupertazzi Family, NY",
    faction: "newyork",
    status: "whacked",
    blurb: "Did twenty years in the can, ate grilled cheese off the radiator, and came home determined to take everything personally. His final act was ordering the hits that gutted the Soprano family, then getting his head used as a wheel chock.",
    quote: "You want to compromise? You eat grilled cheese off the fuckin' radiator.",
    sortOrder: 19,
  },
  {
    name: "Dr. Jennifer Melfi",
    aliases: "The Only One Who Ever Told Him",
    actor: "Lorraine Bracco",
    role: "Psychiatrist · Columbia Practice",
    faction: "civilians",
    status: "active",
    blurb: "The one person in Tony's life he couldn't con, charm, or buy. Sat with him for six years, got assaulted, refused to weaponize him against her attacker, and finally discharged him with the best closing line in the series.",
    quote: "You want to get better? …Stop what you're doing.",
    sortOrder: 20,
  },
  {
    name: "Artie Bucco",
    aliases: "The Civilian",
    actor: "John Ventimiglia",
    role: "Chef · Nuovo Vesuvio",
    faction: "civilians",
    status: "active",
    blurb: "Tony's childhood friend, the one guy who married the right woman and still lost. His restaurant keeps burning, his marriage to Charmaine collapses under the family's patronage, and he keeps cooking. Bada bing, bada fuckin' boom.",
    quote: "You know what I found out, Charm? …Nobody loves a cook.",
    sortOrder: 21,
  },
  {
    name: "Hesh Rabkin",
    aliases: "Hesh",
    actor: "Jerry Adler",
    role: "Advisor · The Conscience in the Back Booth",
    faction: "civilians",
    status: "active",
    blurb: "The old friend from the record-business days who lends money, gives counsel, and never gets made because he never wanted to be. Loses his mistress and gets a 'you were never here' for his trouble. Still shows up. Still gets listened to.",
    quote: "A hit is a hit.",
    sortOrder: 22,
  },
  {
    name: "Gloria Trillo",
    aliases: "The Test Dream",
    actor: "Annabella Sciorra",
    role: "Civilian · The One He Couldn't Save",
    faction: "civilians",
    status: "deceased",
    blurb: "The Mercedes saleswoman who walked out of Dr. Melfi's waiting room and into three years of the show's most intricate heartbreak. Left Quiet Riot in a hotel room in '85 and never really came back. The saddest 'what if' in the whole thing.",
    quote: "I was in therapy… you should try it sometime.",
    sortOrder: 23,
  },
];

/* ──────────────────────────── THE WORDS ──────────────────────────── */

export const QUOTES: QuoteSeed[] = [
  { text: "I got the world by the balls, and I can't stop feeling like a fuckin' loser.", author: "Tony Soprano", source: "S6 · E20 — “The Blue Comet”" },
  { text: "'Remember when' is the lowest form of conversation.", author: "Tony Soprano (Bobby Baccalieri's reminder)", source: "S6 · E13 — “Soprano Home Movies”" },
  { text: "A wrong decision is better than indecision.", author: "Tony Soprano", source: "S4 · E13 — “Whitecaps”" },
  { text: "You steer the ship the best way you know. Sometimes it's smooth. Sometimes you hit the rocks. In the meantime, you find your pleasures where you can.", author: "Corrado 'Junior' Soprano", source: "S1 · E1 — “The Sopranos”" },
  { text: "You know who had an arc? Noah.", author: "Salvatore 'Big Pussy' Bonpensiero", source: "S2 · E13 — “Funhouse”" },
  { text: "Just when I thought I was out… they pull me back in.", author: "Silvio Dante, doing Pacino", source: "Recurring" },
  { text: "One thing you can never say is that you haven't been told.", author: "Dr. Krakower to Carmela", source: "S3 · E7 — “Second Opinion”" },
  { text: "You only get one life. And this is mine.", author: "Dr. Jennifer Melfi", source: "S3 · E4 — “Employee of the Month”" },
  { text: "It's good to be in something from the ground floor. I came in at the end.", author: "Tony Soprano, on therapy", source: "S1 · E1 — “The Sopranos”" },
  { text: "Cunnilingus and psychiatry brought us to this.", author: "Tony Soprano, to Dr. Melfi", source: "S1 · E1 — “The Sopranos”" },
  { text: "The day I got married, I says to myself, 'That's it. I'm gettin' out. This is the last time I ever talk to these people.'", author: "Tony Blundetto", source: "S5 · E10 — “Cold Cuts”" },
  { text: "Oh, poor you!", author: "Livia Soprano", source: "Recurring" },
  { text: "Focus on the good times.", author: "Anthony Soprano Jr.", source: "S6 · E21 — “Made in America”" },
  { text: "Sadness accrues.", author: "Tony Soprano", source: "S6 · E20 — “The Blue Comet”" },
  { text: "He was a king, and everybody knew it.", author: "Paulie Gualtieri, on Johnny Sack", source: "S6 · E14 — “Stage 5”" },
  { text: "It all gets so big sometimes… you forget how beautiful the moon is.", author: "Tony Soprano", source: "S6 · E18 — “Kennedy and Heidi”" },
];

/* ──────────────────────────── THE BUSINESS ──────────────────────────── */

export const BUSINESSES: BusinessSeed[] = [
  {
    front: "Barone Sanitation",
    cover: "Waste management consulting",
    actual: "The legitimate front Tony lists on his W-2. Nobody has ever seen the office.",
    take: "Undisclosed",
    risk: "low",
    status: "active",
    sortOrder: 1,
  },
  {
    front: "Zanone Bros. Private Carting",
    cover: "Municipal hauling",
    actual: "Junior's front through Season 1, then a federal exhibit. The trucks were real. The contracts were not.",
    take: "$2–4M/quarter, siphoned",
    risk: "federal",
    status: "seized",
    sortOrder: 2,
  },
  {
    front: "Satriale's Pork Store",
    cover: "Italian deli & butcher",
    actual: "Crew headquarters, back-room counsel, capocollo as cover. The espresso machine does real work. The rest is bookkeeping.",
    take: "Incidental",
    risk: "moderate",
    status: "active",
    sortOrder: 3,
  },
  {
    front: "Bada Bing!",
    cover: "Gentlemen's club & lounge",
    actual: "Silvio's. Money launders through the bar, collections happen in the alley, the changeling cubicle in the back does the rest.",
    take: "High volume",
    risk: "moderate",
    status: "active",
    sortOrder: 4,
  },
  {
    front: "The Executive Game",
    cover: "Private card game",
    actual: "Junior's hold'em racket taken over by Tony in Season 2. Rebuy-ins for the connected, bodyguard service for the unlucky.",
    take: "$100K+ a night",
    risk: "moderate",
    status: "active",
    sortOrder: 5,
  },
  {
    front: "The Esplanade Project",
    cover: "Newark riverfront redevelopment",
    actual: "No-show jobs, no-work jobs, inflated contracts, and enough city-hall grease to slide a barge into office. The show's most elegant scam.",
    take: "$10M+ over two seasons",
    risk: "high",
    status: "folded",
    sortOrder: 6,
  },
  {
    front: "Webistics",
    cover: "Tech stock, Series C",
    actual: "Christopher's pump-and-dump. Boiler room, phony research, gulls buying on a Tuesday. Classic 2001, perfectly legal until it isn't.",
    take: "Variable",
    risk: "federal",
    status: "seized",
    sortOrder: 7,
  },
  {
    front: "Nuovo Vesuvio",
    cover: "Fine Italian dining",
    actual: "Artie's. Completely legitimate, which is its own tragedy in this crowd. Arson-insured twice. Still the best osso buco in Essex County.",
    take: "Negative",
    risk: "low",
    status: "active",
    sortOrder: 8,
  },
];

/* ──────────────────────────── THE PLACES ──────────────────────────── */

export const LOCATIONS: LocationSeed[] = [
  {
    name: "Bada Bing!",
    tag: "Silvio's · Lodi, NJ",
    description: "Silvio's club on Route 17. The center of the legitimate-adjacent universe. The VIP room has seen more family business than most law firms.",
    trivia: "The exterior is Satin Dolls, a real club in Lodi. HBO kept the neon sign intact for the finale.",
    image: "/img/bing.jpg",
    sortOrder: 1,
  },
  {
    name: "Satriale's Pork Store",
    tag: "Crew HQ · Kearny, NJ",
    description: "The butcher shop where you bring your problems and leave with gabagool. The espresso machine at the back has seen more candid conversation than Dr. Melfi's couch.",
    trivia: "The real location is a sandwich shop. Demolished in 2007, the same year the show ended. Fans wept.",
    image: "/img/satriales.jpg",
    sortOrder: 2,
  },
  {
    name: "Nuovo Vesuvio",
    tag: "Artie & Charmaine's · Montclair, NJ",
    description: "The restaurant Tony keeps trying to protect from his own friendship. Red sauce, red booths, candle in the chianti bottle. The food is good. The company is complicated.",
    trivia: "Vesuvio 'burned down' in the pilot. Then it burned down again. The insurance adjuster should get a co-producer credit.",
    image: "/img/vesuvio.jpg",
    sortOrder: 3,
  },
  {
    name: "Dr. Melfi's Office",
    tag: "Columbia Practice · North Caldwell",
    description: "Two chairs, a window seat, a door that closes. Six years of the best television ever filmed in a dentist's waiting room-sized space.",
    trivia: "The waiting room itself becomes a plot point when Tony and Gloria Trillo meet there. That lobby carried the whole show.",
    image: null,
    sortOrder: 4,
  },
  {
    name: "Holsten's Brookdale Confectionery",
    tag: "Bloomfield, NJ · The Last Booth",
    description: "The diner where everything ends. Onion rings, tabletop jukeboxes, and a door that rings a bell for literally anyone who walks through it. We still flinch at Members Only jackets.",
    trivia: "The booth Tony chose is now a shrine. The onion rings are, objectively, pretty good.",
    image: "/img/holstens.jpg",
    sortOrder: 5,
  },
  {
    name: "Green Grove Retirement Community",
    tag: "Wayne, NJ · 'It's a nursing home!'",
    description: "Where Livia went after her stroke, against her will, and proceeded to run the entire joint like a capo. The phrase 'it's a retirement community!' is still doing heavy lifting in American households.",
    trivia: "It's a real assisted-living facility. The phone in Livia's room has a permanent fan club.",
    image: null,
    sortOrder: 6,
  },
  {
    name: "Pizzaland",
    tag: "North Arlington, NJ · Opening Credits",
    description: "The joint under the Belleville Turnpike bridge that Tony's Cadillac passes every single episode. Twelve seconds a season, six years running. Immortal.",
    trivia: "A real, award-winning pizzeria. The soppressata pie is the doubles partner of this entire show.",
    image: null,
    sortOrder: 7,
  },
  {
    name: "The Pine Barrens",
    tag: "South Jersey · 1.1 Million Acres of Snow",
    description: "New Jersey's answer to the north woods. One Russian, one shoe, one night Christopher and Paulie will never discuss frankly again. The interior decorator is still out there. Allegedly.",
    trivia: "Terence Winter wrote it in four days. It's taught in film schools. That tracks.",
    image: null,
    sortOrder: 8,
  },
];

/* ──────────────────────────── THE FALLEN ──────────────────────────── */

export const FALLEN: FallenSeed[] = [
  { name: "Salvatore 'Big Pussy' Bonpensiero", epitaph: "You know who had an arc? Noah. He had an arc that lasted forty days. Pussy's lasted two seasons, and it ended with three best friends at the rail of a boat watching the sky do nothing at all.", seasons: "Seasons 1–2", sortOrder: 1 },
  { name: "Christopher Moltisanti", epitaph: "The nephew. The made man. The addict. The writer. The best scene partner Gandolfini ever had and the worst driver in New Jersey history. He's in the trunk of a red Cadillac now, with the soundtrack he'd have wanted. Allegedly.", seasons: "Seasons 1–6", sortOrder: 2 },
  { name: "Adriana La Cerva", epitaph: "Loved a made man, got made by the FBI, and got the single worst ride in television history. Sil was sorry. That's the part that keeps you up. The Parting Glass will never not be a soundtrack to her.", seasons: "Seasons 1–5", sortOrder: 3 },
  { name: "Ralph Cifaretto", epitaph: "The smartest mouth in North Jersey finally said the wrong thing to the wrong bathtub. The horse was innocent. He wasn't. We light this candle sparingly.", seasons: "Seasons 3–4", sortOrder: 4 },
  { name: "Livia Soprano", epitaph: "Gave her son his first panic attack, his first philtrum of trouble, and the ingrained belief that he is unloved by everyone who matters. Ma cut a wide swath. Rest.", seasons: "Seasons 1–3", sortOrder: 5 },
  { name: "Bobby 'Bacala' Baccalieri", epitaph: "The Santa suit. The trains. The kindness that had no business surviving in that life and somehow did. Shot while buying a Blue Comet for his son. The trains still run.", seasons: "Seasons 2–6", sortOrder: 6 },
  { name: "Vito Spatafore", epitaph: "Drove to New Hampshire to find out he couldn't be a cowboy either. Johnny Cakes was real. So was the end. The weight of the world, in a leather cap he never got to keep.", seasons: "Seasons 1–6", sortOrder: 7 },
  { name: "John 'Johnny Sack' Sacrimoni", epitaph: "Loved his wife like it was a full-time job and his family like it was a second one. Died in a prison hospital saying his daughter's name. The last decent man in a dirty business.", seasons: "Seasons 2–6", sortOrder: 8 },
];
