import styles from "./end-buttons.module.css";
import Button from "../button/Button";

type EndButtonsProps = {
  restart: () => void;
  setupNewGame: () => void;
};

const EndButtons = ({ restart, setupNewGame }: EndButtonsProps) => {
  return (
    <div className={styles.container}>
      <Button buttonType="primary" onClick={restart}>
        Restart
      </Button>

      <Button buttonType="secondary" onClick={setupNewGame}>
        Setup New Game
      </Button>
    </div>
  );
};

export default EndButtons;
