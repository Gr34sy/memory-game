// styles
import styles from "./navbar.module.css";
// logo
import logo from "../../../assets/logo.svg";
// components
import Button from "../button/Button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <img
          src={logo}
          alt="memory game logotype"
          onClick={() => {}}
          className={styles.logo}
        />

        <ul className={styles.list}>
          <li>
            <Button buttonType="primary" onClick={() => {}}>
              Restart
            </Button>
          </li>

          <li>
            <Button buttonType="secondary" onClick={() => {}}>
              New Game
            </Button>
          </li>
        </ul>

        <div className={styles["mobile-menu-button"]}>
          <Button
            buttonType="secondary"
            onClick={() => {
              //   setOverlayContent(
              //     <MobileMenu
              //       resume={() => {}}
              //       restart={() => {}}
              //       newGame={() => {}}
              //     />
              //   );
            }}
          >
            Menu
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
