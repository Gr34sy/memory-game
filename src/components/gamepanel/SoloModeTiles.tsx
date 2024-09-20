import styles from "./solo-mode-tiles.module.css";

const SoloModeTiles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles["box-label"]}>Time</div>
        <div className={styles["box-content"]}>00:00</div>
      </div>

      <div className={styles.box}>
        <div className={styles["box-label"]}>Moves</div>

        <div className={styles["box-content"]}>0</div>
      </div>
    </div>
  );
};

export default SoloModeTiles;
