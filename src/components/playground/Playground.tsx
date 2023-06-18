import styles from "./Playground.module.css";
import { Editor } from "./editor/Editor";
import { Viewer } from "./viewer/Viewer";

export const Playground = () => {
  return (
    <div className={styles.wrapper}>
      <Editor />
      <Viewer />
    </div>
  );
};
