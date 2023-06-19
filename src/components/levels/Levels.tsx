import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { changeLevel } from "../../store/levelSlice";
import classNames from "classnames";
import styles from "./Levels.module.css";

export const Levels = () => {
  const currentLevel = useAppSelector((state) => state.levelState.currentLevel);
  const completedLevels = useAppSelector(
    (state) => state.levelState.completedLevels
  );
  const dispatch = useAppDispatch();

  const isLevelCompleted = (level: number) => {
    return completedLevels.find((el) => el === level);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          Level {currentLevel} of 10
          <div
            className={classNames(styles.check, {
              [styles.completed]: isLevelCompleted(currentLevel),
            })}
          />
        </div>

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
      <div className={styles.progress}>
        <div
          className={styles.inner}
          style={{ width: `${currentLevel * 10}%` }}
        />
      </div>
    </div>
  );
};
