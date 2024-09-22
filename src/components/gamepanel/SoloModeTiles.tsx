// styles
import styles from "./solo-mode-tiles.module.css";

type SoloModeTilesProps = {
  time: string;
  moves: number;
};

const SoloModeTiles = ({ time, moves }: SoloModeTilesProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles["box-label"]}>Time</div>
        <div className={styles["box-content"]}>{time}</div>
      </div>

      <div className={styles.box}>
        <div className={styles["box-label"]}>Moves</div>

        <div className={styles["box-content"]}>{moves}</div>
      </div>
    </div>
  );
};

export default SoloModeTiles;
