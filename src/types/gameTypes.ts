export type gameStatus = "not-started" | "running" | "finished";

export type activePlayer = 0 | 1 | 2 | 3;
export type turn = {
  player: activePlayer;
  firstActiveField: number | null;
  secondActiveField: number | null;
};

export type gamefieldStatus = "active" | "disabled" | "undiscovered";
export type gamefield = {
  name: string;
  status: gamefieldStatus;
};

export type board = {
  fieldSize: "big" | "small";
  fields: gamefield[];
};

export type player = {
  name: string;
  pairs: number;
  mostPairs?: boolean;
};

export type game = {
  isRunning: boolean;
  turn: turn;
  board: gamefield[];
  players: player[];
  pairsLeft: number;
};

export type results = {
  players: player[];
  title: string;
  subtitle: string;
  moves?: number;
  time?: string;
};
