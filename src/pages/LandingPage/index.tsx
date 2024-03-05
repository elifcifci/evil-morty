import React from "react";
import Portal from "../../components/atoms/Portal";
import Notification from "../../components/molecules/Notification";
import Seach from "../../components/organisms/Search";
import { getCharacters } from "../../api/ricks-api";
import styles from "./styles.module.scss";
import { IErrorStateProps } from "../../interfaces/erorInterfaces";
import { ILandingPageProps } from "../../interfaces/pageInterfaces";

const LandingPage = ({
  isOpenedNotification,
  setIsOpenedNotification,
}: ILandingPageProps) => {
  const [isEvilMode, setIsEvilMode] = React.useState(false);
  const [apiData, setApiData] = React.useState();
  const [error, setError] = React.useState<IErrorStateProps>({
    message: undefined,
    status: undefined,
  });

  React.useEffect(() => {
    getCharacters()
      .then((data) => {
        setApiData(data.results);
      })
      .catch((err) => {
        console.log(err);
        setIsOpenedNotification(true);
        setError({ message: err.message, status: err.response.status });
      });
  }, []);

  return (
    <div className={styles.mainPageContainer}>
      {isOpenedNotification && (
        <Notification
          type="error"
          text={error.message}
          status={error.status}
          setIsOpenedNotification={setIsOpenedNotification}
        />
      )}
      <Portal className={styles.portal} imageSize="s" />
      <Seach isEvilMode={isEvilMode} error={error} apiData={apiData} />
    </div>
  );
};

export default LandingPage;
