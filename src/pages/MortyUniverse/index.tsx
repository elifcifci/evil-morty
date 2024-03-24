import React from "react";
import ThemeButton from "../../components/atoms/ThemeButton";
import Seach from "../../components/organisms/Search";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchData, updateLoading } from "../../features/api/mortyApiSlice";

const MortyUniverse = () => {
  const isEvilMode = useSelector((state: RootState) => state.theme.isEvilMode);
  const inputValue = useSelector(
    (state: RootState) => state.inputValue.inputValue
  );
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(updateLoading());
    dispatch(fetchData(inputValue));
  }, [inputValue]);

  return (
    <div className={`pageWrapper ${styles.mortyUniverseWrapper}`}>
      {isEvilMode && (
        <audio loop autoPlay className="evil-audio" src="/song/evil-song.mp3" />
      )}
      <ThemeButton />
      <Seach />
    </div>
  );
};

export default MortyUniverse;
