import React from "react";
import HomepageButton from "../../components/atoms/HomepageButton";
import ThemeButton from "../../components/atoms/ThemeButton";
import Seach from "../../components/organisms/Search";
import { getCharacters } from "../../api/morty-api";
import { IErrorStatus } from "../../interfaces/erorInterfaces";
import styles from "./styles.module.scss";

const MortyUniverse = () => {
  const [isEvilMode, setIsEvilMode] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [apiData, setApiData] = React.useState();
  const [inputValue, setInputValue] = React.useState("");
  const [errorStatus, setErrorStatus] = React.useState<IErrorStatus>(undefined);

  React.useEffect(() => {
    getCharacters(inputValue, setIsLoading)
      .then((data) => {
        setErrorStatus(false);
        setApiData(data.results);
      })
      .catch((err) => {
        console.log(err);
        setErrorStatus(err.response.status);
      });
  }, [inputValue]);

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

      <ThemeButton
        hasError={!!errorStatus}
        isEvilMode={isEvilMode}
        setIsEvilMode={setIsEvilMode}
        setInputValue={setInputValue}
      />

      <Seach
        isLoading={isLoading}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isEvilMode={isEvilMode}
        errorStatus={errorStatus}
        setErrorStatus={setErrorStatus}
        apiData={apiData}
      />
      <HomepageButton hasError={!!errorStatus} isEvilMode={isEvilMode} />
    </div>
  );
};

export default MortyUniverse;
