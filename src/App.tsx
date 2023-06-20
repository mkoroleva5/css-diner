import styles from "./App.module.css";
import { Levels } from "./components/levels/Levels";
import { Game } from "./components/game/Game";

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Game />
      <Levels />
    </div>
  );
};
