// styles
import styles from "./start-window.module.css";
// types
import {
  playerAmount,
  playerNames,
  themes,
  board,
  settings,
} from "../../types/settingsTypes";

// components
import Button from "../button/Button";
import Board from "./settings/Board";
import Players from "./settings/Players";
import Theme from "./settings/theme/Theme";
// hooks and utils
import { useState } from "react";

type StartWindowProps = {
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  setSettings: React.Dispatch<React.SetStateAction<settings>>;
  startGame: (settings: settings) => void;
};

const StartWindow = ({
  setSettings,
  setShowOverlay,
  startGame,
}: StartWindowProps) => {
  const INITIAL_PLAYER_NAMES = { p1: "", p2: "", p3: "", p4: "" };
  const [playerNamesSettings, setPlayerNamesSettings] =
    useState<playerNames>(INITIAL_PLAYER_NAMES);
  const [playerAmountSettings, setPlayerAmountSettings] =
    useState<playerAmount>(1);
  const [themeSettings, setTheme] = useState<themes>("numbers");
  const [boardSettings, setBoardSettings] = useState<board>("g4");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    setPlayerNamesSettings((prevNames) => {
      return { ...prevNames, [e.target.name]: e.target.value };
    });
  }

  return (
    <form className={styles.grid}>
      <button
        className="back-button"
        onClick={(e) => {
          e.preventDefault();
          setShowOverlay(false);
        }}
      >
        Back
      </button>

      <Theme setTheme={setTheme} />

      <Players
        setPlayerAmount={setPlayerAmountSettings}
        handleNameChange={handleNameChange}
        currentPlayerAmount={playerAmountSettings}
        currentPlayerNames={playerNamesSettings}
      />

      <Board setBoard={setBoardSettings} currentBoard={boardSettings} />

      <Button
        buttonType="big"
        //"submit"
        onClick={(e) => {
          const settings = {
            theme: themeSettings,
            players: {
              amount: playerAmountSettings,
              names: playerNamesSettings,
            },
            board: boardSettings,
          };
          setSettings(settings);
          startGame(settings);
        }}
      >
        Start Game
      </Button>
    </form>
  );
};

export default StartWindow;
