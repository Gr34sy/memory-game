import styles from "./end-header.module.css";

type EndHeaderProps = {
  title: string;
  subtitle: string;
};

const EndHeader = ({ title, subtitle }: EndHeaderProps) => {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default EndHeader;
