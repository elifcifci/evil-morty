import React from "react";
import Portal from "../../components/atoms/Portal";
import Seach from "../../components/organisms/Search";
import styles from "./styles.module.scss";

const Main = () => {
  const [isEvilMode, setIsEvilMode] = React.useState(false);

  return (
    <div className={styles.mainPageContainer}>
      <Portal className={styles.portal} imageSize="m" />
      <Seach isEvilMode={isEvilMode} />
    </div>
  );
};

export default Main;
