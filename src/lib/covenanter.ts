/* Content for the home page, ported from the design's site-data.js.
   Biographies were written from general history; check them against the game. */

/** Special-pose art. An empty path falls back to the in-game portrait. */
export const POSES = {
  knox: "/art/poses/knox-preaching.png",
  handing: "/art/poses/handing-down.png",
  hero: "/art/poses/hero.png",
  johns: "/art/poses/six-johns.png",
  band: "/art/poses/first-band.png",
} as const;

/** Portrait sprite cells (64px) in /art/covenanter/portraits.png. */
export const PT: Record<string, [number, number]> = {
  player: [0, 0],
  farmer: [192, 192],
  cooper: [256, 192],
  fisher: [320, 192],
  glover: [128, 256],
  butcher: [192, 256],
  miller: [320, 256],
  ferryman: [384, 256],
  piper: [256, 320],
  drover: [384, 320],
  knox: [64, 0],
  methven: [128, 0],
  goodman: [192, 0],
  winram: [256, 0],
  willock: [320, 0],
  carswell: [384, 0],
  erskine: [448, 0],
  lordjames: [0, 64],
  row: [64, 64],
  spottiswood: [128, 64],
  douglas: [192, 64],
  nisbet: [448, 64],
  boy: [64, 256],
  pardoner: [64, 448],
  lindsay: [0, 640],
};

export type GroupId = "six" | "refs" | "folk";

export const GROUPS: { id: GroupId; title: string; sub: string }[] = [
  {
    id: "six",
    title: "The six Johns",
    sub: "Six ministers who drafted the Scots Confession in four days, 1560.",
  },
  {
    id: "refs",
    title: "Reformers and friends",
    sub: "Preachers, patrons and translators of the Word.",
  },
  { id: "folk", title: "In Dundee", sub: "Two you meet at the harbour and the square." },
];

export type CastMember = {
  id: string;
  name: string;
  short: string;
  role: string;
  g: GroupId;
  blurb: string;
};

export const CAST: CastMember[] = [
  {
    id: "knox",
    name: "John Knox",
    short: "Knox",
    role: "Reformer and minister of St Giles’",
    g: "six",
    blurb:
      "Returned to Scotland from Geneva in 1559 and preached the Reformation from Perth to Edinburgh. Minister of St Giles’ and one of the six who drafted the Scots Confession.",
  },
  {
    id: "willock",
    name: "John Willock",
    short: "Willock",
    role: "Former Franciscan friar",
    g: "six",
    blurb:
      "Left the friars for the Reformed faith and preached it in England and in Scotland. One of the six Johns.",
  },
  {
    id: "winram",
    name: "John Winram",
    short: "Winram",
    role: "Sub-prior of St Andrews",
    g: "six",
    blurb:
      "Turned to the Reformed cause from within the priory and later served as Superintendent of Fife. One of the six Johns.",
  },
  {
    id: "spottiswood",
    name: "John Spottiswoode",
    short: "Spottiswoode",
    role: "Superintendent of Lothian",
    g: "six",
    blurb:
      "Became the Kirk’s first Superintendent of Lothian. One of the six Johns who drafted the Scots Confession.",
  },
  {
    id: "row",
    name: "John Row",
    short: "Row",
    role: "Reformed minister",
    g: "six",
    blurb:
      "A minister of the Reformed Kirk who shared in writing the Scots Confession in 1560. One of the six Johns.",
  },
  {
    id: "douglas",
    name: "John Douglas",
    short: "Douglas",
    role: "Former Carmelite friar",
    g: "six",
    blurb:
      "Left the Carmelites to join the Reformers and later became Rector of the University of St Andrews. One of the six Johns.",
  },
  {
    id: "methven",
    name: "Paul Methven",
    short: "Methven",
    role: "Preacher of Dundee",
    g: "refs",
    blurb:
      "A Dundee man who preached the Reformed faith. In Covenanter you are sent to find him at the bakehouse.",
  },
  {
    id: "goodman",
    name: "Christopher Goodman",
    short: "Goodman",
    role: "Knox’s colleague from Geneva",
    g: "refs",
    blurb:
      "Served beside Knox among the exiles in Geneva, then ministered at Ayr and at St Andrews.",
  },
  {
    id: "erskine",
    name: "John Erskine of Dun",
    short: "Erskine",
    role: "Laird of Dun",
    g: "refs",
    blurb:
      "An Angus laird who sheltered the early preachers and became Superintendent of Angus and the Mearns.",
  },
  {
    id: "lordjames",
    name: "Lord James Stewart",
    short: "Lord James",
    role: "Leader of the Protestant Lords",
    g: "refs",
    blurb:
      "Half-brother of Mary, Queen of Scots, and a leader of the Protestant Lords. Later Earl of Moray.",
  },
  {
    id: "nisbet",
    name: "Murdoch Nisbet",
    short: "Nisbet",
    role: "Ayrshire Lollard",
    g: "refs",
    blurb:
      "Translated the New Testament into Scots and kept it hidden, so that plain people might one day read the Word in their own tongue.",
  },
  {
    id: "carswell",
    name: "John Carswell",
    short: "Carswell",
    role: "Minister and Bishop of the Isles",
    g: "refs",
    blurb:
      "Translated the Book of Common Order into Gaelic in 1567, the first book printed in Scottish Gaelic.",
  },
  {
    id: "lindsay",
    name: "Sir David Lindsay",
    short: "Lindsay",
    role: "Poet and courtier",
    g: "refs",
    blurb: "Lindsay of the Mount, whose plays and verse mocked the abuses of the old Church.",
  },
  {
    id: "boy",
    name: "Wee Jock",
    short: "Wee Jock",
    role: "A boy of Dundee harbour",
    g: "folk",
    blurb:
      "Sent by Paul Methven to meet the Geneva scholar off the boat and to point the way to the bakehouse.",
  },
  {
    id: "pardoner",
    name: "Friar Tobias",
    short: "Friar Tobias",
    role: "Pardoner of the Greyfriars",
    g: "folk",
    blurb:
      "Sells letters of pardon in the square for four shillings and holds the crowd with his claims. Answer him with the Word.",
  },
];

export const castById = (id: string) => CAST.find((c) => c.id === id) ?? CAST[0];

export type Shot = {
  /** File name in /art/game/ (web JPEG, 1600 × 736) and /art/game/full/ (PNG, 2868 × 1320). */
  id: string;
  /** Short tab label. */
  label: string;
  /** Caption shown under the screenshot. */
  caption: string;
  /** Plain description of the scene for screen readers. */
  alt: string;
};

/** In-game screenshots, the final store set of 5 October 2026 (App Store size). */
export const SHOTS: Shot[] = [
  {
    id: "print-shop",
    label: "Print shop",
    caption:
      "In the print shop, among the bookshelves, the desks and the stacks of printed sheets.",
    alt: "Alasdair, with his satchel, stands beside a bearded man in a printer’s shop with bookshelves, desks and stacks of paper.",
  },
  {
    id: "catechism",
    label: "Catechism",
    caption: "Jonet and Tammie ask from the Geneva Catechism: “Which is the second commandment?”",
    alt: "A catechism card from Jonet and Tammie. The question “Which is the second commandment?” is rightly answered: “Thou shalt not make unto thee any graven image.”",
  },
  {
    id: "armour-card",
    label: "Armour",
    caption: "The whole armour of God: the Belt of Truth, from Ephesians 6:14.",
    alt: "A card titled The Whole Armour of God shows the Belt of Truth, the verse Ephesians 6:14, and what it does in disputation.",
  },
  {
    id: "psalm-drill",
    label: "Psalms",
    caption: "Practise the psalms. Which psalm opens so, and to which tune is it sung?",
    alt: "A psalm practice question. The lines “Praise God, for he is good” are matched to Psalm 107, sung to York, from the Scottish Psalter.",
  },
  {
    id: "market-stalls",
    label: "Market",
    caption:
      "Market day: stalls, the well and the mercat cross, and townsfolk and friars about the square.",
    alt: "A busy market square of cobbles and grass, with stalls, a well, a mercat cross, a flag, friars in grey habits and townsfolk.",
  },
  {
    id: "dundee-shore",
    label: "Dundee",
    caption: "The shore at Dundee. A merchantman lies at the pier, and a seaman waits on the quay.",
    alt: "Alasdair walks a wooden pier at Dundee beside a three-masted merchant ship flying the saltire. A seaman stands on the stone quay above.",
  },
  {
    id: "town-map",
    label: "Town map",
    caption:
      "The map of Edinburgh: the castle, St Giles’ Kirk, the Tolbooth and Lekpreuik’s printing house.",
    alt: "The town map of Edinburgh, showing the castle, St Giles’ Kirk and the streets, with a list of places to go beside it.",
  },
  {
    id: "ayr-winter-cross",
    label: "Ayr",
    caption: "Ayr in winter. Snow lies on the square by the mercat cross, and the lamps are lit.",
    alt: "A snowy town square in Ayr at dusk. Alasdair meets a bearded minister by the mercat cross, with lit lamps, stalls and a stone tower.",
  },
];

export const shotSrc = (id: string) => `/art/game/${id}.jpg`;
export const shotFull = (id: string) => `/art/game/full/${id}.png`;

export const VERSES: Record<string, [string, string]> = {
  ac8_20: [
    "Acts 8:20",
    "But Peter said unto him, Thy money perish with thee, because thou hast thought that the gift of God may be purchased with money.",
  ],
  ac2_8: ["Acts 2:8", "And how hear we every man in our own tongue, wherein we were born?"],
  ac17_11: [
    "Acts 17:11",
    "These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.",
  ],
  ac4_12: [
    "Acts 4:12",
    "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.",
  ],
  c1co14_19: [
    "1 Corinthians 14:19",
    "Yet in the church I had rather speak five words with my understanding, that by my voice I might teach others also, than ten thousand words in an unknown tongue.",
  ],
  heb10_14: [
    "Hebrews 10:14",
    "For by one offering he hath perfected for ever them that are sanctified.",
  ],
};

export type Claim = {
  text: string;
  ok: string;
  opts: string[];
  /** [Truth, gloss, ribbon colour] */
  truth: [string, string, string];
  rebut: string;
};

export const CLAIMS: Claim[] = [
  {
    text: "The Holy Father keeps the treasury of the saints’ merits. For four shillings this pardon looses your sins, and their goodness is reckoned to you.",
    ok: "ac8_20",
    opts: ["ac2_8", "ac8_20", "ac17_11"],
    truth: ["Sola Gratia", "Grace alone", "#D99A2A"],
    rebut:
      "You read from the Acts: when Simon thought to buy the gift of God with money, Peter said, “Thy money perish with thee.” A merchant quietly slips his purse back into his coat.",
  },
  {
    text: "Behold this relic: a hair from the beard of Saint Andrew himself. Touch it for a penny and be blessed!",
    ok: "ac4_12",
    opts: ["ac4_12", "c1co14_19", "ac17_11"],
    truth: ["Solus Christus", "Christ alone", "#6E2EA0"],
    rebut:
      "There is none other name under heaven given among men whereby we must be saved. Not a hair, not a bone, not a saint. Somebody laughs at the hair.",
  },
  {
    text: "Your English Testaments are Tyndale’s forgeries. The Word of God belongs in holy Latin, not in the gutter speech of fishwives.",
    ok: "c1co14_19",
    opts: ["ac8_20", "heb10_14", "c1co14_19"],
    truth: ["The Word in Our Own Tongue", "Hear in thine own tongue", "#3F72E0"],
    rebut:
      "Paul would rather speak five words with understanding than ten thousand in an unknown tongue. The crowd murmurs its agreement in good broad Scots.",
  },
];

/** [Level, ages, how it plays] */
export const LADDER: [string, string, string][] = [
  [
    "Easiest",
    "about 5 to 7",
    "Choose the right verse from three. One answers the claim, and two do not.",
  ],
  [
    "Easy",
    "about 7 to 9",
    "Choose the Truth from four, then the verse from four: one strikes home, one answers, and two do not.",
  ],
  ["Normal", "about 9 to 11", "Choose from every Truth and every verse you have gathered."],
  [
    "Hard",
    "about 11 to 13",
    "Choose the Truth and the reference, then set the words of the verse in order.",
  ],
  [
    "Expert",
    "13 and up",
    "Choose the Truth and the reference, then write the verse out from memory.",
  ],
];
