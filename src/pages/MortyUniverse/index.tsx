import React from "react";
import { useNavigate } from "react-router-dom";
import HomepageButton from "../../components/atoms/HomepageButton";
import EvilMortyThema from "../../components/atoms/EvilMortyButton";
import Notification from "../../components/molecules/Notification";
import Seach from "../../components/organisms/Search";
import { getCharacters } from "../../api/ricks-api";
import { IErrorStateProps } from "../../interfaces/erorInterfaces";
import styles from "./styles.module.scss";

const MortyUniverse = () => {
  const [isOpenedNotification, setIsOpenedNotification] = React.useState(false);
  const [isEvilMode, setIsEvilMode] = React.useState(false);
  const [notFountText, setNotFountText] = React.useState<string | undefined>(
    undefined
  );
  const [apiData, setApiData] = React.useState();
  const [error, setError] = React.useState<IErrorStateProps>({
    message: undefined,
    status: undefined,
  });
  const navigate = useNavigate();

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

  const redirectPage = (targetPath: string) => {
    navigate(targetPath);
  };

  return (
    <div className={`pageWrapper ${styles.mortyUniverseWrapper}`}>
      {isEvilMode && (
        <audio
          loop
          autoPlay
          className="evil-audio"
          src="../../../public/song/evil-song.mp3"
        />
      )}

      <EvilMortyThema
        isEvilMode={isEvilMode}
        setIsEvilMode={setIsEvilMode}
        setNotFountText={setNotFountText}
      />

      {isOpenedNotification && (
        <Notification
          type="error"
          text={error.message}
          status={error.status}
          setIsOpenedNotification={setIsOpenedNotification}
        />
      )}

      <Seach
        notFountText={notFountText}
        setNotFountText={setNotFountText}
        isEvilMode={isEvilMode}
        error={error}
        apiData={apiData}
      />
      <HomepageButton isEvilMode={isEvilMode} redirectPage={redirectPage} />
    </div>
  );
};

export default MortyUniverse;
