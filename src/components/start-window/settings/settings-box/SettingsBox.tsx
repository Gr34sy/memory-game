import styles from "./settings-box.module.css";
import { PropsWithChildren } from "react";

type SettingsBoxProps = PropsWithChildren<{
  label: string;
  bigItems?: boolean;
}>;

const SettingsBox = ({ children, label, bigItems }: SettingsBoxProps) => {
  return (
    <div className={styles.box}>
      <div className={styles.label}>{label}</div>
      <div
        className={`${styles.container} ${bigItems ? styles["container-big-items"] : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default SettingsBox;
