import React, { Suspense } from "react";
import Portal from "../../components/atoms/Portal";
import Loading from "../../components/atoms/Loading";
import Seach from "../../components/organisms/Search";
import styles from "./styles.module.scss";

const LandingPage = () => {
  const [isEvilMode, setIsEvilMode] = React.useState(false);

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.mainPageContainer}>
        <Portal className={styles.portal} imageSize="s" />
        <Seach isEvilMode={isEvilMode} />
      </div>
    </Suspense>
  );
};

export default LandingPage;
