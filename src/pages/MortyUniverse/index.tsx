import React from "react";
import ThemeButton from "../../components/atoms/ThemeButton";
import Seach from "../../components/organisms/Search";
import { getCharacters } from "../../api/morty-api";
import styles from "./styles.module.scss";
import { IErrorStatus } from "../../Interfaces/erorInterfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const MortyUniverse = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [apiData, setApiData] = React.useState();
  const [errorStatus, setErrorStatus] = React.useState<IErrorStatus>(undefined);
  const isEvilMode = useSelector((state: RootState) => state.theme.isEvilMode);
  const inputValue = useSelector(
    (state: RootState) => state.inputValue.inputValue
  );

  React.useEffect(() => {
    setTimeout(() => {
      getCharacters(inputValue, setIsLoading)
        .then((data) => {
          setErrorStatus(false);
          setApiData(data.results);
        })
        .catch((err) => {
          console.log(err);
          setErrorStatus(err.response.status);
          setApiData(undefined);
        });
    }, 400);
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

      <ThemeButton />

      <Seach
        isLoading={isLoading}
        errorStatus={errorStatus}
        setErrorStatus={setErrorStatus}
        apiData={apiData}
      />
    </div>
  );
};

export default MortyUniverse;
