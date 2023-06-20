import styles from "./Viewer.module.css";

export const Viewer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.title}>HTML Viewer</p>
        <p className={styles.fileName}>table.html</p>
      </div>
      <div className={styles.editor}>Viewer</div>
    </div>
  );
};
