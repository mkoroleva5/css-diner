import styles from "./LevelTitle.module.css";
import { useAppSelector } from "../../../hooks/useRedux";
import classNames from "classnames";

export const LevelTitle = () => {
  const currentLevel = useAppSelector((state) => state.levelState.currentLevel);
  const completedLevels = useAppSelector(
    (state) => state.levelState.completedLevels
  );

  const isLevelCompleted = (level: number) => {
    return completedLevels.find((el) => el === level);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Level {currentLevel} of 10</div>
      <div
        className={classNames(styles.check, {
          [styles.completed]: isLevelCompleted(currentLevel),
        })}
      />
    </div>
  );
};
