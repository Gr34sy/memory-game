// styles
import Button from "../button/Button";
import styles from "./mobile-menu.module.css";

type MobileMenuProps = {
  resume: () => void;
  restart: () => void;
  newGame: () => void;
};

const MobileMenu = ({ resume, restart, newGame }: MobileMenuProps) => {
  return (
    <div className={styles["mobile-menu"]}>
      <Button buttonType="primary" onClick={resume}>
        Resume
      </Button>

      <Button buttonType="secondary" onClick={restart}>
        Restart
      </Button>

      <Button buttonType="secondary" onClick={newGame}>
        New Game
      </Button>
    </div>
  );
};

export default MobileMenu;
