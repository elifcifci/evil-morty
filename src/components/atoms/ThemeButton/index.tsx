import React from "react";
import { IThemeButtonProps } from "../../../interfaces/SearchProps";
import styles from "./styles.module.scss";

const ThemeButton = ({
  hasError,
  isEvilMode,
  setIsEvilMode,
  setInputValue,
}: IThemeButtonProps) => {
  const handleClick = () => {
    setIsEvilMode((prew: boolean) => !prew);
    setInputValue("");
  };

  const handlKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.code === "Enter") {
      setIsEvilMode((prew: boolean) => !prew);
      setInputValue("");
    }
  };

  return (
    <div className={styles.buttonWrapper}>
      <div
        className={`${styles.themeButton} 
        ${hasError ? styles.errorTheme : ""}
        ${isEvilMode ? styles.evilTheme : styles.mortyThema}`}
        tabIndex={0}
        onKeyDown={(e) => handlKeyDown(e)}
        onClick={handleClick}
      >
        <div
          className={
            isEvilMode
              ? styles.evilHead
              : hasError
              ? styles.rickHead
              : styles.mortyHead
          }
          role="img-wrapper"
        >
          <img src="/images/evil-head.png" />
          <img src="/images/morty-head.png" />
          <img src="/images/rick-head.png" />
        </div>
      </div>
    </div>
  );
};

export default ThemeButton;
