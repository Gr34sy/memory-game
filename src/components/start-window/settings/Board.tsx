// types
import { boardSize } from "../../../types/settingsTypes";
import { Dispatch, SetStateAction } from "react";
// components
import SettingsBox from "./settings-box/SettingsBox";
import Button from "../../button/Button";

type BoardProps = {
  setBoard: Dispatch<SetStateAction<boardSize>>;
  currentBoard: boardSize;
};

const Board = ({ setBoard, currentBoard }: BoardProps) => {
  return (
    <SettingsBox label="Board Size">
      <Button
        buttonType="selection"
        onClick={() => setBoard("g4")}
        isActive={currentBoard === "g4"}
      >
        4x4
      </Button>
      <Button
        buttonType="selection"
        onClick={() => setBoard("g6")}
        isActive={currentBoard === "g6"}
      >
        6x6
      </Button>
    </SettingsBox>
  );
};

export default Board;
