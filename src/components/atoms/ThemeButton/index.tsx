import React from "react";
import styles from "./styles.module.scss";
import { IThemeButtonProps } from "../../../Interfaces/mortyUniverseInterface";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import { updateTheme } from "../../../features/theme/themeSlice";

const ThemeButton = ({ setInputValue }: IThemeButtonProps) => {
  const isEvilMode = useSelector((state: RootState) => state.theme.isEvilMode);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateTheme());
    setInputValue("");
  };

  const handlKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.code === "Enter") {
      dispatch(updateTheme());
      setInputValue("");
    }
  };

  return (
    <div className={styles.buttonWrapper}>
      <div
        className={`${styles.themeButton} 
        ${isEvilMode ? styles.evilTheme : styles.mortyThema}`}
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

export default ThemeButton;
