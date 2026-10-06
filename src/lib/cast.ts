export type CastMember = {
  id: string;
  name: string;
  role: string;
  historical: boolean;
};

/** Walk-cycle crops from the game's character sheet. Facing the camera. */
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
