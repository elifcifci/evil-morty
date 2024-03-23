import { useNavigate } from "react-router-dom";
import Portal from "../Portal";
import { IHomepageButtonProps } from "../../../Interfaces/atomInterfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import styles from "./styles.module.scss";

const HomepageButton = ({ className }: IHomepageButtonProps) => {
  const navigate = useNavigate();
  const isEvilMode = useSelector((state: RootState) => state.theme.isEvilMode);

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
      <Portal
        imgType={"png"}
        isEvilMode={isEvilMode}
        className={styles.portal}
        imageSize="xs"
      />
      <p>Go back</p>
    </button>
  );
};

export default HomepageButton;
