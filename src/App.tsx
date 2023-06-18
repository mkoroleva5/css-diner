import { Title } from "./components/title/Title";
import styles from "./App.module.css";
import { Playground } from "./components/playground/Playground";
import { Plates } from "./components/plates/Plates";
import { Levels } from "./components/levels/Levels";

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gameWrapper}>
        <Title />
        <Plates />
        <Playground />
      </div>
      <Levels />
    </div>
  );
};
