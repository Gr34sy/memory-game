// styles
import styles from "./gamepanel.module.css";
// types
import { player } from "../../types/gameTypes";
// components
import PlayerTile from "./PlayerTile";
import SoloModeTiles from "./SoloModeTiles";

type GamepanelProps = {
  players: player[];
  activePlayer: player;
};

const Gamepanel = ({ players, activePlayer }: GamepanelProps) => {
  return (
    <div className={styles.gamepanel}>
      {players.length > 1 &&
        players.map((player, i) => (
          <PlayerTile
            key={`p${i}`}
            name={player.name}
            pairs={player.pairs}
            isActive={player.name === activePlayer.name}
          />
        ))}

      {players.length === 1 && <SoloModeTiles />}
    </div>
  );
};

export default Gamepanel;
