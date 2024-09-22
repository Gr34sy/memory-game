import styles from "./endgame.module.css";
// components
import EndButtons from "./EndButtons";
import EndHeader from "./EndHeader";
import EndTile from "./EndTile";

import { results } from "../../types/gameTypes";

type EndGameWindowProps = {
  restart: () => void;
  setupNewGame: () => void;
  results: results;
};
const EndgameWindow = ({
  restart,
  setupNewGame,
  results,
}: EndGameWindowProps) => {
  return (
    <div className={styles.endgame}>
      <EndHeader title={results.title} subtitle={results.subtitle} />

      {results.players.length > 1 &&
        results.players.map((player, i) => {
          return (
            <EndTile
              key={`player-${i + 1}`}
              label={player.name}
              statistic={`${player.pairs} Pairs`}
              mostPairs={player.mostPairs}
            />
          );
        })}

      {results.players.length === 1 && (
        <>
          <EndTile label="Time Elapsed" statistic={results.time || "00:00"} />
          <EndTile label="Moves Taken" statistic={`${results.moves} Moves`} />
        </>
      )}

      <EndButtons restart={restart} setupNewGame={setupNewGame} />
    </div>
  );
};

export default EndgameWindow;
