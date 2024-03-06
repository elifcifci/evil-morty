import React from "react";
import Portal from "../../components/atoms/Portal";
import Seach from "../../components/organisms/Search";
import styles from "./styles.module.scss";
import { IMortyUniverseProps } from "../../interfaces/pageInterfaces";

const LandingPage = ({
}: IMortyUniverseProps) => {

  return (
    <div className={styles.mainPageContainer}>
      
      <Portal className={styles.portal} imageSize="s" />
    </div>
  );
};

export default LandingPage;
