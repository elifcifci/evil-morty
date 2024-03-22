import { IListItemInfoProps } from "../../../Interfaces/mortyUniverseInterface";
import { RootState } from "../../../app/store";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

const ListItemInfo = ({
  name,
  episodes,
  inputValue,
  image,
}: IListItemInfoProps) => {
  const firstIndexOfSerched = name
    .toLowerCase()
    .indexOf(inputValue.toLowerCase());
  const lastIndexOfSerched = firstIndexOfSerched + inputValue.length;
  const isEvilMode = useSelector((state: RootState) => state.theme.isEvilMode);

  return (
    <>
      <div role="image-wrapper">
        <img loading="lazy" src={image} alt={name} />
      </div>
      <div className={styles.infoWrapper}>
        <div>
          <p role="character-name">
            <span>{name.slice(0, firstIndexOfSerched)}</span>
            <span
              className={`${styles.selectedWord} ${
                isEvilMode ? styles.selectedEvilWord : ""
              }`}
            >
              {name.slice(firstIndexOfSerched, lastIndexOfSerched)}
            </span>
            <span>{name.slice(lastIndexOfSerched, name.length)}</span>
          </p>
        </div>
        <p>{episodes} Episodes</p>
      </div>
    </>
  );
};
export default ListItemInfo;
