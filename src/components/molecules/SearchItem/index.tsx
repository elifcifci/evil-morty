import React from "react";
import styles from "./searchItem.module.scss";

interface ISeachItemProps {
  id: string;
  value: string;
  episodes: number;
}

const SeachItem = ({ id, value, episodes }: ISeachItemProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.checked = !inputRef.current.checked;    
    }
  };

  return (
    <div className={styles.searchItem} onClick={handleClick}>
      <input ref={inputRef} type="checkbox" id={id} value={value} />
      <div role="image-wrapper"><img src="" alt="rick" /></div>
      <div role="info">
        <div>
          <label htmlFor={id}>{value}</label>
        </div>
        <p>{episodes} Episodes</p>
      </div>
    </div>
  );
};

export default SeachItem;