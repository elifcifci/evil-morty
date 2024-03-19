import { headerInterface } from "../../../Interfaces/headerInterfaces";
import HomepageButton from "../../atoms/HomepageButton";
import styles from "./styles.module.scss";

const Header = ({ isEvilMode }: headerInterface) => {
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

        <HomepageButton
          className={styles.homepageButton}
          isEvilMode={isEvilMode}
        />
      </div>
    </div>
  );
};

export default Header;
