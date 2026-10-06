export type CastMember = {
  id: string;
  name: string;
  role: string;
  historical: boolean;
};

/** The faces on the home page. Walk-cycle crops, facing the camera. */
export const COMPANY: CastMember[] = [
  { id: "alasdair", name: "Alasdair", role: "The pilgrim. This is you.", historical: false },
  { id: "knox", name: "John Knox", role: "Home from Geneva", historical: true },
  { id: "willock", name: "John Willock", role: "Superintendent of the West", historical: true },
  { id: "methven", name: "Paul Methven", role: "Preacher at Dundee", historical: true },
  { id: "erskine", name: "John Erskine of Dun", role: "A lord of the Congregation", historical: true },
  { id: "lordjames", name: "Lord James Stewart", role: "The Queen’s brother", historical: true },
  { id: "queen", name: "Mary, Queen of Scots", role: "Returned from France, 1561", historical: true },
  { id: "seton", name: "Mary Seton", role: "One of the Four Maries", historical: true },
  { id: "lekpreuik", name: "Robert Lekpreuik", role: "Printer in Edinburgh", historical: true },
  { id: "piper", name: "A piper", role: "Of the burgh", historical: false },
];

/** Full-length lineup for the brand book. Same sheets, more of the road. */
export const PROCESSION: CastMember[] = [
  { id: "alasdair", name: "Alasdair", role: "The pilgrim", historical: false },
  { id: "knox", name: "Knox", role: "Preacher", historical: true },
  { id: "willock", name: "Willock", role: "The West", historical: true },
  { id: "methven", name: "Methven", role: "Dundee", historical: true },
  { id: "goodman", name: "Goodman", role: "From England", historical: true },
  { id: "erskine", name: "Erskine", role: "Of Dun", historical: true },
  { id: "lordjames", name: "Lord James", role: "Stewart", historical: true },
  { id: "lekpreuik", name: "Lekpreuik", role: "Printer", historical: true },
  { id: "queen", name: "Mary", role: "The Queen", historical: true },
  { id: "seton", name: "Seton", role: "A Marie", historical: true },
  { id: "beaton", name: "Beaton", role: "A Marie", historical: true },
  { id: "fleming", name: "Fleming", role: "A Marie", historical: true },
  { id: "livingston", name: "Livingston", role: "A Marie", historical: true },
  { id: "grizel", name: "Grizel", role: "Of the story", historical: false },
  { id: "piper", name: "Piper", role: "Of the burgh", historical: false },
  { id: "highlander", name: "Highlander", role: "Of the road", historical: false },
  { id: "fishwife", name: "Fishwife", role: "Of the shore", historical: false },
];

export const LEADS = [
  {
    id: "alasdair",
    name: "Alasdair",
    line: "A student home from Geneva, with a Bible in his satchel.",
    poses: [
      ["idle", "Standing"],
      ["talk", "Speaking"],
      ["won", "The town won"],
    ],
  },
  {
    id: "knox",
    name: "John Knox",
    line: "The historical preacher. Arms raised is his pulpit pose, not a defeat.",
    poses: [
      ["idle", "Standing"],
      ["talk", "Speaking"],
      ["struck", "Preaching"],
      ["sing", "Singing"],
    ],
  },
  {
    id: "queen",
    name: "Mary",
    line: "Mary, Queen of Scots, eighteen and a widow, home in 1561.",
    poses: [
      ["idle", "Standing"],
      ["talk", "Speaking"],
      ["won", "At court"],
    ],
  },
] as const;
