export interface EpisodeSeed {
  season: number;
  episode: number;
  title: string;
  synopsis: string;
  notable: boolean;
}

export const SEASON_META: {
  season: number;
  roman: string;
  years: string;
  episodes: number;
  strapline: string;
  note: string;
}[] = [
  {
    season: 1,
    roman: "I",
    years: "1999",
    episodes: 13,
    strapline: "The ducks come first.",
    note: "A boss walks into a psychiatrist's office. Panic attacks, a mother who wants him dead, and the beginning of the end of privacy in America.",
  },
  {
    season: 2,
    roman: "II",
    years: "2000",
    episodes: 13,
    strapline: "Guy walks into a psychiatrist's office.",
    note: "Janice comes home, Richie Aprile gets out, and a film student learns what this thing actually is. It ends, as it always ends, with a dream and a fishhead.",
  },
  {
    season: 3,
    roman: "III",
    years: "2001",
    episodes: 13,
    strapline: "Where the fuck is the interior decorator?",
    note: "Ralphie arrives, Gloria burns bright, and two wiseguys get lost in the snow in what many call the finest hour of television ever made.",
  },
  {
    season: 4,
    roman: "IV",
    years: "2002",
    episodes: 13,
    strapline: "Whitecaps.",
    note: "A horse dies, a marriage dies harder, and Tony stands on a beach in the rain asking for his house back. The slowest, saddest, most literary season.",
  },
  {
    season: 5,
    roman: "V",
    years: "2004",
    episodes: 13,
    strapline: "Long term parking.",
    note: "The class of '04 comes home from prison. Adriana makes a phone call from the car. Tony does the thing his cousin asked him not to make him do.",
  },
  {
    season: 6,
    roman: "VI",
    years: "2006–2007",
    episodes: 21,
    strapline: "Made in America.",
    note: "Twenty-one final hours. John Sacrimoni requests, Vito takes a ride, Christopher goes off the wagon and off the road, and a door rings in Bloomfield.",
  },
];

export const EPISODES: EpisodeSeed[] = [
  // ─── SEASON ONE ───
  { season: 1, episode: 1, title: "The Sopranos", synopsis: "A mob boss has a panic attack, ducks land in his pool, and he starts talking — to a psychiatrist. Everything begins here.", notable: true },
  { season: 1, episode: 2, title: "46 Long", synopsis: "Christopher hijacks the wrong truck. Tony stages a wholesome rescue of a teacher's car. Livia sharpens the knives.", notable: false },
  { season: 1, episode: 3, title: "Denial, Anger, Acceptance", synopsis: "A Hassidic motel, a painting of himself as a general, and the first taste of what Therapy is doing to Tony's stomach.", notable: false },
  { season: 1, episode: 4, title: "Meadowlands", synopsis: "Tony watches the feds watch him and wonders if he should get out. Junior makes his move. Everybody checks their shoes.", notable: false },
  { season: 1, episode: 5, title: "College", synopsis: "A college road trip with Meadow. A rat in the witness protection program. A length of wire. The episode that changed television.", notable: true },
  { season: 1, episode: 6, title: "Pax Soprana", synopsis: "Tony medicates, hallucinates Melfi, and brokers peace with Junior — who is learning what his own title is actually worth.", notable: false },
  { season: 1, episode: 7, title: "Down Neck", synopsis: "A.J. drinks at school and Tony revisits his father's hands, his mother's face, and the day he learned the family business.", notable: false },
  { season: 1, episode: 8, title: "The Legend of Tennessee Moltisanti", synopsis: "Christopher discovers he isn't in the FBI's notebooks and spirals. A screenwriter gets a very short writing credit.", notable: false },
  { season: 1, episode: 9, title: "Boca", synopsis: "A girls' soccer coach is run out of town for a misdemeanor, while Junior's own secret talent becomes a federal case.", notable: false },
  { season: 1, episode: 10, title: "A Hit Is a Hit", synopsis: "Christopher and Adriana try to go legit in the music business and learn what a 'hit' really means.", notable: false },
  { season: 1, episode: 11, title: "Nobody Knows Anything", synopsis: "Pussy wears a wire, or maybe a back brace. Vin Makazian takes a dive off the Donald Goodkind Bridge.", notable: false },
  { season: 1, episode: 12, title: "Isabella", synopsis: "Medication, depression, and a beautiful exchange student who never existed. Junior's crew takes its shot at Tony.", notable: false },
  { season: 1, episode: 13, title: "I Dream of Jeannie Cusamano", synopsis: "The war with Junior ends at a kitchen table. Livia's revenge nearly succeeds. Artie's restaurant pays the price.", notable: false },
  // ─── SEASON TWO ───
  { season: 2, episode: 1, title: "Guy Walks into a Psychiatrist's Office…", synopsis: "Melfi's gone, Janice's home, and Tony has panic on rotation. Big Pussy resurfaces with a convenient back injury.", notable: false },
  { season: 2, episode: 2, title: "Do Not Resuscitate", synopsis: "Janice plays both ends against her own family. A protest at a construction site turns profitable, the usual way.", notable: false },
  { season: 2, episode: 3, title: "Toodle-Fucking-Oo", synopsis: "Richie Aprile walks out of prison and immediately starts acting like the old neighborhood owes him interest.", notable: false },
  { season: 2, episode: 4, title: "Commendatori", synopsis: "Naples. The crew meets the other family. Furio terrifies a room full of people, and Paulie discovers he's not so Italian after all.", notable: false },
  { season: 2, episode: 5, title: "Big Girls Don't Cry", synopsis: "Tony promotes Paulie, overlooks Pussy, and Furio moves in next door to collect what America owes him.", notable: false },
  { season: 2, episode: 6, title: "The Happy Wanderer", synopsis: "Tony takes over the Executive Game from Junior, David Scatino gambles away his son's college fund, and Meadow loses her Jeep.", notable: true },
  { season: 2, episode: 7, title: "D-Girl", synopsis: "Christopher gets discovered by Hollywood, Jon Favreau gets decked, and A.J. discovers Nietzsche and his grandmother's advice.", notable: false },
  { season: 2, episode: 8, title: "Full Leather Jacket", synopsis: "Richie gives Tony a jacket that used to belong to Rocco DiMeo. It does not read as respect. Nothing about Richie does.", notable: false },
  { season: 2, episode: 9, title: "From Where to Eternity", synopsis: "Christopher flatlines for a minute and comes back with a message from hell: it's the one where he holds the emerald.", notable: false },
  { season: 2, episode: 10, title: "Bust Out", synopsis: "Witness pressure tightens around Tony. He nearly runs, then doesn't. Carmela begins her long education in the price of things.", notable: false },
  { season: 2, episode: 11, title: "House Arrest", synopsis: "Tony hides at the office and slowly goes insane with boredom. Junior, already on house arrest, sees the whole joke.", notable: false },
  { season: 2, episode: 12, title: "The Knight in White Satin Armor", synopsis: "Richie proposes to Janice with all his usual charm, and Janice answers with all of hers. The drapes stay.", notable: false },
  { season: 2, episode: 13, title: "Funhouse", synopsis: "Bad clams, delirious dreams, and a hallway conversation with a fish. Pussy takes a boat ride. 'You know who had an arc? Noah.'", notable: true },
  // ─── SEASON THREE ───
  { season: 3, episode: 1, title: "Mr. Ruggerio's Neighborhood", synopsis: "The FBI bugs the Soprano basement to the tune of the Peter Gunn theme and the Police. A masterpiece of surveillance cinema.", notable: false },
  { season: 3, episode: 2, title: "Proshai, Livushka", synopsis: "Livia dies with her insults intact. Janice stages a funeral for an audience of nobody. Tony can't fake it at the open casket.", notable: false },
  { season: 3, episode: 3, title: "Fortunate Son", synopsis: "Christopher gets made and immediately starts paying for it. A.J. quits football. Dr. Melfi discovers her Hippocratic blind spot.", notable: false },
  { season: 3, episode: 4, title: "Employee of the Month", synopsis: "The worst episode, in the best sense: Melfi is attacked, the system releases the man, and she refuses to become one of Tony's clients. A landmark hour.", notable: true },
  { season: 3, episode: 5, title: "Another Toothpick", synopsis: "An old man dies, a cop loses his pride for doing his job, and everyone measures themselves against their fathers' graves.", notable: false },
  { season: 3, episode: 6, title: "University", synopsis: "Tracee's story — the girl nobody saved. Meadow grows up in a hurry. One of the most quietly devastating hours in the series.", notable: true },
  { season: 3, episode: 7, title: "Second Opinion", synopsis: "Carmela sits with Dr. Krakower, who tells her the truth in one sentence: 'One thing you can never say is that you haven't been told.'", notable: false },
  { season: 3, episode: 8, title: "He Is Risen", synopsis: "Tony and Ralphie's cold war turns hot at the card table. Meadow and Jackie Jr. begin their long, doomed almost.", notable: false },
  { season: 3, episode: 9, title: "The Telltale Moozadell", synopsis: "Christopher gifts Adriana a nightclub. A.J.'s vandalism gets him into military school, and the Soprano household can't handle either.", notable: false },
  { season: 3, episode: 10, title: "…To Save Us All from Satan's Power", synopsis: "Tony can't play Santa, so they make Paulie do it. Big Pussy's ghost haunts the holidays: 'Where's Pussy?' Everywhere, pal.", notable: false },
  { season: 3, episode: 11, title: "Pine Barrens", synopsis: "A collections errand goes wrong in the snow. Christopher and Paulie spend the night losing to the Russian wilderness. The single most beloved episode.", notable: true },
  { season: 3, episode: 12, title: "Amour Fou", synopsis: "Gloria meets Carmela. Jackie Jr. meets his ceiling. 'Cunnilingus and psychiatry brought us to this.'", notable: false },
  { season: 3, episode: 13, title: "Army of One", synopsis: "Jackie Jr.'s story ends in the projects. Meadow finally sees the family business without the wrapping paper. Tony cries in the driveway.", notable: false },
  // ─── SEASON FOUR ───
  { season: 4, episode: 1, title: "For All Debts Public and Private", synopsis: "The money's tight, the feds are broke too, and Tony puts a $50,000 crack in Christopher's door — literally.", notable: false },
  { season: 4, episode: 2, title: "No Show", synopsis: "Meadow drifts after Jackie's death. Christopher, now acting capo, discovers the job is heavier than the title.", notable: false },
  { season: 4, episode: 3, title: "Christopher", synopsis: "Columbus Day ignites an identity crisis across three generations. Bobby Bacala grieves at a train set. Everyone fights about what an Italian is.", notable: false },
  { season: 4, episode: 4, title: "The Weight", synopsis: "A joke about Ginny Sack's backside nearly starts a war with New York. 'I hear Ginny's ass is so big…' It very nearly does.", notable: false },
  { season: 4, episode: 5, title: "Pie-O-My", synopsis: "Tony loves a racehorse. Ralphie loves what the horse earns. Tony's sadness finds four legs and it will not end well for anyone.", notable: false },
  { season: 4, episode: 6, title: "Everybody Hurts", synopsis: "A.J. visits the D.A.'s office of middle-class life and comes home to a suicide in the family. Gloria gets worse. The hits keep coming.", notable: false },
  { season: 4, episode: 7, title: "Watching Too Much Television", synopsis: "A HUD scam gets sketched on a napkin. Adriana discovers that 'common-law' is not the shield she thought it was.", notable: false },
  { season: 4, episode: 8, title: "Mergers and Acquisitions", synopsis: "Paulie moves his mother into Green Grove and goes to war with the social club regulars. Ralphie sends Tony into therapy orbit.", notable: false },
  { season: 4, episode: 9, title: "Whoever Did This", synopsis: "Ralphie's son takes an arrow, Pie-O-My dies in a suspicious fire, and Tony finally answers the 'whoever' — bathtub, no cleanup crew.", notable: true },
  { season: 4, episode: 10, title: "The Strong, Silent Type", synopsis: "Christopher's intervention goes exactly how you'd expect: everybody beats him up and Tony yells about Gary Cooper.", notable: false },
  { season: 4, episode: 11, title: "Calling All Cars", synopsis: "Tony dreams of a house by the sea where a shadow figure descends the stairs. The dream log becomes the show's subconscious.", notable: true },
  { season: 4, episode: 12, title: "Eloise", synopsis: "Carmela falls for Furio at a house showing. Furio goes home to Naples rather than commit the unpardonable sin.", notable: false },
  { season: 4, episode: 13, title: "Whitecaps", synopsis: "The sea house, the separation, and the single greatest acting hour Edie Falco ever filmed. The marriage ends standing in a kitchen.", notable: true },
  // ─── SEASON FIVE ───
  { season: 5, episode: 1, title: "Two Tonys", synopsis: "The class of 2004 comes home from prison. A bear in the backyard stands in for the thing nobody will say out loud.", notable: false },
  { season: 5, episode: 2, title: "Rat Pack", synopsis: "Tony sends love through Jack Massarone to the feds by accident. Adriana's new 'friend' Danielle is very interested in her life.", notable: false },
  { season: 5, episode: 3, title: "Where's Johnny?", synopsis: "Uncle Junior wanders the neighborhood in the early stages of losing himself. 'Where's Johnny?' Slowly, everywhere.", notable: false },
  { season: 5, episode: 4, title: "All Happy Families…", synopsis: "Feech La Manna doesn't get it and gets himself violated back to prison. A.J. fails upward into party planning.", notable: false },
  { season: 5, episode: 5, title: "Irregular Around the Margins", synopsis: "A car crash at 2 a.m. with Adriana in the passenger seat. Christopher aims at the wrong man. The margins are never irregular innocently.", notable: false },
  { season: 5, episode: 6, title: "Sentimental Education", synopsis: "Carmela dates the guidance counselor and discovers she's still married to his opinion of her husband.", notable: false },
  { season: 5, episode: 7, title: "In Camelot", synopsis: "Tony meets his father's goomah and inherits his real legacy: the excuses. Junior attends his own funeral, technically.", notable: false },
  { season: 5, episode: 8, title: "Marco Polo", synopsis: "Hugh's 75th birthday brings Carmela's parents' full contempt into the light. Tony B.'s life keeps falling apart in the margins.", notable: false },
  { season: 5, episode: 9, title: "Unidentified Black Males", synopsis: "Everybody's got an assailant nobody can identify. Meadow's engagement lands in Tony's lap. Justifications multiply like debts.", notable: false },
  { season: 5, episode: 10, title: "Cold Cuts", synopsis: "Tony B. delivers the beating that seals both his fates. Janice cracks in the Anger Management montage of a lifetime.", notable: false },
  { season: 5, episode: 11, title: "The Test Dream", synopsis: "Twenty minutes inside Tony's skull the night before the decision. Every dead man he's ever made appears at his bedside. Television as pure dream logic.", notable: true },
  { season: 5, episode: 12, title: "Long Term Parking", synopsis: "Adriana asks if they'd actually kill her. Christopher answers with a phone call. Silvio drives to Ohio. The show's coldest, greatest hour.", notable: true },
  { season: 5, episode: 13, title: "All Due Respect", synopsis: "Tony finishes his own cousin to protect the family from himself. He returns, as always, running in the rain through the trees.", notable: false },
  // ─── SEASON SIX ───
  { season: 6, episode: 1, title: "Members Only", synopsis: "The old man in the Members Only jacket. Junior shoots. The season of reckoning opens with a silence you can hear.", notable: true },
  { season: 6, episode: 2, title: "Join the Club", synopsis: "Kevin Finnerty checks into a hotel someone else paid for. Tony hovers. 'Who am I? Where am I going?'", notable: true },
  { season: 6, episode: 3, title: "Mayham", synopsis: "Paulie and Christopher hold the fort badly. Carmela holds Tony's hand and he finally hears her — and comes back.", notable: false },
  { season: 6, episode: 4, title: "The Fleshy Part of the Thigh", synopsis: "Tony goes round for round with a physicist on the nature of the universe. Everything is a circle, including the bullet's arc.", notable: false },
  { season: 6, episode: 5, title: "Mr. & Mrs. John Sacrimoni Request…", synopsis: "A wedding, an indictment, and a daughter's celebration reduced to a prisoner transport schedule. Johnny Sack cries at his own daughter's wedding.", notable: false },
  { season: 6, episode: 6, title: "Live Free or Die", synopsis: "Vito is outed by a New York construction job and drives into the fog of a New Hampshire town that doesn't know what to do with him.", notable: false },
  { season: 6, episode: 7, title: "Luxury Lounge", synopsis: "Christopher and Little Carmine take a meeting with Ben Kingsley. Lauren Bacall gets mugged for her swag basket. Hollywood gets played.", notable: false },
  { season: 6, episode: 8, title: "Johnny Cakes", synopsis: "Vito finds something like peace in New Hampshire, which is the surest sign it's about to be annihilated. A.J. nearly becomes a made man.", notable: false },
  { season: 6, episode: 9, title: "The Ride", synopsis: "Christopher relapses at the festival of the ride. Tony's taste of normal is cut short by the same old ice cream headache.", notable: false },
  { season: 6, episode: 10, title: "Moe n' Joe", synopsis: "Vito folds back into the life. Johnny Sack folds in federal court. The folds keep folding until somebody doesn't get up.", notable: false },
  { season: 6, episode: 11, title: "Cold Stones", synopsis: "The Paris episode. Carmela sees the roofs of two worlds from the airplane window and understands, for a day, everything.", notable: false },
  { season: 6, episode: 12, title: "Kaisha", synopsis: "Phil Leotardo's heart gives out. Christopher's celebration of his sobriety is the saddest party in the series.", notable: false },
  { season: 6, episode: 13, title: "Soprano Home Movies", synopsis: "Bobby's cabin, the monologue about ducks, the gun in the lake. 'Remember when' is said aloud for the first time and lands like a coffin lid.", notable: true },
  { season: 6, episode: 14, title: "Stage 5", synopsis: "Johnny Sack dies in a hospital that's already bankrupt. The new boss of New York faction-craft immediately starts choosing sides.", notable: false },
  { season: 6, episode: 15, title: "Remember When", synopsis: "Tony and Paulie drive to Miami to relive the good times. Nobody has good times anymore. The lowest form of conversation, conducted from a boat.", notable: false },
  { season: 6, episode: 16, title: "Chasing It", synopsis: "Tony's gambling becomes self-destruction with a stack. 'Chasing it' — even he knows it. Even he can't stop.", notable: false },
  { season: 6, episode: 17, title: "Walk Like a Man", synopsis: "Christopher's last honest conversation with A.J. ends the only way it can: with the nephew he made walking toward a tree.", notable: false },
  { season: 6, episode: 18, title: "Kennedy and Heidi", synopsis: "A car accident in a tunnel. A duffel bag of decisions. The desert scene where the sun comes up and Tony finally says 'I get it.'", notable: true },
  { season: 6, episode: 19, title: "The Second Coming", synopsis: "A.J. tries it in the pool with a plastic bag and a cinder block, and Tony has to peel the despair off his own son.", notable: false },
  { season: 6, episode: 20, title: "The Blue Comet", synopsis: "New York comes for New Jersey. Bobby dies shopping for trains. Sil dies in a parking lot. The safehouse has one room and it's the end.", notable: true },
  { season: 6, episode: 21, title: "Made in America", synopsis: "A diner booth in Bloomfield, onion rings, and 'Don't Stop Believin'' at full volume until it —", notable: true },
];
