// styles
import styles from "./gamepage.module.css";
// types
import { settings } from "../../types/settingsTypes";
import { player, gamefield, turn } from "../../types/gameTypes";
// components
import Navbar from "../navbar/Navbar";
import Overlay from "../overlay/Overlay";
import StartWindow from "../start-window/StartWindow";
// hooks
import { useState } from "react";
// utils
import generateBoard from "../../utils/generateBoard";
import generatePlayers from "../../utils/generatePlayers";

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
    board: "g4",
  } as settings;
  const [settings, setSettings] = useState<settings>(INITIAL_SETTINGS);

  // game
  const [players, setPlayers] = useState<player[]>([]);
  const [board, setBoard] = useState<gamefield[]>([]);
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
    const board = generateBoard(settings.theme, settings.board);
    const players = generatePlayers(
      settings.players.amount,
      settings.players.names
    );

    console.log(players);
    console.log(board);
  }

  // if (!board || !pairsLeft) {
  //   return (
  //     <main className={`${styles.layout} ${styles["game-start"]}`}>
  //       <StartWindow
  //         setSettings={setSettings}
  //         setShowOverlay={setShowOverlay}
  //         startGame={startGame}
  //       />
  //     </main>
  //   );
  // }

  return (
    <div>
      <Navbar
        setShowOverlay={setShowOverlay}
        setOverlayContent={setOverlayContent}
        restart={restart}
        newGame={newGame}
      />

      <main className={styles.layout}></main>

      {showOverlay && <Overlay>{overlayContent}</Overlay>}
    </div>
  );
};

export default Gamepage;
