// styles
import styles from "./overlay.module.css";
// types
import { PropsWithChildren } from "react";

// hooks
import { useEffect, useRef, MutableRefObject } from "react";
import { createPortal } from "react-dom";

type elRef = MutableRefObject<HTMLDivElement | null>;

const Overlay = ({ children }: PropsWithChildren) => {
  const elRef: elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const portalRoot = document.getElementById("portal");
    if (!portalRoot || !elRef.current) {
      return;
    }
    portalRoot.appendChild(elRef.current);

    return () => {
      if (elRef.current) {
        portalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles["overlay-window"]}>
        <div className={styles["overlay-padding"]}>{children}</div>
      </div>
    </div>,
    elRef.current
  );
};

export default Overlay;
