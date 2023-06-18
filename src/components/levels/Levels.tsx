import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { changeLevel } from "../../store/levelSlice";
import styles from "./Levels.module.css";

export const Levels = () => {
  const currentLevel = useAppSelector((state) => state.levelState.currentLevel);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>Level {currentLevel} of 10</div>
        <div className={styles.buttons}>
          <button
            className={styles.prevButton}
            onClick={() => {
              if (currentLevel > 1) {
                dispatch(changeLevel(currentLevel - 1));
              }
            }}
          ></button>
          <button
            className={styles.nextButton}
            onClick={() => {
              if (currentLevel < 10) {
                dispatch(changeLevel(currentLevel + 1));
              }
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};
