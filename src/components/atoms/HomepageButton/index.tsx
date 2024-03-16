import { IHomepageButtonProps } from "../../../interfaces/atomInterfaces";
import { useNavigate } from "react-router-dom";
import Portal from "../Portal";
import styles from "./styles.module.scss";

const HomepageButton = ({
  hasError,
  isEvilMode,
}: IHomepageButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className={`${styles.homePageButton} 
        ${hasError ? styles.errorTheme : ""}
        ${isEvilMode ? styles.evilTheme : ""}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate("/");
        }
      }}
    >
      <Portal className={styles.portal} imageSize="m" />
      <p>Go back</p>
    </button>
  );
};

export default HomepageButton;
