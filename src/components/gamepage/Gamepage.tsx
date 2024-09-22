// styles
import styles from "./gamepage.module.css";
// types
import { settings } from "../../types/settingsTypes";
import {
  player,
  turn,
  gamefield,
  gameStatus,
  results,
} from "../../types/gameTypes";
// components
import Navbar from "../navbar/Navbar";
import Overlay from "../overlay/Overlay";
import StartWindow from "../start-window/StartWindow";
import Gameboard from "../gameboard/Gameboard";
import Gamepanel from "../gamepanel/Gamepanel";
// hooks
import { useState, useEffect } from "react";
// utils
import avialableThemes from "../../utils/avialableThemes";
import generateBoard from "../../utils/generateBoard";
import generatePlayers from "../../utils/generatePlayers";
import {
  checkMatch,
  fieldClickHandler,
  getGameResults,
} from "../../utils/gameHandlers";
import EndgameWindow from "../end-window/EndgameWindow";

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
    theme: avialableThemes[0],
    boardSize: "g4",
  } as settings;
  const [settings, setSettings] = useState<settings>(INITIAL_SETTINGS);

  // game
  const [gameStatus, setGameStatus] = useState<gameStatus>("not-started");
  const fieldSize = settings.boardSize === "g6" ? "big" : "small";
  const [players, setPlayers] = useState<player[]>([]);
  const [board, setBoard] = useState<gamefield[]>([]);
  const INITIAL_TURN = {
    player: 0,
    firstActiveField: null,
    secondActiveField: null,
  } as turn;
  const [turn, setTurn] = useState<turn>(INITIAL_TURN);

  // function which starts the game with the given settings
  function startGame(settings: settings) {
    const board = generateBoard(settings.theme, settings.boardSize);
    const players = generatePlayers(
      settings.players.amount,
      settings.players.names
    );

    setPlayers(players);
    setBoard(board);
    setTurn(INITIAL_TURN);
    setGameStatus("running");
  }

  function restart() {
    startGame(settings);
    setTurn(INITIAL_TURN);
    setShowOverlay(false);
  }

  // function which handles field click
  function onFieldClick(fieldId: number) {
    fieldClickHandler(fieldId, turn, setBoard, setTurn);
  }

  // function  handling the start window display
  function displayStartWindow() {
    setOverlayContent(
      <StartWindow
        setSettings={setSettings}
        setShowOverlay={setShowOverlay}
        startGame={startGame}
      />
    );
    setShowOverlay(true);
  }

  // checks for match after each turn state change
  useEffect(() => {
    if (turn.firstActiveField !== null && turn.secondActiveField !== null) {
      const timeout = setTimeout(() => {
        checkMatch(board, turn, players, setBoard, setTurn, setPlayers);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [turn]);

  // checks if the all pairs were already found and finishes the game if they were
  useEffect(() => {
    const undiscoveredFields = board.filter(
      (field) => field.status === "undiscovered"
    );

    if (undiscoveredFields.length < 1 && board.length > 0) {
      setGameStatus("finished");
      const results: results = getGameResults([...players]);

      const timeout = setTimeout(() => {
        setOverlayContent(
          <EndgameWindow
            results={results}
            restart={restart}
            setupNewGame={displayStartWindow}
          />
        );
        setShowOverlay(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [board]);

  if (gameStatus === "not-started") {
    return (
      <div className={`${styles.layout} ${styles["game-start"]}`}>
        <StartWindow
          setSettings={setSettings}
          setShowOverlay={setShowOverlay}
          startGame={startGame}
          hideBackBtn
        />
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <Navbar
        setShowOverlay={setShowOverlay}
        setOverlayContent={setOverlayContent}
        restart={restart}
        displayStartWindow={displayStartWindow}
      />

      <Gameboard
        board={board}
        fieldSize={fieldSize}
        onFieldClick={gameStatus === "running" ? onFieldClick : () => {}}
      />

      <Gamepanel players={players} activePlayer={players[turn.player]} />

      {showOverlay && <Overlay>{overlayContent}</Overlay>}
    </div>
  );
};

export default Gamepage;
