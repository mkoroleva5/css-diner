import styles from "./Editor.module.css";

export const Editor = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.title}>CSS Editor</p>
        <p className={styles.fileName}>style.css</p>
      </div>
      <div className={styles.editor}>Editor</div>
    </div>
  );
};
