// styles
import styles from "./gamepage.module.css";
// types
import { settings } from "../../types/settingsTypes";
// components
import Navbar from "../navbar/Navbar";
// hooks
import { useState } from "react";
import Overlay from "../overlay/Overlay";

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
  const [settings, setSettings] = useState(INITIAL_SETTINGS);

  // game
  const [players, setPlayers] = useState([]);
  const [board, setBoard] = useState([]);
  const INITIAL_TURN = {
    player: 0,
    firstActiveField: null,
    secondActiveField: null,
  };
  const [turn, setTurn] = useState(INITIAL_TURN);
  const [pairsLeft, setPairsLeft] = useState(0);

  // functions handling the game start
  function restart() {}

  function newGame() {}

  // functions handling the gameplay

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
