import styles from "./end-tile.module.css";

type TileProps = {
  label: string;
  statistic: string;
  mostPairs?: boolean;
};

const EndTile = ({ label, statistic, mostPairs }: TileProps) => {
  return (
    <div
      className={`${styles.tile} ${mostPairs ? styles["most-pairs-tile"] : ""}`}
    >
      <div className={styles.label}>{label}</div>

      <div className={styles.statistic}>{statistic}</div>
    </div>
  );
};

export default EndTile;
