import React from "react";
import Portal from "../../components/atoms/Portal";
import Notification from "../../components/molecules/Notification";
import EvilMortyThema from "../../components/atoms/EvilMortyButton";
import Seach from "../../components/organisms/Search";
import { getCharacters } from "../../api/ricks-api";
import styles from "./styles.module.scss";
import { IErrorStateProps } from "../../interfaces/erorInterfaces";

const MortyUniverse = () => {
  const [isOpenedNotification, setIsOpenedNotification] = React.useState(false);
  const [isEvilMode, setIsEvilMode] = React.useState(false);
  const [notFountText, setNotFountText] = React.useState<string | undefined>(undefined);
  const [apiData, setApiData] = React.useState();
  const [error, setError] = React.useState<IErrorStateProps>({
    message: undefined,
    status: undefined,
  });
  const audioRef = React.useRef<HTMLAudioElement>(null);

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
    <div className={`pageWrapper ${styles.mortyUniverseWrapper}`}>
      {isEvilMode && (
        <audio
          loop
          autoPlay
          ref={audioRef}
          className="evil-audio"
          src="../../../public/song/evil-song.mp3"
        />
      )}

      <EvilMortyThema isEvilMode={isEvilMode} setIsEvilMode={setIsEvilMode} setNotFountText={setNotFountText}/>

      {isOpenedNotification && (
        <Notification
          type="error"
          text={error.message}
          status={error.status}
          setIsOpenedNotification={setIsOpenedNotification}
        />
      )}
      <Portal className={styles.portal} imageSize="s" />
      <Seach notFountText={notFountText} setNotFountText={setNotFountText} isEvilMode={isEvilMode} error={error} apiData={apiData} />
    </div>
  );
};

export default MortyUniverse;
