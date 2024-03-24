import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import { updateTheme } from "../../../features/theme/themeSlice";
import { updateInput } from "../../../features/inputValue/inputValueSlice";

const ThemeButton = () => {
  const isEvilMode = useSelector((state: RootState) => state.theme.isEvilMode);
  const dispatch = useDispatch();

  const handleThemeUpdate = () => {
    dispatch(updateTheme());
    dispatch(updateInput(""));
  };

  return (
    <div className={styles.buttonWrapper}>
      <div
        className={`${styles.themeButton} 
        ${isEvilMode ? styles.evilTheme : styles.mortyThema}`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            handleThemeUpdate();
          }
        }}
        onClick={handleThemeUpdate}
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
