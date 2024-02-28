import React from "react";
import SelectedItem from "../../atoms/SelectedItem";
import { CaretDown } from "../../../../public/icons/CaretDown";
import styles from "./searchInput.module.scss";

const SeachInput = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  
  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.seachInputWrapper} onClick={handleClick}>
      <div className={styles.inputWrapper}>
        <SelectedItem id="10" value="ölş" />
        <input ref={inputRef} typeof="text" />
      </div>

      <CaretDown className={styles.caretDown} iconSize="m" secondary />
    </div>
  );
};

export default SeachInput;