import styles from "./gameboard.module.css";
import { board } from "../../types/gameTypes";
import GameField from "./GameField";

type GameboardProps = {
  board: board;
  onFieldClick: () => {};
};
const Gameboard = ({ board, onFieldClick }: GameboardProps) => {
  return (
    <main className={`${styles.gameboard} ${styles[board.fieldSize]}`}>
      {board.fields.map((field, i) => (
        <GameField
          size={board.fieldSize}
          content={field.name}
          status={field.status}
          key={`gamefield-${i}`}
          onClick={onFieldClick}
        />
      ))}
    </main>
  );
};

export default Gameboard;
