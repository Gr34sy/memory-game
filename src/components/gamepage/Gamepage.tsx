// styles
import styles from "./gamepage.module.css";
// types
import { settings } from "../../types/settingsTypes";
import { player, turn, gamefield } from "../../types/gameTypes";
// components
import Navbar from "../navbar/Navbar";
import Overlay from "../overlay/Overlay";
import StartWindow from "../start-window/StartWindow";
import Gameboard from "../gameboard/Gameboard";
import Gamepanel from "../gamepanel/Gamepanel";
// hooks
import { useState, useEffect } from "react";
// utils
import generateBoard from "../../utils/generateBoard";
import generatePlayers from "../../utils/generatePlayers";
import { fieldClickHandler } from "../../utils/gameHandlers";

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
  const fieldSize = settings.boardSize === "g6" ? "big" : "small";
  const [players, setPlayers] = useState<player[]>([]);
  const [board, setBoard] = useState<gamefield[]>([]);
  const INITIAL_TURN = {
    player: 0,
    firstActiveField: null,
    secondActiveField: null,
  } as turn;
  const [turn, setTurn] = useState<turn>(INITIAL_TURN);
  const [pairsLeft, setPairsLeft] = useState<number>(0);

  useEffect(() => {
    if (turn.firstActiveField !== null && turn.secondActiveField !== null) {
      const timeout = setTimeout(() => {
        const firstField = turn.firstActiveField as number;
        const secondField = turn.secondActiveField as number;

        if (board[firstField].name === board[secondField].name) {
          setBoard((prevBoard) => {
            const board = prevBoard;

            board[firstField].status = "disabled";
            board[secondField].status = "disabled";

            return board;
          });
        } else {
          setBoard((prevBoard) => {
            const board = prevBoard;

            board[firstField].status = "undiscovered";
            board[secondField].status = "undiscovered";

            return board;
          });
        }

        setTurn((prevTurn) => {
          return {
            ...prevTurn,
            firstActiveField: null,
            secondActiveField: null,
          };
        });
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [turn]);

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

  // function which starts the game with the given settings
  function startGame(settings: settings) {
    const board = generateBoard(settings.theme, settings.boardSize);
    const players = generatePlayers(
      settings.players.amount,
      settings.players.names
    );

    setPlayers(players);
    setBoard(board);
    setPairsLeft(board.length / 2);
  }

  // function which handles field click
  function onFieldClick(fieldId: number) {
    fieldClickHandler(fieldId, turn, setBoard, setTurn);
  }

  if (!board || !pairsLeft) {
    return (
      <main className={`${styles.layout} ${styles["game-start"]}`}>
        <StartWindow
          setSettings={setSettings}
          setShowOverlay={setShowOverlay}
          startGame={startGame}
          hideBackBtn
        />
      </main>
    );
  }

  return (
    <div className={styles.layout}>
      <Navbar
        setShowOverlay={setShowOverlay}
        setOverlayContent={setOverlayContent}
        restart={() => {
          startGame(settings);
          setShowOverlay(false);
        }}
        displayStartWindow={displayStartWindow}
      />

      <main>
        <Gameboard
          board={board}
          fieldSize={fieldSize}
          onFieldClick={onFieldClick}
        />
      </main>

      <Gamepanel players={players} activePlayer={players[turn.player]} />

      {showOverlay && <Overlay>{overlayContent}</Overlay>}
    </div>
  );
};

export default Gamepage;
