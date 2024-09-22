import styles from "./gameboard.module.css";
import { gamefield } from "../../types/gameTypes";
import GameField from "./GameField";

type GameboardProps = {
  board: gamefield[];
  fieldSize: "small" | "big";
  onFieldClick(fieldId: number): void;
};
const Gameboard = ({ board, fieldSize, onFieldClick }: GameboardProps) => {
  return (
    <main className={`${styles.gameboard} ${styles[fieldSize]}`}>
      {board.map((field, i) => (
        <GameField
          size={fieldSize}
          content={field.name}
          status={field.status}
          key={`gamefield-${i}`}
          onClick={
            field.status === "undiscovered" ? () => onFieldClick(i) : () => {}
          }
        />
      ))}
    </main>
  );
};

export default Gameboard;
