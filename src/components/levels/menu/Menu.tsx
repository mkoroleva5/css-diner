import { useState } from "react";
import styles from "./Menu.module.css";
import classnames from "classnames";
import data from "../../../data/levelsData.json";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { changeLevel } from "../../../store/levelSlice";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const currentLevel = useAppSelector((state) => state.levelState.currentLevel);
  const completedLevels = useAppSelector(
    (state) => state.levelState.completedLevels
  );

  const isLevelCompleted = (level: string) => {
    return completedLevels.find((el) => el === Number(level));
  };

  return (
    <div className={styles.menuWrapper}>
      <button
        className={styles.button}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <span
          className={classnames(styles.line, { [styles.open]: isMenuOpen })}
        />
      </button>
      <div
        className={classnames(styles.menu, { [styles.openMenu]: isMenuOpen })}
      >
        <div className={styles.menuTitle}>Choose a level</div>
        {Object.values(data).map((level) => {
          return (
            <button
              key={level.number}
              className={classNames(styles.levelButton, {
                [styles.active]: currentLevel === Number(level.number),
              })}
              onClick={() => {
                dispatch(changeLevel(Number(level.number)));
                setIsMenuOpen(false);
              }}
            >
              <div
                className={classNames(styles.check, {
                  [styles.completed]: isLevelCompleted(level.number),
                })}
              />
              <div className={styles.c}>{level.number}</div>
              <div>{level.selector}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
