// styles
import styles from "./navbar.module.css";
// logo
import logo from "../../assets/logo.svg";
// components
import Button from "../button/Button";
import MobileMenu from "./MobileMenu";

type NavbarProps = {
  setOverlayContent: React.Dispatch<React.SetStateAction<JSX.Element>>;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  restart: () => void;
  newGame: () => void;
};

const Navbar = ({
  setOverlayContent,
  setShowOverlay,
  restart,
  newGame,
}: NavbarProps) => {
  return (
    <nav className={styles.navbar}>
      <img
        src={logo}
        alt="memory game logotype"
        onClick={() => {}}
        className={styles.logo}
      />

      <ul className={styles.list}>
        <li>
          <Button buttonType="primary" onClick={restart}>
            Restart
          </Button>
        </li>

        <li>
          <Button buttonType="secondary" onClick={newGame}>
            New Game
          </Button>
        </li>
      </ul>

      <div className={styles["mobile-menu-button"]}>
        <Button
          buttonType="secondary"
          onClick={() => {
            setOverlayContent(
              <MobileMenu
                resume={() => {
                  setShowOverlay(false);
                }}
                restart={restart}
                newGame={newGame}
              />
            );
            setShowOverlay(true);
          }}
        >
          Menu
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
