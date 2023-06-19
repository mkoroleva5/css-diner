import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { changeLevel } from "../../../store/levelSlice";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  const currentLevel = useAppSelector((state) => state.levelState.currentLevel);
  const dispatch = useAppDispatch();

  return (
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
  );
};
