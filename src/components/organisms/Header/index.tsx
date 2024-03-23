import { useSelector } from "react-redux";
import HomepageButton from "../../atoms/HomepageButton";
import styles from "./styles.module.scss";
import { RootState } from "../../../app/store";

const Header = () => {
  const isEvilMode = useSelector((state: RootState) => state.theme.isEvilMode);

  return (
    <div className={styles.header}>
      <div className={styles.innerWrapper}>
        <div
          className={`${styles.introduction} ${
            isEvilMode ? styles.evilTheme : ""
          }`}
        >
          <p>
            {isEvilMode
              ? "Welcome, Mortys, to your salvation!"
              : "So, you're new! Welcome to the university! "}
          </p>

          {isEvilMode ? (
            <p>
              Have you reviewed her{" "}
              <a href="https://elifciftci.netlify.app/">portfolio</a>?
            </p>
          ) : (
            <p>
              Aw jezz! Did you see her{" "}
              <a href="https://elifciftci.netlify.app/">portfolio</a>?
            </p>
          )}
        </div>

        <HomepageButton className={styles.homepageButton} />
      </div>
    </div>
  );
};

export default Header;
