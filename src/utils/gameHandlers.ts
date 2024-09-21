import { turn, gamefield } from "../types/gameTypes";

// handles the gamefield click and sets up the active gamefield
export function fieldClickHandler(
  fieldId: number,
  turn: turn,
  setBoard: (value: React.SetStateAction<gamefield[]>) => void,
  setTurn: (value: React.SetStateAction<turn>) => void
): void {
  if (turn.firstActiveField === null || turn.secondActiveField === null) {
    setBoard((prevBoard) => {
      const board = prevBoard;
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
