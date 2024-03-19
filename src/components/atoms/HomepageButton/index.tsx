import { useNavigate } from "react-router-dom";
import Portal from "../Portal";
import { IHomepageButtonProps } from "../../../Interfaces/atomInterfaces";
import styles from "./styles.module.scss";

const HomepageButton = ({
  isEvilMode,
  className,
}: IHomepageButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className={`${styles.homePageButton}
        ${isEvilMode ? styles.evilTheme : ""}
        ${className}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate("/");
        }
      }}
    >
      <Portal imgType={"png"} isEvilMode={isEvilMode} className={styles.portal} imageSize="xs"/>
      <p>Go back</p>
    </button>
  );
};

export default HomepageButton;
