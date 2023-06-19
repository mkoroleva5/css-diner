import { useAppSelector } from "../../hooks/useRedux";
import styles from "./Levels.module.css";
import { LevelTitle } from "./levelTitle/LevelTitle";
import { Menu } from "./menu/Menu";
import { Navigation } from "./navigation/Navigation";

export const Levels = () => {
  const currentLevel = useAppSelector((state) => state.levelState.currentLevel);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <LevelTitle />
        <div className={styles.nav}>
          <Navigation />
          <Menu />
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
