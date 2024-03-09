import React from "react";
import { IEvilMortyThemaProps } from "../../../interfaces/SearchProps";
import styles from "./styles.module.scss";

const EvilMortyThema = ({
  isEvilMode,
  setIsEvilMode,
  setNotFountText
}: IEvilMortyThemaProps) => {

  const handleClick = () => {
    setNotFountText(undefined)
    setIsEvilMode((prew: boolean) => !prew);
  };

  const handlKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.code === "Enter") {
      setNotFountText(undefined)
      setIsEvilMode((prew: boolean) => !prew);
    }
  };

  return (
    <div className={styles.buttonWrapper}>
      <div
        className={`${styles.evilThemeButton} ${
          isEvilMode ? styles.evilTheme : styles.mortyThema
        }`}
        tabIndex={0}
        onKeyDown={(e) => handlKeyDown(e)}
        onClick={handleClick}
      >
        <div
          className={isEvilMode ? styles.evilHead : styles.mortyHead}
          role="img-wrapper"
        >
          <img src="/images/evil-head.png" />
          <img src="/images/morty-head.png" />
        </div>
      </div>
    </div>
  );
};

export default EvilMortyThema;
