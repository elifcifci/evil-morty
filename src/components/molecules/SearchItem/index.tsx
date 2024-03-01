import React from "react";
import styles from "./searchItem.module.scss";

interface ISeachItemProps {
  id: string;
  episodes: number;
  name: string;
  image: string;
  inputValue: string;
}

const SeachItem = ({
  id,
  name,
  image,
  episodes,
  inputValue,
}: ISeachItemProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const firstIndexOfSerched = name
    .toLowerCase()
    .indexOf(inputValue.toLowerCase());
  const lastIndexOfSerched = firstIndexOfSerched + inputValue.length;

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.checked = !inputRef.current.checked;
    }
  };

  return (
    <li
      tabIndex={0}
      className={styles.searchItem}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleClick();
        }
      }}
    >
      <input ref={inputRef} tabIndex={-1} type="checkbox" id={id} value={name} />
      <div role="image-wrapper">
        <img src={image} alt={name} />
      </div>
      <div role="info">
        <div>
          <label htmlFor={id} role="character-name">
            <span>{name.slice(0, firstIndexOfSerched)}</span>
            <span className={styles.queriedPart}>
              {name.slice(firstIndexOfSerched, lastIndexOfSerched)}
            </span>
            <span>{name.slice(lastIndexOfSerched, name.length)}</span>
          </label>
        </div>
        <p>{episodes} Episodes</p>
      </div>
    </li>
  );
};

export default SeachItem;
