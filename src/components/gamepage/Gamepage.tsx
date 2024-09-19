// styles
import styles from "./gamepage.module.css";
// components
import Navbar from "../navbar/Navbar";
// hooks
import { useState } from "react";
import Overlay from "../overlay/Overlay";

const Gamepage = () => {
  const INITIAL_CONTENT = <div></div>;
  const [overlayContent, setOverlayContent] = useState(INITIAL_CONTENT);
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div>
      <Navbar />

      <main className={styles.layout}></main>

      {showOverlay && <Overlay>{overlayContent}</Overlay>}
    </div>
  );
};

export default Gamepage;
