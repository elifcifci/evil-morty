import { IListItemInfoProps } from "../../../interfaces/SearchProps";
import styles from "./styles.module.scss";

const ListItemInfo = ({
  id,
  name,
  episodes,
  inputValue,
  image,
}: IListItemInfoProps) => {
  const firstIndexOfSerched = name
    .toLowerCase()
    .indexOf(inputValue.toLowerCase());
  const lastIndexOfSerched = firstIndexOfSerched + inputValue.length;

  return (
    <>
      <div role="image-wrapper">
        <img loading="lazy" src={image} alt={name} />
      </div>
      <div className={styles.infoWrapper}>
        <div>
          <label htmlFor={id} role="character-name">
            <span>{name.slice(0, firstIndexOfSerched)}</span>
            <span>{name.slice(firstIndexOfSerched, lastIndexOfSerched)}</span>
            <span>{name.slice(lastIndexOfSerched, name.length)}</span>
          </label>
        </div>
        <p>{episodes} Episodes</p>
      </div>
    </>
  );
};
export default ListItemInfo;
