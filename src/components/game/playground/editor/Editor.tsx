import classNames from "classnames";
import styles from "./Editor.module.css";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../hooks/useRedux";

export const Editor = () => {
  const currentLevel = useAppSelector((state) => state.levelState.currentLevel);
  const rows = new Array(20).fill("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [inputValue, setIsInputValue] = useState<string>("");

  useEffect(() => {
    setIsInputEmpty(true);
    setIsInputValue("");
  }, [currentLevel]);

  const handleInputChange = (value: string) => {
    if (value) {
      setIsInputValue(value);
      setIsInputEmpty(false);
    } else {
      setIsInputValue("");
      setIsInputEmpty(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.title}>CSS Editor</p>
        <p className={styles.fileName}>style.css</p>
      </div>
      <div className={styles.editorWrapper}>
        <div className={styles.rows}>
          {rows.map((_, index) => {
            return <span>{index + 1}</span>;
          })}
        </div>
        <div className={styles.editor}>
          <div className={styles.inputWrapper}>
            <input
              className={classNames(styles.input, {
                [styles.emptyInput]: isInputEmpty,
              })}
              type='text'
              value={inputValue}
              placeholder='Type in a CSS selector'
              onChange={(e) => {
                const { value } = e.target;
                handleInputChange(value);
              }}
            />
            <button className={styles.enterButton} onClick={() => {}}>
              enter
            </button>
          </div>
          <div className={styles.hint}>
            {"{"}
            <br />
            /* Styles would go here. */
            <br />
            {"}"}
            <br />
            <br />
            /*
            <br />
            Type a number to skip to a level.
            <br />
            Ex → "5" for level 5
            <br />
            */
          </div>
        </div>
      </div>
    </div>
  );
};
