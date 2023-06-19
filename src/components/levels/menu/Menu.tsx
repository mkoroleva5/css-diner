import { useState } from "react";
import styles from "./Menu.module.css";
import classnames from "classnames";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      </div>
    </div>
  );
};
