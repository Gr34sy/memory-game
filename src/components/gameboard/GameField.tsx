// styles
import styles from "./game-field.module.css";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// utils
import { gamefieldStatus } from "../../types/gameTypes";

type GameFieldProps = {
  size: "small" | "big";
  content: string;
  status: gamefieldStatus;
  onClick: () => void;
};

const GameField = ({ size, content, status, onClick }: GameFieldProps) => {
  const isIconNeeded = content.startsWith("fa");
  const renderedContent = isIconNeeded ? (
    // @ts-ignore
    <FontAwesomeIcon icon={content} />
  ) : (
    content
  );

  return (
    <div
      className={`${styles.gamefield} ${styles[size]} ${styles[status]}`}
      onClick={onClick}
    >
      {status !== "undiscovered" && renderedContent}
    </div>
  );
};

export default GameField;
