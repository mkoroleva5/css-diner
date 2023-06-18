import { useAppSelector } from "../../hooks/useRedux";
import data from "../../data/levelTitles.json";
import styles from "./Title.module.css";

export const Title = () => {
  const currentLevel = useAppSelector((state) => state.levelState.currentLevel);
  const currentTitle = data[currentLevel.toString()];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{currentTitle}</h2>
      {currentLevel <= 3 && (
        <button className={styles.hint}>Help, I'm stuck!</button>
      )}
    </div>
  );
};
