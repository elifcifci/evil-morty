import React from "react";
import styles from "./searchItem.module.scss";

interface ISeachItemProps {
  id: string;
  episodes: number;
  name: string
  image: string
}

const SeachItem = ({ id, name, image, episodes }: ISeachItemProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.checked = !inputRef.current.checked;    
    }
  };

  return (
    <li className={styles.searchItem} onClick={handleClick}>
      <input ref={inputRef} type="checkbox" id={id} value={name} />
      <div role="image-wrapper"><img src={image} alt={name} /></div>
      <div role="info">
        <div>
          <label htmlFor={id}>{name}</label>
        </div>
        <p>{episodes} Episodes</p>
      </div>
    </li>
  );
};

export default SeachItem;