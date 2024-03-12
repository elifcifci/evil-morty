import { IHomepageButtonProps } from "../../../interfaces/atomInterfaces";
import Portal from "../Portal";
import styles from "./styles.module.scss"

const HomepageButton = ({isEvilMode, redirectPage}: IHomepageButtonProps) => {
    return (
        <button
        onClick={() => redirectPage("/")}
        className={`${styles.homePageButton} ${
          isEvilMode ? styles.evilTheme : ""
        }`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            redirectPage("/");
          }
        }}
      >
        <Portal className={styles.portal} imageSize="m" />
        <p>Go back</p>
      </button>
    )
}

export default HomepageButton;