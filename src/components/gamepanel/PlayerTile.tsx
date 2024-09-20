import styles from "./player-tile.module.css";

type PlayerTileProps = {
  name: string;
  pairs: number;
  isActive?: boolean;
};

const PlayerTile = ({ name, pairs, isActive }: PlayerTileProps) => {
  const nameShort = name.slice(0, 3);

  return (
    <div
      className={`${styles["player-tile"]} ${isActive ? styles.active : ""}`}
    >
      <p className={styles.name}>{name}</p>
      <p className={styles["name--short"]}>{nameShort}</p>

      <p className={styles.pairs}>{pairs}</p>
    </div>
  );
};

export default PlayerTile;
