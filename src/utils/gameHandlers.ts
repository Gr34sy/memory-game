import { turn, gamefield, player, activePlayer } from "../types/gameTypes";
import { SetStateAction } from "react";

// handles the gamefield click and sets up the active gamefield
export function fieldClickHandler(
  fieldId: number,
  turn: turn,
  setBoard: (value: React.SetStateAction<gamefield[]>) => void,
  setTurn: (value: React.SetStateAction<turn>) => void
): void {
  if (turn.firstActiveField === null || turn.secondActiveField === null) {
    setBoard((prevBoard) => {
      const board = [...prevBoard];
      board[fieldId].status = "active";
      return board;
    });
  }

  if (turn.firstActiveField === null) {
    setTurn((prevTurn) => ({
      ...prevTurn,
      firstActiveField: fieldId,
    }));
  } else if (turn.secondActiveField === null) {
    setTurn((prevTurn) => ({
      ...prevTurn,
      secondActiveField: fieldId,
    }));
  } else {
    return;
  }
}

export function checkMatch(
  board: gamefield[],
  turn: turn,
  players: player[],
  setBoard: (value: SetStateAction<gamefield[]>) => void,
  setTurn: (value: SetStateAction<turn>) => void,
  setPlayers: (value: SetStateAction<player[]>) => void
): void {
  const firstField = turn.firstActiveField as number;
  const secondField = turn.secondActiveField as number;

  if (board[firstField].name === board[secondField].name) {
    setBoard((prevBoard) => {
      const board = [...prevBoard];

      board[firstField].status = "disabled";
      board[secondField].status = "disabled";

      return board;
    });

    setPlayers((prevPlayers) => {
      const players = [...prevPlayers];
      const player = { ...players[turn.player] };
      player.pairs = player.pairs + 1;

      players[turn.player] = player;

      return players;
    });

    setTurn((prevTurn) => {
      return {
        ...prevTurn,
        firstActiveField: null,
        secondActiveField: null,
      };
    });
  } else {
    setBoard((prevBoard) => {
      const board = [...prevBoard];

      board[firstField].status = "undiscovered";
      board[secondField].status = "undiscovered";

      return board;
    });

    setTurn((prevTurn) => {
      return {
        player: (prevTurn.player < players.length - 1
          ? prevTurn.player + 1
          : 0) as activePlayer,
        firstActiveField: null,
        secondActiveField: null,
      };
    });
  }
}
