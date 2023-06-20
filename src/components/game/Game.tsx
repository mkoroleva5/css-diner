import { Playground } from "./playground/Playground";
import styles from "./Game.module.css";
import { Plates } from "./plates/Plates";
import { Title } from "./title/Title";

export const Game = () => {
  return (
    <div className={styles.gameWrapper}>
      <Title />
      <Plates />
      <Playground />
    </div>
  );
};
