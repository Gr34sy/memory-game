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

export type player = {
  name: string;
  pairs: number;
};

export type game = {
  isRunning: boolean;
  turn: turn;
  board: gamefield[];
  players: player[];
  pairsLeft: number;
};
