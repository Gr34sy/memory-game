// styles
import styles from "./gamepage.module.css";
// types
import { settings } from "../../types/settingsTypes";
import { player, gamefield, turn, board } from "../../types/gameTypes";
// components
import Navbar from "../navbar/Navbar";
import Overlay from "../overlay/Overlay";
import StartWindow from "../start-window/StartWindow";
// hooks
import { useState } from "react";
// utils
import generateBoard from "../../utils/generateBoard";
import generatePlayers from "../../utils/generatePlayers";
import Gameboard from "../gameboard/Gameboard";

const Gamepage = () => {
  // overlay management
  const INITIAL_CONTENT = <div>Overlay</div>;
  const [overlayContent, setOverlayContent] = useState(INITIAL_CONTENT);
  const [showOverlay, setShowOverlay] = useState(false);

  // game settings
  const INITIAL_SETTINGS = {
    players: {
      amount: 1,
      names: {
        p1: "",
      },
    },
    theme: "random",
    boardSize: "g4",
  } as settings;
  const [settings, setSettings] = useState<settings>(INITIAL_SETTINGS);

  // game
  const [players, setPlayers] = useState<player[]>([]);
  const INITIAL_BOARD = { fieldSize: "big", fields: [] } as board;
  const [board, setBoard] = useState<board>(INITIAL_BOARD);
  const INITIAL_TURN = {
    player: 0,
    firstActiveField: null,
    secondActiveField: null,
  } as turn;
  const [turn, setTurn] = useState<turn>(INITIAL_TURN);
  const [pairsLeft, setPairsLeft] = useState<number>(0);

  // functions handling the game start
  function restart() {}

  function newGame() {
    setOverlayContent(
      <StartWindow
        setSettings={setSettings}
        setShowOverlay={setShowOverlay}
        startGame={startGame}
      />
    );
    setShowOverlay(true);
  }

  // functions handling the gameplay
  function startGame(settings: settings) {
    const board = generateBoard(settings.theme, settings.boardSize);
    const players = generatePlayers(
      settings.players.amount,
      settings.players.names
    );

    setPlayers(players);
    setBoard(board);
    setPairsLeft(board.fields.length / 2);
  }

  function onFieldClick() {
    return {};
  }

  if (!board || !pairsLeft) {
    return (
      <main className={`${styles.layout} ${styles["game-start"]}`}>
        <StartWindow
          setSettings={setSettings}
          setShowOverlay={setShowOverlay}
          startGame={startGame}
        />
      </main>
    );
  }

  return (
    <div className={styles.layout}>
      <Navbar
        setShowOverlay={setShowOverlay}
        setOverlayContent={setOverlayContent}
        restart={restart}
        newGame={newGame}
      />

      <main>
        <Gameboard board={board} onFieldClick={onFieldClick} />
      </main>

      <div>
        gamepanel
      </div>

      {showOverlay && <Overlay>{overlayContent}</Overlay>}
    </div>
  );
};

export default Gamepage;
