export type playerAmount = 1 | 2 | 3 | 4;
export type playerNames = {
  p1: string;
  p2?: string;
  p3?: string;
  p4?: string;
};
export type themes =
  | "random"
  | "numbers"
  | "letters"
  | "uncategorized"
  | "polish politics"
  | "brands"
  | "electronics"
  | "entertainment"
  | "nature"
  | "space"
  | "medicine"
  | "military";

export type board = "g4" | "g6";

export type settings = {
  players: {
    amount: playerAmount;
    names: playerNames;
  };
  theme: themes;
  board: board;
};
